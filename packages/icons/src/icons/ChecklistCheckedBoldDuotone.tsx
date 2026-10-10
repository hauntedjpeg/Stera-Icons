import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistCheckedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChecklistCheckedBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChecklistCheckedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 15c.55 0 1 .45 1 1s-.45 1-1 1h-8c-.55 0-1-.45-1-1s.45-1 1-1zM20 7c.55 0 1 .45 1 1s-.45 1-1 1h-8c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M6 13c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3M6 5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3" />
    </IconBase>
  ))
);

ChecklistCheckedBoldDuotone.displayName = 'ChecklistCheckedBoldDuotone';

// Triple export pattern
export { ChecklistCheckedBoldDuotone, ChecklistCheckedBoldDuotone as ChecklistCheckedBoldDuotoneIcon, ChecklistCheckedBoldDuotone as SiChecklistCheckedBoldDuotone };
export default ChecklistCheckedBoldDuotone;
export type { ChecklistCheckedBoldDuotoneProps };
