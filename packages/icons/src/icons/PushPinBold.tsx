import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PushPinBoldProps = Omit<IconBaseProps, 'children'>;

const PushPinBold = memo(
  forwardRef<SVGSVGElement, PushPinBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.76 2C18 2 19 3 19 4.24c0 .84-.48 1.62-1.24 2l-.62.3q-.14.08-.14.23v3.56q0 .13.11.2L19 11.8c.62.41 1 1.12 1 1.87v1.08c0 1.24-1 2.25-2.25 2.25H13v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6.25C5.01 17 4 16 4 14.75v-1.08c0-.75.38-1.46 1-1.87l1.89-1.26q.1-.09.11-.2V6.76q0-.15-.14-.22l-.62-.31C5.48 5.86 5 5.08 5 4.24 5 3 6 2 7.24 2zM7.24 4C7.1 4 7 4.1 7 4.24q0 .15.13.2l.63.32C8.52 5.14 9 5.92 9 6.77v3.56c0 .75-.38 1.46-1 1.87L6.1 13.46q-.1.09-.11.2v1.09c0 .14.11.25.25.25h11.5q.23-.02.25-.25v-1.08q0-.13-.11-.2L16 12.2c-.62-.41-1-1.12-1-1.87V6.77c0-.85.48-1.63 1.24-2.01l.63-.31q.12-.07.13-.21c0-.13-.1-.24-.24-.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

PushPinBold.displayName = 'PushPinBold';

// Triple export pattern
export { PushPinBold, PushPinBold as PushPinBoldIcon, PushPinBold as SiPushPinBold };
export default PushPinBold;
export type { PushPinBoldProps };
