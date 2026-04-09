import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandRightFillDuotone = memo(
  forwardRef<SVGSVGElement, HandRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-right-fill-duotone" {...props}>
      <path d="M13.82 3.88c.51 0 .93.4.93.92v6.75a.88.88 0 0 0 1.75 0V7.5a.93.93 0 0 1 1.85 0v6.3a6.33 6.33 0 0 1-12.62.87l-1.1-2.8-.05-.12a.93.93 0 0 1 1.6-.93v.01l1.49 2.51a.88.88 0 0 0 1.63-.44V5.7a.93.93 0 0 1 1.84-.1v5.5a.88.88 0 0 0 1.76 0V4.8c0-.51.41-.92.92-.92" opacity={.4} />
        <path fillRule="evenodd" d="M13.82 2.13c1.48 0 2.68 1.2 2.68 2.67V5a2.67 2.67 0 0 1 3.6 2.5v6.3a8.08 8.08 0 0 1-16.02 1.43l-1.06-2.7a2.67 2.67 0 0 1 4.53-2.81V5.7a2.68 2.68 0 0 1 4-2.32 2.7 2.7 0 0 1 2.27-1.25m0 1.75a.93.93 0 0 0-.92.92v6.3a.88.88 0 0 1-1.75 0V5.6a.93.93 0 0 0-1.85.1v7.2a.88.88 0 0 1-1.63.44l-1.48-2.5v-.02a.9.9 0 0 0-1.27-.34.93.93 0 0 0-.34 1.27l.06.12 1.1 2.8.04.18a6.33 6.33 0 0 0 12.57-1.05V7.5a.93.93 0 0 0-1.85 0v4.05a.87.87 0 1 1-1.75 0V4.8a.9.9 0 0 0-.93-.92" clipRule="evenodd" />
    </IconBase>
  ))
);

HandRightFillDuotone.displayName = 'HandRightFillDuotone';

// Triple export pattern (lucide-react style)
export { HandRightFillDuotone, HandRightFillDuotone as HandRightFillDuotoneIcon, HandRightFillDuotone as SiHandRightFillDuotone };
export default HandRightFillDuotone;
export type { HandRightFillDuotoneProps };
