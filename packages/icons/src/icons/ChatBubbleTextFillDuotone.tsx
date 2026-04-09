import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleTextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleTextFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleTextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-text-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.35 0 9.88 3.87 9.88 8.87s-4.53 8.88-9.88 8.88q-1.16 0-2.25-.24l-3.8 1.52a1.88 1.88 0 0 1-2.55-2.02l.47-3.02q.01-.04-.05-.15A8.2 8.2 0 0 1 2.12 11c0-5 4.53-8.87 9.88-8.87m-3.5 9.5a.88.88 0 0 0 0 1.74H12a.88.88 0 0 0 0-1.74zm0-3.5a.87.87 0 1 0 0 1.74h7a.88.88 0 0 0 0-1.74z" clipRule="evenodd" opacity={.4} />
        <path d="M12 11.63a.88.88 0 0 1 0 1.74H8.5a.88.88 0 0 1 0-1.74zM15.5 8.13a.88.88 0 0 1 0 1.74h-7a.87.87 0 1 1 0-1.74z" />
    </IconBase>
  ))
);

ChatBubbleTextFillDuotone.displayName = 'ChatBubbleTextFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleTextFillDuotone, ChatBubbleTextFillDuotone as ChatBubbleTextFillDuotoneIcon, ChatBubbleTextFillDuotone as SiChatBubbleTextFillDuotone };
export default ChatBubbleTextFillDuotone;
export type { ChatBubbleTextFillDuotoneProps };
