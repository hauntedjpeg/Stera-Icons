import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleAlertFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleAlertFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleAlertFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-bubble-alert-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.35 0 9.88 3.87 9.88 8.87s-4.53 8.88-9.88 8.88q-1.16 0-2.25-.24l-3.8 1.52a1.88 1.88 0 0 1-2.55-2.02l.47-3.02q.01-.04-.05-.15A8.2 8.2 0 0 1 2.12 11c0-5 4.53-8.87 9.88-8.87m0 10.62a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m0-6.12c-.48 0-.87.39-.87.87v3a.88.88 0 0 0 1.74 0v-3c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 12.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6.63c.48 0 .88.39.88.87v3a.88.88 0 0 1-1.76 0v-3c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

ChatBubbleAlertFillDuotone.displayName = 'ChatBubbleAlertFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleAlertFillDuotone, ChatBubbleAlertFillDuotone as ChatBubbleAlertFillDuotoneIcon, ChatBubbleAlertFillDuotone as SiChatBubbleAlertFillDuotone };
export default ChatBubbleAlertFillDuotone;
export type { ChatBubbleAlertFillDuotoneProps };
