import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleDotsFillProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleDotsFill = memo(
  forwardRef<SVGSVGElement, ChatBubbleDotsFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.35 0 9.88 3.87 9.88 8.87s-4.53 8.88-9.88 8.88q-1.16 0-2.25-.24l-3.8 1.52a1.88 1.88 0 0 1-2.55-2.02l.47-3.02q.01-.04-.05-.15A8.2 8.2 0 0 1 2.12 11c0-5 4.53-8.87 9.88-8.87M7.5 9.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m4.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m4.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBubbleDotsFill.displayName = 'ChatBubbleDotsFill';

// Triple export pattern (lucide-react style)
export { ChatBubbleDotsFill, ChatBubbleDotsFill as ChatBubbleDotsFillIcon, ChatBubbleDotsFill as SiChatBubbleDotsFill };
export default ChatBubbleDotsFill;
export type { ChatBubbleDotsFillProps };
