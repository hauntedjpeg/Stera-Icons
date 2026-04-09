import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxQuestionFillProps = Omit<IconBaseProps, 'children'>;

const ChatBoxQuestionFill = memo(
  forwardRef<SVGSVGElement, ChatBoxQuestionFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-question-fill" {...props}>
      <path fillRule="evenodd" d="M14.6 3.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v.6q.01 1.37-.04 2.25c-.04.6-.12 1.12-.33 1.62a5 5 0 0 1-2.63 2.63q-.73.29-1.62.34-.8.04-1.98.03l-4.54 3.03-.54.34c-.16.09-.44.22-.77.2-.4-.03-.77-.22-1.02-.54-.2-.27-.24-.57-.26-.75q-.02-.3-.02-.65v-1.63q-.78.01-1.37-.04a5 5 0 0 1-1.62-.33 5 5 0 0 1-2.63-2.63q-.3-.74-.33-1.62-.06-.88-.04-2.25v-.6q-.01-1.64.05-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zM12 12.88a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.26m0-6.5c-1.08 0-2.12.71-2.36 1.8a.88.88 0 0 0 1.72.38c.04-.2.27-.43.64-.44.4 0 .63.3.63.53 0 .17-.11.36-.33.46-.44.2-1.18.73-1.18 1.64a.88.88 0 0 0 1.75.06l.06-.05.12-.07a2.3 2.3 0 0 0 1.32-2.04A2.33 2.33 0 0 0 12 6.37" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBoxQuestionFill.displayName = 'ChatBoxQuestionFill';

// Triple export pattern (lucide-react style)
export { ChatBoxQuestionFill, ChatBoxQuestionFill as ChatBoxQuestionFillIcon, ChatBoxQuestionFill as SiChatBoxQuestionFill };
export default ChatBoxQuestionFill;
export type { ChatBoxQuestionFillProps };
