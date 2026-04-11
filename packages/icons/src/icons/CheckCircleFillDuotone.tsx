import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, CheckCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m4.6 6.48a.87.87 0 0 0-1.24.05l-4.83 5.26-1.86-2.23a.88.88 0 0 0-1.34 1.12l1.91 2.3.3.33c.1.1.26.25.49.34q.46.16.92.02c.23-.08.4-.21.5-.31l.31-.32 4.88-5.33c.33-.35.3-.9-.05-1.23" clipRule="evenodd" opacity={.4} />
        <path d="M15.36 8.66a.87.87 0 1 1 1.28 1.18l-4.88 5.33-.3.32a1.38 1.38 0 0 1-1.43.29 1.4 1.4 0 0 1-.5-.34l-.29-.33-1.91-2.3a.88.88 0 0 1 1.34-1.12l1.86 2.23z" />
    </IconBase>
  ))
);

CheckCircleFillDuotone.displayName = 'CheckCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { CheckCircleFillDuotone, CheckCircleFillDuotone as CheckCircleFillDuotoneIcon, CheckCircleFillDuotone as SiCheckCircleFillDuotone };
export default CheckCircleFillDuotone;
export type { CheckCircleFillDuotoneProps };
