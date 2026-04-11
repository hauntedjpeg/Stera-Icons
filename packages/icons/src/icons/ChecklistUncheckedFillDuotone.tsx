import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistUncheckedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChecklistUncheckedFillDuotone = memo(
  forwardRef<SVGSVGElement, ChecklistUncheckedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 15.13a.88.88 0 0 1 0 1.74h-8a.88.88 0 0 1 0-1.75zM20 7.13a.88.88 0 0 1 0 1.75h-8a.88.88 0 0 1 0-1.76z" opacity={0.4} />
        <path d="M6 13.13a2.88 2.88 0 1 1 0 5.75 2.88 2.88 0 0 1 0-5.75M6 5.13a2.87 2.87 0 1 1 0 5.74 2.87 2.87 0 0 1 0-5.74" />
    </IconBase>
  ))
);

ChecklistUncheckedFillDuotone.displayName = 'ChecklistUncheckedFillDuotone';

// Triple export pattern (lucide-react style)
export { ChecklistUncheckedFillDuotone, ChecklistUncheckedFillDuotone as ChecklistUncheckedFillDuotoneIcon, ChecklistUncheckedFillDuotone as SiChecklistUncheckedFillDuotone };
export default ChecklistUncheckedFillDuotone;
export type { ChecklistUncheckedFillDuotoneProps };
