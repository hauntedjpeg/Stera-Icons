import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrainFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrainFillDuotone = memo(
  forwardRef<SVGSVGElement, BrainFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.75 2q.72 0 1.38.24v7.96l-.01.19c-.1.86-.77 1.54-1.63 1.63H9.2c-.44.05-.79.43-.79.88 0 .48.4.88.88.88 1 0 1.82.81 1.82 1.82v6.02q-.84.37-1.82.38c-2.33 0-4.26-1.74-4.56-4C3.13 17.3 2 15.69 2 13.8c0-1.24.5-2.37 1.3-3.2q-.4-.8-.4-1.75C2.9 7 4.12 5.43 5.8 4.89 6.32 3.22 7.9 2 9.74 2M14.25 2c1.85 0 3.42 1.22 3.95 2.9 1.68.53 2.9 2.1 2.9 3.95q0 .95-.4 1.76c.8.82 1.3 1.95 1.3 3.19 0 1.88-1.13 3.5-2.74 4.2-.3 2.26-2.23 4-4.56 4q-.99-.01-1.82-.38V15.6c0-1 .81-1.82 1.82-1.82.48 0 .88-.4.88-.88 0-.45-.35-.83-.8-.87h-.08l-.19-.01c-.86-.1-1.54-.77-1.63-1.63V2.24Q13.53 2 14.25 2" opacity={0.4} />
        <path d="M12.88 10.2v.19c.1.86.77 1.54 1.63 1.63h.28c.44.05.79.43.79.88 0 .48-.4.88-.88.88-1 0-1.82.81-1.82 1.82v6.02q-.47-.2-.88-.5-.4.3-.87.5V15.6c0-1-.82-1.82-1.83-1.82-.48 0-.87-.4-.88-.88 0-.45.35-.83.8-.87h.08l.19-.01c.86-.1 1.54-.77 1.63-1.63V2.24q.47.16.88.43.4-.27.88-.43z" />
    </IconBase>
  ))
);

BrainFillDuotone.displayName = 'BrainFillDuotone';

// Triple export pattern
export { BrainFillDuotone, BrainFillDuotone as BrainFillDuotoneIcon, BrainFillDuotone as SiBrainFillDuotone };
export default BrainFillDuotone;
export type { BrainFillDuotoneProps };
