import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatMessagesRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatMessagesRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChatMessagesRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 7.75q.69 0 1.15.02t.9.19c.68.28 1.21.81 1.5 1.49q.16.43.18.9.03.47.02 1.15V21a.75.75 0 0 1-1.15.64l-3.81-2.39H10.5q-.62.01-1.04-.05a2.8 2.8 0 0 1-2.16-2.16q-.06-.41-.05-1.04a.75.75 0 0 1 1.5 0c0 .5 0 .64.02.74.1.5.49.89.99.99.1.02.24.02.74.02H18q.22 0 .4.11l2.85 1.79V11.5q0-.7-.02-1.04a1 1 0 0 0-.07-.44q-.21-.47-.68-.68a1 1 0 0 0-.44-.07q-.34-.02-1.04-.02a.75.75 0 0 1 0-1.5" opacity={.4} />
        <path fillRule="evenodd" d="M12.8 2.25q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v3.6q0 .82-.03 1.37-.03.57-.27 1.08-.4.8-1.2 1.2-.51.24-1.08.27-.55.04-1.37.03H6.21L2.4 16.14a.75.75 0 0 1-1.15-.64V6.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zm-7.6 1.5q-.83 0-1.25.02c-.29.03-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v7.95l2.85-1.79a1 1 0 0 1 .4-.11h6.8c.57 0 .96 0 1.25-.02s.43-.07.52-.12q.35-.18.54-.54c.05-.1.1-.23.12-.52s.02-.68.02-1.25V6.2q0-.83-.02-1.25a1 1 0 0 0-.12-.52 1.3 1.3 0 0 0-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatMessagesRegularDuotone.displayName = 'ChatMessagesRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChatMessagesRegularDuotone, ChatMessagesRegularDuotone as ChatMessagesRegularDuotoneIcon, ChatMessagesRegularDuotone as SiChatMessagesRegularDuotone };
export default ChatMessagesRegularDuotone;
export type { ChatMessagesRegularDuotoneProps };
