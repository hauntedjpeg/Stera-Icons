import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CheckCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M15.45 8.74c.28-.3.75-.32 1.06-.04.3.28.32.75.04 1.06l-4.88 5.32-.3.31q-.15.17-.46.29-.42.13-.84-.02-.3-.14-.45-.3l-.28-.33-1.92-2.3c-.26-.32-.22-.8.1-1.06s.8-.22 1.06.1l1.91 2.3.04.04.04-.04z" />
    </IconBase>
  ))
);

CheckCircleRegularDuotone.displayName = 'CheckCircleRegularDuotone';

// Triple export pattern
export { CheckCircleRegularDuotone, CheckCircleRegularDuotone as CheckCircleRegularDuotoneIcon, CheckCircleRegularDuotone as SiCheckCircleRegularDuotone };
export default CheckCircleRegularDuotone;
export type { CheckCircleRegularDuotoneProps };
