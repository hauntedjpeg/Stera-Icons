import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBoxFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBoxFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.6 4.88c1.13 0 1.93 0 2.56.05.6.05.98.14 1.26.29q.9.46 1.36 1.36c.15.28.24.65.3 1.26.04.63.05 1.43.05 2.56v.6c0 .94 0 1.6-.04 2.13-.04.51-.1.82-.2 1.07a3.1 3.1 0 0 1-1.7 1.69c-.24.1-.55.16-1.06.2-.52.03-1.19.04-2.13.04a1 1 0 0 0-.37.08l-.12.06-4.63 3.1V17c0-.48-.4-.87-.88-.87-.94 0-1.6 0-2.13-.04-.51-.04-.82-.1-1.07-.2a3.1 3.1 0 0 1-1.69-1.7c-.1-.24-.16-.55-.2-1.06-.03-.52-.04-1.19-.04-2.13v-.6c0-1.13 0-1.93.06-2.56.05-.6.14-.98.29-1.26q.46-.9 1.36-1.36c.28-.15.65-.24 1.26-.3a35 35 0 0 1 2.56-.04z" opacity={.4} />
        <path fillRule="evenodd" d="M14.6 3.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v.6q.01 1.37-.04 2.25c-.04.6-.12 1.12-.33 1.62a5 5 0 0 1-2.63 2.63q-.73.29-1.62.34-.8.04-1.98.03l-4.54 3.03-.54.34c-.16.09-.44.22-.77.2-.4-.03-.77-.22-1.02-.54-.2-.27-.24-.57-.26-.75q-.02-.3-.02-.65v-1.63q-.78.01-1.37-.04a5 5 0 0 1-1.62-.33 5 5 0 0 1-2.63-2.63q-.3-.74-.33-1.62-.06-.88-.04-2.25v-.6q-.01-1.64.05-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zM9.4 4.88c-1.13 0-1.93 0-2.56.05-.6.05-.98.14-1.26.29q-.9.46-1.36 1.36c-.15.28-.24.65-.3 1.26a35 35 0 0 0-.04 2.56v.6c0 .94 0 1.6.03 2.13.04.51.1.82.2 1.07.32.76.93 1.37 1.7 1.69.24.1.55.16 1.06.2.52.03 1.19.04 2.13.04.48 0 .88.39.88.87v2.36l4.63-3.09.12-.06a1 1 0 0 1 .37-.09c.94 0 1.6 0 2.13-.03.51-.04.82-.1 1.07-.2a3.1 3.1 0 0 0 1.69-1.7c.1-.24.16-.55.2-1.06.03-.52.04-1.19.04-2.13v-.6c0-1.13 0-1.93-.06-2.56a3 3 0 0 0-.29-1.26 3 3 0 0 0-1.36-1.36 3 3 0 0 0-1.26-.3 35 35 0 0 0-2.56-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBoxFillDuotone.displayName = 'ChatBoxFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBoxFillDuotone, ChatBoxFillDuotone as ChatBoxFillDuotoneIcon, ChatBoxFillDuotone as SiChatBoxFillDuotone };
export default ChatBoxFillDuotone;
export type { ChatBoxFillDuotoneProps };
