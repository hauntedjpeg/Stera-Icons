import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistUncheckedFillProps = Omit<IconBaseProps, 'children'>;

const ChecklistUncheckedFill = memo(
  forwardRef<SVGSVGElement, ChecklistUncheckedFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 13.13a2.88 2.88 0 1 1 0 5.75 2.88 2.88 0 0 1 0-5.75M20 15.13a.88.88 0 0 1 0 1.74h-8a.88.88 0 0 1 0-1.75zM6 5.13a2.87 2.87 0 1 1 0 5.74 2.87 2.87 0 0 1 0-5.74M20 7.13a.88.88 0 0 1 0 1.75h-8a.88.88 0 0 1 0-1.76z" />
    </IconBase>
  ))
);

ChecklistUncheckedFill.displayName = 'ChecklistUncheckedFill';

// Triple export pattern (lucide-react style)
export { ChecklistUncheckedFill, ChecklistUncheckedFill as ChecklistUncheckedFillIcon, ChecklistUncheckedFill as SiChecklistUncheckedFill };
export default ChecklistUncheckedFill;
export type { ChecklistUncheckedFillProps };
