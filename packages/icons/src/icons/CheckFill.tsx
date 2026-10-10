import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckFillProps = Omit<IconBaseProps, 'children'>;

const CheckFill = memo(
  forwardRef<SVGSVGElement, CheckFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.09 5.15c.47-.5 1.26-.53 1.76-.06s.53 1.26.06 1.76L10.4 18.13c-.1.1-.23.25-.36.36-.13.12-.35.3-.68.4-.4.12-.84.08-1.22-.09-.3-.14-.5-.35-.62-.49l-.3-.4-4.23-6.05c-.4-.57-.26-1.34.3-1.74s1.35-.26 1.74.3l3.92 5.6z" />
    </IconBase>
  ))
);

CheckFill.displayName = 'CheckFill';

// Triple export pattern
export { CheckFill, CheckFill as CheckFillIcon, CheckFill as SiCheckFill };
export default CheckFill;
export type { CheckFillProps };
