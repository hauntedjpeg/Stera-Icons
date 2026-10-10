import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistCheckedBoldProps = Omit<IconBaseProps, 'children'>;

const ChecklistCheckedBold = memo(
  forwardRef<SVGSVGElement, ChecklistCheckedBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 13c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3M20 15c.55 0 1 .45 1 1s-.45 1-1 1h-8c-.55 0-1-.45-1-1s.45-1 1-1zM6 5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3M20 7c.55 0 1 .45 1 1s-.45 1-1 1h-8c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ChecklistCheckedBold.displayName = 'ChecklistCheckedBold';

// Triple export pattern
export { ChecklistCheckedBold, ChecklistCheckedBold as ChecklistCheckedBoldIcon, ChecklistCheckedBold as SiChecklistCheckedBold };
export default ChecklistCheckedBold;
export type { ChecklistCheckedBoldProps };
