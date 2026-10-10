import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckCircleFillProps = Omit<IconBaseProps, 'children'>;

const CheckCircleFill = memo(
  forwardRef<SVGSVGElement, CheckCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m4.6 6.48c-.37-.33-.92-.3-1.24.05l-4.83 5.26-1.86-2.23c-.3-.37-.86-.42-1.23-.11-.37.3-.42.86-.11 1.23l1.91 2.3.3.33c.1.1.26.25.49.34q.46.16.92.02.35-.14.5-.31l.31-.32 4.88-5.33c.33-.36.3-.9-.05-1.23" clipRule="evenodd" />
    </IconBase>
  ))
);

CheckCircleFill.displayName = 'CheckCircleFill';

// Triple export pattern
export { CheckCircleFill, CheckCircleFill as CheckCircleFillIcon, CheckCircleFill as SiCheckCircleFill };
export default CheckCircleFill;
export type { CheckCircleFillProps };
