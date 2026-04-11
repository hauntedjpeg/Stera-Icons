import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, HandLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.27 3.88c.51 0 .92.4.92.92v6.3a.88.88 0 0 0 1.75 0V5.6a.92.92 0 0 1 1.85.1v7.2a.88.88 0 0 0 1.63.44l1.49-2.5v-.02a.92.92 0 1 1 1.6.93l-.05.12-1.1 2.8-.05.18A6.33 6.33 0 0 1 5.74 13.8V7.5a.93.93 0 0 1 1.85 0v4.05a.87.87 0 1 0 1.75 0V4.8c0-.51.42-.92.93-.92" opacity={.4} />
        <path fillRule="evenodd" d="M10.27 2.13c.96 0 1.8.5 2.27 1.25q.59-.34 1.33-.35c1.48 0 2.67 1.2 2.67 2.67v4.02a2.67 2.67 0 0 1 4.53 2.82l-1.05 2.7A8.08 8.08 0 0 1 3.99 13.8V7.5A2.68 2.68 0 0 1 7.6 5v-.2c0-1.48 1.2-2.67 2.68-2.67m0 1.75a.9.9 0 0 0-.93.92v6.75a.88.88 0 0 1-1.75 0V7.5a.93.93 0 0 0-1.85 0v6.3a6.33 6.33 0 0 0 12.62.87l1.1-2.8.05-.12a.93.93 0 0 0-1.6-.93v.01l-1.49 2.51a.88.88 0 0 1-1.63-.44V5.7a.93.93 0 0 0-1.84-.1v5.5a.88.88 0 0 1-1.76 0V4.8a.93.93 0 0 0-.92-.92" clipRule="evenodd" />
    </IconBase>
  ))
);

HandLeftFillDuotone.displayName = 'HandLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { HandLeftFillDuotone, HandLeftFillDuotone as HandLeftFillDuotoneIcon, HandLeftFillDuotone as SiHandLeftFillDuotone };
export default HandLeftFillDuotone;
export type { HandLeftFillDuotoneProps };
