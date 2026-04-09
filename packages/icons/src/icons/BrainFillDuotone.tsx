import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrainFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrainFillDuotone = memo(
  forwardRef<SVGSVGElement, BrainFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brain-fill-duotone" {...props}>
      <path d="M9.75 2q.72 0 1.38.24v7.96l-.01.19a1.8 1.8 0 0 1-1.63 1.63H9.3a.87.87 0 0 0-.88.88c0 .48.4.88.88.88 1 0 1.82.81 1.82 1.82v6.02q-.84.37-1.82.38a4.6 4.6 0 0 1-4.56-4 4.6 4.6 0 0 1-1.45-7.4 4.12 4.12 0 0 1 2.5-5.7A4.15 4.15 0 0 1 9.75 2M14.25 2a4.15 4.15 0 0 1 3.95 2.9 4.15 4.15 0 0 1 2.5 5.7 4.58 4.58 0 0 1-1.44 7.4 4.6 4.6 0 0 1-6.39 3.62V15.6c0-1 .82-1.82 1.83-1.82a.88.88 0 0 0 0-1.75l-.19-.01a1.8 1.8 0 0 1-1.63-1.63V2.24Q13.53 2 14.25 2" opacity={0.4} />
        <path d="M12.88 10.2v.19c.1.86.77 1.54 1.63 1.63h.19a.87.87 0 0 1 .88.88c0 .48-.4.88-.88.88-1 0-1.82.81-1.82 1.82v6.02q-.47-.2-.88-.5-.4.3-.87.5V15.6c0-1-.82-1.82-1.83-1.82a.88.88 0 0 1 0-1.75l.19-.01a1.8 1.8 0 0 0 1.63-1.63V2.24q.47.16.88.43.4-.27.88-.43z" />
    </IconBase>
  ))
);

BrainFillDuotone.displayName = 'BrainFillDuotone';

// Triple export pattern (lucide-react style)
export { BrainFillDuotone, BrainFillDuotone as BrainFillDuotoneIcon, BrainFillDuotone as SiBrainFillDuotone };
export default BrainFillDuotone;
export type { BrainFillDuotoneProps };
