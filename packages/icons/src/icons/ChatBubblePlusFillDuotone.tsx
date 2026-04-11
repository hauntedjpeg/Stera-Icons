import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubblePlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubblePlusFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubblePlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.35 0 9.88 3.87 9.88 8.87s-4.53 8.88-9.88 8.88q-1.16 0-2.25-.24l-3.8 1.52a1.88 1.88 0 0 1-2.55-2.02l.47-3.02q.01-.04-.05-.15A8.2 8.2 0 0 1 2.12 11c0-5 4.53-8.87 9.88-8.87m0 5c-.48 0-.87.39-.87.87v2.13H9a.88.88 0 0 0 0 1.74h2.13V14a.88.88 0 0 0 1.74 0v-2.12H15a.88.88 0 0 0 0-1.76h-2.12V8c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 7.13c.48 0 .88.39.88.87v2.13H15a.88.88 0 0 1 0 1.74h-2.12V14a.88.88 0 0 1-1.76 0v-2.12H9a.88.88 0 0 1 0-1.76h2.13V8c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

ChatBubblePlusFillDuotone.displayName = 'ChatBubblePlusFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubblePlusFillDuotone, ChatBubblePlusFillDuotone as ChatBubblePlusFillDuotoneIcon, ChatBubblePlusFillDuotone as SiChatBubblePlusFillDuotone };
export default ChatBubblePlusFillDuotone;
export type { ChatBubblePlusFillDuotoneProps };
