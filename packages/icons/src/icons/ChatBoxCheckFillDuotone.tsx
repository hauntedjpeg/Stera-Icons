import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxCheckFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBoxCheckFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBoxCheckFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.6 3.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v.6q.01 1.37-.04 2.25c-.04.6-.12 1.12-.33 1.62a5 5 0 0 1-2.63 2.63q-.73.29-1.62.34-.8.04-1.98.03l-4.54 3.03-.54.34c-.16.09-.44.22-.77.2-.4-.03-.77-.22-1.02-.54-.2-.27-.24-.57-.26-.75q-.02-.3-.02-.65v-1.63q-.78.01-1.37-.04a5 5 0 0 1-1.62-.33 5 5 0 0 1-2.63-2.63q-.3-.74-.33-1.62-.06-.88-.04-2.25v-.6q-.01-1.64.05-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm1.04 5.27a.9.9 0 0 0-1.24-.04l-3.57 3.35-1.15-1.44a.88.88 0 0 0-1.36 1.1l1.2 1.5q.13.17.27.32c.1.1.25.25.47.34q.44.18.89.06.34-.1.5-.26l.32-.29 3.63-3.4a.9.9 0 0 0 .04-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M14.4 8.36a.87.87 0 1 1 1.2 1.28l-3.63 3.4-.31.29q-.18.15-.51.26-.46.12-.9-.06a1.4 1.4 0 0 1-.46-.34q-.15-.16-.27-.32l-1.2-1.5a.87.87 0 0 1 1.36-1.1l1.15 1.44z" />
    </IconBase>
  ))
);

ChatBoxCheckFillDuotone.displayName = 'ChatBoxCheckFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBoxCheckFillDuotone, ChatBoxCheckFillDuotone as ChatBoxCheckFillDuotoneIcon, ChatBoxCheckFillDuotone as SiChatBoxCheckFillDuotone };
export default ChatBoxCheckFillDuotone;
export type { ChatBoxCheckFillDuotoneProps };
