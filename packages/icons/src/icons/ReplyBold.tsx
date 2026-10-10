import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ReplyBoldProps = Omit<IconBaseProps, 'children'>;

const ReplyBold = memo(
  forwardRef<SVGSVGElement, ReplyBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.3 3.3c.28-.3.7-.38 1.08-.22.38.15.62.52.62.92v4.51c3.27.09 5.8.63 7.49 2.2C21.39 12.43 22 15.2 22 19c0 .47-.33.88-.8.98-.45.1-.92-.14-1.11-.57l-.01-.02-.06-.1q-.08-.16-.26-.44c-.24-.36-.63-.86-1.18-1.36-1.09-.98-2.86-1.99-5.58-1.99h-1V20c0 .4-.24.77-.62.92-.37.16-.8.07-1.09-.21l-8-8c-.39-.4-.39-1.03 0-1.42zM4.4 12 10 17.59V14.5c0-.55.45-1 1-1h2c3.19 0 5.38 1.17 6.8 2.4-.28-1.8-.83-2.96-1.66-3.73-1.26-1.15-3.4-1.67-7.14-1.67-.55 0-1-.45-1-1V6.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

ReplyBold.displayName = 'ReplyBold';

// Triple export pattern
export { ReplyBold, ReplyBold as ReplyBoldIcon, ReplyBold as SiReplyBold };
export default ReplyBold;
export type { ReplyBoldProps };
