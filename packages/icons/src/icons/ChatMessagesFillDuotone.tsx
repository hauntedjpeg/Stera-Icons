import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatMessagesFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChatMessagesFillDuotone = memo(
  forwardRef<SVGSVGElement, ChatMessagesFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-messages-fill-duotone" {...props}>
      <path d="M19 7.63q.68 0 1.15.02.49.02.95.2c.7.29 1.26.85 1.56 1.55q.17.45.2.95.03.47.02 1.15V21a.88.88 0 0 1-1.34.74l-3.8-2.36H10.5q-.62.02-1.06-.06a2.9 2.9 0 0 1-2.26-2.26c-.06-.3-.05-.64-.05-1.06a.88.88 0 0 1 1.75 0c0 .5 0 .63.02.72.09.45.43.8.88.88.09.02.21.02.72.02H18q.25 0 .46.14l2.66 1.66V11.5l-.01-1.04a1 1 0 0 0-.07-.4q-.19-.41-.6-.6a1 1 0 0 0-.4-.07L19 9.37a.88.88 0 0 1 0-1.74" opacity={.4} />
        <path d="M12.8 2.13q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.56.04 1.38v3.6q.01.82-.04 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.55.05-1.38.04H6.25l-3.79 2.36a.88.88 0 0 1-1.33-.74V6.2q0-.82.03-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.05 1.38-.04z" />
    </IconBase>
  ))
);

ChatMessagesFillDuotone.displayName = 'ChatMessagesFillDuotone';

// Triple export pattern (lucide-react style)
export { ChatMessagesFillDuotone, ChatMessagesFillDuotone as ChatMessagesFillDuotoneIcon, ChatMessagesFillDuotone as SiChatMessagesFillDuotone };
export default ChatMessagesFillDuotone;
export type { ChatMessagesFillDuotoneProps };
