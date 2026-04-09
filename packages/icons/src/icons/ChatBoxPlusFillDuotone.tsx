import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxPlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBoxPlusFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBoxPlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-plus-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M14.6 3.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v.6q.01 1.37-.04 2.25c-.04.6-.12 1.12-.33 1.62a5 5 0 0 1-2.63 2.63q-.73.29-1.62.34-.8.04-1.98.03l-4.54 3.03-.54.34c-.16.09-.44.22-.77.2-.4-.03-.77-.22-1.02-.54-.2-.27-.24-.57-.26-.75q-.02-.3-.02-.65v-1.63q-.78.01-1.37-.04a5 5 0 0 1-1.62-.33 5 5 0 0 1-2.63-2.63q-.3-.74-.33-1.62-.06-.88-.04-2.25v-.6q-.01-1.64.05-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zM12 6.63c-.48 0-.87.39-.87.87v2.13H9a.88.88 0 0 0 0 1.74h2.13v2.13a.88.88 0 0 0 1.74 0v-2.12H15a.88.88 0 0 0 0-1.76h-2.12V7.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.63c.48 0 .88.39.88.87v2.13H15a.88.88 0 0 1 0 1.74h-2.12v2.13a.88.88 0 0 1-1.76 0v-2.12H9a.88.88 0 0 1 0-1.76h2.13V7.5c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

ChatBoxPlusFillDuotone.displayName = 'ChatBoxPlusFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBoxPlusFillDuotone, ChatBoxPlusFillDuotone as ChatBoxPlusFillDuotoneIcon, ChatBoxPlusFillDuotone as SiChatBoxPlusFillDuotone };
export default ChatBoxPlusFillDuotone;
export type { ChatBoxPlusFillDuotoneProps };
