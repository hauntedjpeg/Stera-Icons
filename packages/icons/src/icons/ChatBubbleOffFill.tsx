import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleOffFillProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleOffFill = memo(
  forwardRef<SVGSVGElement, ChatBubbleOffFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-off-fill" {...props}>
      <path d="M2.38 2.38a.9.9 0 0 1 1.24 0l17 17a.88.88 0 0 1-1.24 1.24l-2.11-2.12a10.7 10.7 0 0 1-7.52 1.14l-3.8 1.52a1.88 1.88 0 0 1-2.55-2.02l.47-3.02q.01-.05-.05-.15A8.2 8.2 0 0 1 2.12 11c0-2.1.8-4 2.13-5.5L2.38 3.61a.9.9 0 0 1 0-1.24M12 2.12c5.35 0 9.87 3.88 9.87 8.88 0 1.93-.68 3.7-1.82 5.14L7.17 3.26A11 11 0 0 1 12 2.12" />
    </IconBase>
  ))
);

ChatBubbleOffFill.displayName = 'ChatBubbleOffFill';

// Triple export pattern (lucide-react style)
export { ChatBubbleOffFill, ChatBubbleOffFill as ChatBubbleOffFillIcon, ChatBubbleOffFill as SiChatBubbleOffFill };
export default ChatBubbleOffFill;
export type { ChatBubbleOffFillProps };
