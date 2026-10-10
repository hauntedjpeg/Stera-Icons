import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PhoneOffFillProps = Omit<IconBaseProps, 'children'>;

const PhoneOffFill = memo(
  forwardRef<SVGSVGElement, PhoneOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7.5q2.78-.03 5.62.5c1.79.36 3.26.98 4.29 1.95q1.57 1.47 1.59 3.86c0 .53 0 1.22-.17 1.74-.09.27-.24.56-.53.75q-.4.26-.89.19l-.14-.02h-.01l-.02-.01-3.12-.83q-.91-.22-1.4-.46-.52-.23-.77-.64c-.16-.29-.17-.58-.16-.81.01-.28.04-.44.04-.74q0-.3-.3-.5-.38-.24-1.11-.35c-.97-.15-2.11-.1-2.92-.1-.8 0-1.95-.05-2.92.1q-.73.1-1.1.35-.32.2-.31.5c0 .3.03.46.04.74 0 .23 0 .52-.16.8-.16.3-.43.49-.77.65q-.49.23-1.4.46l-3.12.83h-.03q-.57.13-1.03-.16c-.29-.19-.44-.48-.53-.75-.17-.52-.17-1.2-.17-1.74q.01-2.39 1.6-3.86C3.11 8.98 4.6 8.36 6.37 8q2.84-.55 5.62-.5" />
    </IconBase>
  ))
);

PhoneOffFill.displayName = 'PhoneOffFill';

// Triple export pattern
export { PhoneOffFill, PhoneOffFill as PhoneOffFillIcon, PhoneOffFill as SiPhoneOffFill };
export default PhoneOffFill;
export type { PhoneOffFillProps };
