import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxQuestionFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBoxQuestionFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBoxQuestionFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-question-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M14.6 3.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v.6q.01 1.37-.04 2.25c-.04.6-.12 1.12-.33 1.62a5 5 0 0 1-2.63 2.63q-.73.29-1.62.34-.8.04-1.98.03l-4.54 3.03-.54.34c-.16.09-.44.22-.77.2-.4-.03-.77-.22-1.02-.54-.2-.27-.24-.57-.26-.75q-.02-.3-.02-.65v-1.63q-.78.01-1.37-.04a5 5 0 0 1-1.62-.33 5 5 0 0 1-2.63-2.63q-.3-.74-.33-1.62-.06-.88-.04-2.25v-.6q-.01-1.64.05-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zM12 12.88a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.26m0-6.5c-1.08 0-2.12.71-2.35 1.8a.88.88 0 0 0 1.7.38c.05-.2.28-.43.65-.44.4 0 .63.3.63.53 0 .17-.1.36-.33.46-.43.2-1.17.73-1.17 1.64a.87.87 0 0 0 1.74.06l.07-.05.11-.07a2.3 2.3 0 0 0 1.33-2.04A2.33 2.33 0 0 0 12 6.37" clipRule="evenodd" opacity={.4} />
        <path d="M12 12.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M12 6.38c1.25 0 2.38.96 2.38 2.27 0 .92-.57 1.68-1.33 2.04l-.18.12a.87.87 0 0 1-1.74-.06c0-.91.74-1.43 1.17-1.64.22-.1.33-.29.33-.46 0-.23-.23-.52-.63-.53-.37 0-.6.25-.64.44a.88.88 0 0 1-1.72-.38A2.4 2.4 0 0 1 12 6.38" />
    </IconBase>
  ))
);

ChatBoxQuestionFillDuotone.displayName = 'ChatBoxQuestionFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBoxQuestionFillDuotone, ChatBoxQuestionFillDuotone as ChatBoxQuestionFillDuotoneIcon, ChatBoxQuestionFillDuotone as SiChatBoxQuestionFillDuotone };
export default ChatBoxQuestionFillDuotone;
export type { ChatBoxQuestionFillDuotoneProps };
