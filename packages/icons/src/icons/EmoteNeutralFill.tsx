import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteNeutralFillProps = Omit<IconBaseProps, 'children'>;

const EmoteNeutralFill = memo(
  forwardRef<SVGSVGElement, EmoteNeutralFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m-3.5 12c-.48 0-.87.39-.87.87s.39.88.87.88h7c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zM9 8.25c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteNeutralFill.displayName = 'EmoteNeutralFill';

// Triple export pattern
export { EmoteNeutralFill, EmoteNeutralFill as EmoteNeutralFillIcon, EmoteNeutralFill as SiEmoteNeutralFill };
export default EmoteNeutralFill;
export type { EmoteNeutralFillProps };
