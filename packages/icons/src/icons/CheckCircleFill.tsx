import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckCircleFillProps = Omit<IconBaseProps, 'children'>;

const CheckCircleFill = memo(
  forwardRef<SVGSVGElement, CheckCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="check-circle-fill" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m4.6 6.48a.87.87 0 0 0-1.24.05l-4.83 5.26-1.86-2.23a.88.88 0 0 0-1.34 1.12l1.91 2.3.3.33c.1.1.26.25.49.34q.46.16.92.02.35-.14.5-.31l.31-.32 4.88-5.33c.33-.36.3-.9-.05-1.23" clipRule="evenodd" />
    </IconBase>
  ))
);

CheckCircleFill.displayName = 'CheckCircleFill';

// Triple export pattern (lucide-react style)
export { CheckCircleFill, CheckCircleFill as CheckCircleFillIcon, CheckCircleFill as SiCheckCircleFill };
export default CheckCircleFill;
export type { CheckCircleFillProps };
