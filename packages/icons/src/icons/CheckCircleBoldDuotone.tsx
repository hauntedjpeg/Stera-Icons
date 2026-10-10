import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, CheckCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M15.26 8.57c.38-.4 1-.43 1.42-.06.4.38.43 1 .06 1.42l-4.89 5.32q-.14.17-.31.33c-.12.1-.3.25-.55.34q-.51.16-1-.03c-.26-.1-.43-.25-.54-.36q-.16-.16-.3-.34l-1.92-2.3c-.35-.42-.3-1.06.13-1.4.42-.36 1.05-.3 1.4.12l1.77 2.12z" />
    </IconBase>
  ))
);

CheckCircleBoldDuotone.displayName = 'CheckCircleBoldDuotone';

// Triple export pattern
export { CheckCircleBoldDuotone, CheckCircleBoldDuotone as CheckCircleBoldDuotoneIcon, CheckCircleBoldDuotone as SiCheckCircleBoldDuotone };
export default CheckCircleBoldDuotone;
export type { CheckCircleBoldDuotoneProps };
