import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteNeutralFillProps = Omit<IconBaseProps, 'children'>;

const EmoteNeutralFill = memo(
  forwardRef<SVGSVGElement, EmoteNeutralFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-neutral-fill" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m-3.5 12a.88.88 0 0 0 0 1.74h7a.88.88 0 0 0 0-1.74zM9 8.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteNeutralFill.displayName = 'EmoteNeutralFill';

// Triple export pattern (lucide-react style)
export { EmoteNeutralFill, EmoteNeutralFill as EmoteNeutralFillIcon, EmoteNeutralFill as SiEmoteNeutralFill };
export default EmoteNeutralFill;
export type { EmoteNeutralFillProps };
