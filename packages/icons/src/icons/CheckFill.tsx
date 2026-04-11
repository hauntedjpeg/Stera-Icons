import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckFillProps = Omit<IconBaseProps, 'children'>;

const CheckFill = memo(
  forwardRef<SVGSVGElement, CheckFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.09 5.15a1.25 1.25 0 0 1 1.82 1.7L10.4 18.13c-.1.1-.23.25-.36.36-.13.12-.35.3-.68.4a1.8 1.8 0 0 1-1.84-.58l-.3-.4-4.23-6.05a1.25 1.25 0 0 1 2.04-1.43l3.92 5.59z" />
    </IconBase>
  ))
);

CheckFill.displayName = 'CheckFill';

// Triple export pattern (lucide-react style)
export { CheckFill, CheckFill as CheckFillIcon, CheckFill as SiCheckFill };
export default CheckFill;
export type { CheckFillProps };
