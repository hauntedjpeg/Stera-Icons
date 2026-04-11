import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleDotFillProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleDotFill = memo(
  forwardRef<SVGSVGElement, ChatBubbleDotFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.13q1.32 0 2.56.3a5 5 0 0 0 7.15 6.91q.16.81.16 1.66c0 5-4.52 8.88-9.87 8.88q-1.16 0-2.25-.24l-3.8 1.52a1.88 1.88 0 0 1-2.55-2.02l.47-3.02q.01-.04-.05-.15A8.2 8.2 0 0 1 2.12 11c0-5 4.53-8.87 9.88-8.87" />
        <path d="M18.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

ChatBubbleDotFill.displayName = 'ChatBubbleDotFill';

// Triple export pattern (lucide-react style)
export { ChatBubbleDotFill, ChatBubbleDotFill as ChatBubbleDotFillIcon, ChatBubbleDotFill as SiChatBubbleDotFill };
export default ChatBubbleDotFill;
export type { ChatBubbleDotFillProps };
