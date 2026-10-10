import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistBoldProps = Omit<IconBaseProps, 'children'>;

const ChecklistBold = memo(
  forwardRef<SVGSVGElement, ChecklistBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6 13c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1" clipRule="evenodd" />
        <path d="M20 15c.55 0 1 .45 1 1s-.45 1-1 1h-8c-.55 0-1-.45-1-1s.45-1 1-1zM6 5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3M20 7c.55 0 1 .45 1 1s-.45 1-1 1h-8c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ChecklistBold.displayName = 'ChecklistBold';

// Triple export pattern
export { ChecklistBold, ChecklistBold as ChecklistBoldIcon, ChecklistBold as SiChecklistBold };
export default ChecklistBold;
export type { ChecklistBoldProps };
