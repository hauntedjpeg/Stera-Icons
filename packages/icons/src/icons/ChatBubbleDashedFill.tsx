import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBubbleDashedFillProps = Omit<IconBaseProps, 'children'>;

const ChatBubbleDashedFill = memo(
  forwardRef<SVGSVGElement, ChatBubbleDashedFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.93 14.94c.48.07.8.52.74 1l-.54 3.46c-.01.1.08.17.17.14l4.05-1.62a.88.88 0 0 1 .65 1.62l-4.05 1.62a1.88 1.88 0 0 1-2.55-2.02l.54-3.47a.9.9 0 0 1 1-.73M14.04 17.9a.88.88 0 0 1 .39 1.7q-.84.2-1.71.25a.87.87 0 0 1-.11-1.74q.74-.05 1.43-.21M18.8 14.9a.87.87 0 0 1 1.4 1.06 10 10 0 0 1-2.58 2.34.88.88 0 0 1-.92-1.49 8 8 0 0 0 2.1-1.9M12 5.63c3.35 0 6.38 2.25 6.38 5.37s-3.03 5.37-6.38 5.38S5.63 14.12 5.63 11 8.65 5.63 12 5.63M2.97 10.4c.48-.02.89.36.9.84q.04.81.3 1.67a.88.88 0 0 1-1.67.53 8 8 0 0 1-.37-2.13.9.9 0 0 1 .84-.9M20.6 8.5a.87.87 0 0 1 1.06.64 8 8 0 0 1 .02 3.63.87.87 0 1 1-1.7-.39 6 6 0 0 0-.02-2.83.9.9 0 0 1 .65-1.06M6.05 4.03a.88.88 0 0 1 1 1.43A8 8 0 0 0 4.69 8a.88.88 0 0 1-1.52-.87 10 10 0 0 1 2.88-3.1M16.04 3.8a.9.9 0 0 1 1.2-.33 10 10 0 0 1 2.79 2.36.88.88 0 0 1-1.37 1.09A8 8 0 0 0 16.37 5a.9.9 0 0 1-.33-1.2M12 2.13q.93 0 1.8.14A.88.88 0 0 1 13.53 4a9 9 0 0 0-3.26.06.88.88 0 0 1-.37-1.7q1.05-.24 2.11-.23" />
    </IconBase>
  ))
);

ChatBubbleDashedFill.displayName = 'ChatBubbleDashedFill';

// Triple export pattern (lucide-react style)
export { ChatBubbleDashedFill, ChatBubbleDashedFill as ChatBubbleDashedFillIcon, ChatBubbleDashedFill as SiChatBubbleDashedFill };
export default ChatBubbleDashedFill;
export type { ChatBubbleDashedFillProps };
