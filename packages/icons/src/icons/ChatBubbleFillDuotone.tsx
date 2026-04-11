import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatBubbleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.88c4.59 0 8.13 3.28 8.13 7.12s-3.54 7.13-8.13 7.13a9 9 0 0 1-2.12-.25 1 1 0 0 0-.4 0l-.13.04-4.05 1.62a.13.13 0 0 1-.17-.14l.47-3.02a2 2 0 0 0-.39-1.46A6.5 6.5 0 0 1 3.88 11c0-3.84 3.53-7.12 8.12-7.12" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.13c5.35 0 9.88 3.87 9.88 8.87s-4.53 8.88-9.88 8.88q-1.16 0-2.25-.24l-3.8 1.52a1.88 1.88 0 0 1-2.55-2.02l.47-3.02q.01-.04-.05-.15A8.2 8.2 0 0 1 2.12 11c0-5 4.53-8.87 9.88-8.87m0 1.75c-4.59 0-8.12 3.28-8.12 7.12 0 1.44.48 2.79 1.33 3.92.3.4.47.92.39 1.46l-.47 3.02c-.01.1.08.17.17.14l4.05-1.62.13-.04a1 1 0 0 1 .4 0 9 9 0 0 0 2.12.25c4.59 0 8.13-3.29 8.13-7.13S16.59 3.88 12 3.88" clipRule="evenodd" />
    </IconBase>
  ))
);

ChatBubbleFillDuotone.displayName = 'ChatBubbleFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatBubbleFillDuotone, ChatBubbleFillDuotone as ChatBubbleFillDuotoneIcon, ChatBubbleFillDuotone as SiChatBubbleFillDuotone };
export default ChatBubbleFillDuotone;
export type { ChatBubbleFillDuotoneProps };
