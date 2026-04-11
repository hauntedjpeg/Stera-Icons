import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxCheckFillProps = Omit<IconBaseProps, 'children'>;

const ChatBoxCheckFill = memo(
  forwardRef<SVGSVGElement, ChatBoxCheckFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.6 3.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v.6q.01 1.37-.04 2.25c-.04.6-.12 1.12-.33 1.62a5 5 0 0 1-2.63 2.63q-.73.29-1.62.34-.8.04-1.98.03l-4.54 3.03-.54.34c-.16.09-.44.22-.77.2-.4-.03-.77-.22-1.02-.54-.2-.27-.24-.57-.26-.75q-.02-.3-.02-.65v-1.63q-.78.01-1.37-.04a5 5 0 0 1-1.62-.33 5 5 0 0 1-2.63-2.63q-.3-.74-.33-1.62-.06-.88-.04-2.25v-.6q-.01-1.64.05-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm1.04 5.27a.87.87 0 0 0-1.24-.04l-3.57 3.35-1.15-1.44a.87.87 0 1 0-1.36 1.1l1.2 1.5q.13.17.27.32c.1.1.25.25.47.34q.44.18.89.06.34-.1.5-.26l.32-.29 3.63-3.4a.87.87 0 0 0 .04-1.24" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBoxCheckFill.displayName = 'ChatBoxCheckFill';

// Triple export pattern (lucide-react style)
export { ChatBoxCheckFill, ChatBoxCheckFill as ChatBoxCheckFillIcon, ChatBoxCheckFill as SiChatBoxCheckFill };
export default ChatBoxCheckFill;
export type { ChatBoxCheckFillProps };
