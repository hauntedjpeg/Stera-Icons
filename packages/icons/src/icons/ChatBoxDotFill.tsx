import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxDotFillProps = Omit<IconBaseProps, 'children'>;

const ChatBoxDotFill = memo(
  forwardRef<SVGSVGElement, ChatBoxDotFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-dot-fill" {...props}>
      <path d="M14.1 3.13q-.59 1.07-.6 2.37a5 5 0 0 0 8.37 3.7V11q.01 1.37-.04 2.25c-.04.6-.12 1.12-.33 1.62a5 5 0 0 1-2.63 2.63q-.73.29-1.62.34-.8.04-1.98.03l-4.54 3.03-.54.34c-.16.09-.44.22-.77.2-.4-.03-.77-.22-1.02-.54-.2-.27-.24-.57-.26-.75q-.02-.3-.02-.65v-1.63q-.78.01-1.37-.04a5 5 0 0 1-1.62-.33 5 5 0 0 1-2.63-2.63q-.3-.74-.33-1.62-.06-.88-.04-2.25v-.6q-.01-1.64.05-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06z" />
        <path d="M18.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

ChatBoxDotFill.displayName = 'ChatBoxDotFill';

// Triple export pattern (lucide-react style)
export { ChatBoxDotFill, ChatBoxDotFill as ChatBoxDotFillIcon, ChatBoxDotFill as SiChatBoxDotFill };
export default ChatBoxDotFill;
export type { ChatBoxDotFillProps };
