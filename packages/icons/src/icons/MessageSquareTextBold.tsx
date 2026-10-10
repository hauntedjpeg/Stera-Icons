import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageSquareTextBoldProps = Omit<IconBaseProps, 'children'>;

const MessageSquareTextBold = memo(
  forwardRef<SVGSVGElement, MessageSquareTextBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 11.25c.55 0 1 .45 1 1s-.45 1-1 1H8.5c-.55 0-1-.45-1-1s.45-1 1-1zM15.5 7.75c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M14.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48.94.48 1.7 1.25 2.19 2.19.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v.6q.01 1.37-.04 2.26-.04.9-.34 1.65c-.5 1.23-1.48 2.2-2.7 2.7-.52.22-1.05.3-1.66.35q-.8.05-1.96.04l-4.5 3q-.29.2-.55.35c-.17.09-.47.24-.84.21-.44-.02-.84-.24-1.1-.59-.23-.3-.28-.63-.3-.81L8 19.5V18q-.72 0-1.26-.04-.9-.04-1.65-.34c-1.23-.5-2.2-1.48-2.7-2.7-.22-.52-.3-1.05-.35-1.66Q1.99 12.37 2 11v-.6q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97.48-.94 1.25-1.7 2.19-2.19.6-.3 1.23-.42 1.96-.48Q7.75 2.99 9.4 3zM9.4 5c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28-.57.28-1.03.74-1.31 1.3-.14.27-.23.62-.28 1.22C4 8.47 4 9.26 4 10.4v.6c0 .95 0 1.6.04 2.12.03.5.1.8.19 1.03.3.73.89 1.32 1.62 1.62.23.1.52.16 1.03.2C7.4 16 8.05 16 9 16c.55 0 1 .45 1 1v2.13l4.45-2.96.12-.07q.2-.1.43-.1c.95 0 1.6 0 2.12-.04.5-.03.8-.1 1.03-.19.73-.3 1.32-.89 1.62-1.62.1-.23.16-.52.2-1.03.03-.52.03-1.17.03-2.12v-.6c0-1.14 0-1.93-.05-2.55-.05-.6-.14-.95-.28-1.21q-.44-.87-1.3-1.31c-.27-.14-.62-.23-1.22-.28C16.53 5 15.74 5 14.6 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

MessageSquareTextBold.displayName = 'MessageSquareTextBold';

// Triple export pattern
export { MessageSquareTextBold, MessageSquareTextBold as MessageSquareTextBoldIcon, MessageSquareTextBold as SiMessageSquareTextBold };
export default MessageSquareTextBold;
export type { MessageSquareTextBoldProps };
