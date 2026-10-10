import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistUncheckedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChecklistUncheckedBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChecklistUncheckedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 15c.55 0 1 .45 1 1s-.45 1-1 1h-8c-.55 0-1-.45-1-1s.45-1 1-1zM20 7c.55 0 1 .45 1 1s-.45 1-1 1h-8c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path fillRule="evenodd" d="M6 13c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M6 5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

ChecklistUncheckedBoldDuotone.displayName = 'ChecklistUncheckedBoldDuotone';

// Triple export pattern
export { ChecklistUncheckedBoldDuotone, ChecklistUncheckedBoldDuotone as ChecklistUncheckedBoldDuotoneIcon, ChecklistUncheckedBoldDuotone as SiChecklistUncheckedBoldDuotone };
export default ChecklistUncheckedBoldDuotone;
export type { ChecklistUncheckedBoldDuotoneProps };
