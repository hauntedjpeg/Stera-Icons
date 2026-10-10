import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistFillProps = Omit<IconBaseProps, 'children'>;

const ChecklistFill = memo(
  forwardRef<SVGSVGElement, ChecklistFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 13.13c1.59 0 2.88 1.28 2.88 2.87S7.58 18.88 6 18.88c-1.59 0-2.87-1.3-2.87-2.88 0-1.59 1.28-2.87 2.87-2.87M20 15.13c.48 0 .88.39.88.87s-.4.88-.88.88h-8c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM6 5.13C7.59 5.13 8.88 6.4 8.88 8S7.58 10.88 6 10.88c-1.59 0-2.87-1.3-2.87-2.88C3.13 6.41 4.4 5.13 6 5.13M20 7.13c.48 0 .88.39.88.87s-.4.88-.88.88h-8c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

ChecklistFill.displayName = 'ChecklistFill';

// Triple export pattern
export { ChecklistFill, ChecklistFill as ChecklistFillIcon, ChecklistFill as SiChecklistFill };
export default ChecklistFill;
export type { ChecklistFillProps };
