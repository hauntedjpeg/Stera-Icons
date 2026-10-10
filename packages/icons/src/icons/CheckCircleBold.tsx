import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckCircleBoldProps = Omit<IconBaseProps, 'children'>;

const CheckCircleBold = memo(
  forwardRef<SVGSVGElement, CheckCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.26 8.57c.38-.4 1-.43 1.42-.06.4.38.43 1 .06 1.42l-4.88 5.32-.32.33c-.12.1-.3.25-.55.34q-.52.16-1-.03c-.26-.1-.43-.25-.54-.36l-.3-.34-1.92-2.3c-.35-.42-.3-1.05.13-1.4.42-.36 1.05-.3 1.4.12l1.78 2.12z" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

CheckCircleBold.displayName = 'CheckCircleBold';

// Triple export pattern
export { CheckCircleBold, CheckCircleBold as CheckCircleBoldIcon, CheckCircleBold as SiCheckCircleBold };
export default CheckCircleBold;
export type { CheckCircleBoldProps };
