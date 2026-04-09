import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteNeutralFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteNeutralFillDuotone = memo(
  forwardRef<SVGSVGElement, EmoteNeutralFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-neutral-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m-3.5 12a.88.88 0 0 0 0 1.74h7a.88.88 0 0 0 0-1.74zM9 8.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path d="M15.5 14.13a.88.88 0 0 1 0 1.74h-7a.88.88 0 0 1 0-1.74zM9 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

EmoteNeutralFillDuotone.displayName = 'EmoteNeutralFillDuotone';

// Triple export pattern (lucide-react style)
export { EmoteNeutralFillDuotone, EmoteNeutralFillDuotone as EmoteNeutralFillDuotoneIcon, EmoteNeutralFillDuotone as SiEmoteNeutralFillDuotone };
export default EmoteNeutralFillDuotone;
export type { EmoteNeutralFillDuotoneProps };
