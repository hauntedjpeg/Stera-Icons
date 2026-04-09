import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxTextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBoxTextFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBoxTextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-text-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M14.6 3.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v.6q.01 1.37-.04 2.25c-.04.6-.12 1.12-.33 1.62a5 5 0 0 1-2.63 2.63q-.73.29-1.62.34-.8.04-1.98.03l-4.54 3.03-.54.34c-.16.09-.44.22-.77.2-.4-.03-.77-.22-1.02-.54-.2-.27-.24-.57-.26-.75q-.02-.3-.02-.65v-1.63q-.78.01-1.37-.04a5 5 0 0 1-1.62-.33 5 5 0 0 1-2.63-2.63q-.3-.74-.33-1.62-.06-.88-.04-2.25v-.6q-.01-1.64.05-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm-6.1 8.25a.88.88 0 0 0 0 1.74H12a.88.88 0 0 0 0-1.74zm0-3.5a.87.87 0 1 0 0 1.75h7a.88.88 0 0 0 0-1.76z" clipRule="evenodd" opacity={.4} />
        <path d="M12 11.38a.88.88 0 0 1 0 1.74H8.5a.88.88 0 0 1 0-1.74zM15.5 7.88a.88.88 0 0 1 0 1.75h-7a.87.87 0 1 1 0-1.76z" />
    </IconBase>
  ))
);

ChatBoxTextFillDuotone.displayName = 'ChatBoxTextFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBoxTextFillDuotone, ChatBoxTextFillDuotone as ChatBoxTextFillDuotoneIcon, ChatBoxTextFillDuotone as SiChatBoxTextFillDuotone };
export default ChatBoxTextFillDuotone;
export type { ChatBoxTextFillDuotoneProps };
