import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistUncheckedBoldProps = Omit<IconBaseProps, 'children'>;

const ChecklistUncheckedBold = memo(
  forwardRef<SVGSVGElement, ChecklistUncheckedBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6 13c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1" clipRule="evenodd" />
        <path d="M20 15c.55 0 1 .45 1 1s-.45 1-1 1h-8c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M6 5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1" clipRule="evenodd" />
        <path d="M20 7c.55 0 1 .45 1 1s-.45 1-1 1h-8c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ChecklistUncheckedBold.displayName = 'ChecklistUncheckedBold';

// Triple export pattern
export { ChecklistUncheckedBold, ChecklistUncheckedBold as ChecklistUncheckedBoldIcon, ChecklistUncheckedBold as SiChecklistUncheckedBold };
export default ChecklistUncheckedBold;
export type { ChecklistUncheckedBoldProps };
