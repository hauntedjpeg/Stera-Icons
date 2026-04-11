import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChecklistFillDuotone = memo(
  forwardRef<SVGSVGElement, ChecklistFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 14.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25M20 15.13a.88.88 0 0 1 0 1.74h-8a.88.88 0 0 1 0-1.75zM20 7.13a.88.88 0 0 1 0 1.75h-8a.88.88 0 0 1 0-1.76z" opacity={0.4} />
        <path fillRule="evenodd" d="M6 13.13a2.88 2.88 0 1 1 0 5.75 2.88 2.88 0 0 1 0-5.75m0 1.74a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.25" clipRule="evenodd" />
        <path d="M6 5.13a2.87 2.87 0 1 1 0 5.74 2.87 2.87 0 0 1 0-5.74" />
    </IconBase>
  ))
);

ChecklistFillDuotone.displayName = 'ChecklistFillDuotone';

// Triple export pattern (lucide-react style)
export { ChecklistFillDuotone, ChecklistFillDuotone as ChecklistFillDuotoneIcon, ChecklistFillDuotone as SiChecklistFillDuotone };
export default ChecklistFillDuotone;
export type { ChecklistFillDuotoneProps };
