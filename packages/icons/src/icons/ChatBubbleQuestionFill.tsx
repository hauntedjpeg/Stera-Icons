import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleQuestionFillProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleQuestionFill = memo(
  forwardRef<SVGSVGElement, ChatBubbleQuestionFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-question-fill" {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.35 0 9.88 3.87 9.88 8.87s-4.53 8.88-9.88 8.88q-1.16 0-2.25-.24l-3.8 1.52a1.88 1.88 0 0 1-2.55-2.02l.47-3.02q.01-.04-.05-.15A8.2 8.2 0 0 1 2.12 11c0-5 4.53-8.87 9.88-8.87m0 11a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.26m0-6.5c-1.08 0-2.12.71-2.36 1.8a.88.88 0 0 0 1.72.38c.04-.2.27-.43.64-.44.4 0 .63.3.63.53 0 .17-.11.36-.33.46-.44.2-1.18.73-1.18 1.64a.88.88 0 0 0 1.75.06l.06-.05.12-.07a2.3 2.3 0 0 0 1.32-2.04A2.33 2.33 0 0 0 12 6.62" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBubbleQuestionFill.displayName = 'ChatBubbleQuestionFill';

// Triple export pattern (lucide-react style)
export { ChatBubbleQuestionFill, ChatBubbleQuestionFill as ChatBubbleQuestionFillIcon, ChatBubbleQuestionFill as SiChatBubbleQuestionFill };
export default ChatBubbleQuestionFill;
export type { ChatBubbleQuestionFillProps };
