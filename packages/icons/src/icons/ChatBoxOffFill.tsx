import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxOffFillProps = Omit<IconBaseProps, 'children'>;

const ChatBoxOffFill = memo(
  forwardRef<SVGSVGElement, ChatBoxOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1.88 1.88a.9.9 0 0 1 1.24 0l1.74 1.74h.02l13.91 13.91h-.02l1.35 1.35a.88.88 0 0 1-1.24 1.24l-2.26-2.26-1.35.01-4.54 3.03-.54.34c-.16.09-.44.22-.77.2-.4-.03-.77-.22-1.02-.54-.2-.27-.24-.57-.26-.75q-.02-.3-.02-.65v-1.63q-.78.01-1.37-.04a5 5 0 0 1-1.62-.33 5 5 0 0 1-2.63-2.64q-.29-.72-.34-1.61-.05-.88-.04-2.25v-.6q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91q.3-.61.78-1.11L1.88 3.12a.9.9 0 0 1 0-1.24M14.6 3.12q1.64-.02 2.7.06a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91q.06 1.06.05 2.7v.6q.01 1.36-.04 2.25c-.04.6-.12 1.12-.33 1.61a5 5 0 0 1-1.19 1.71L6.91 3.17q1-.05 2.49-.05z" />
    </IconBase>
  ))
);

ChatBoxOffFill.displayName = 'ChatBoxOffFill';

// Triple export pattern (lucide-react style)
export { ChatBoxOffFill, ChatBoxOffFill as ChatBoxOffFillIcon, ChatBoxOffFill as SiChatBoxOffFill };
export default ChatBoxOffFill;
export type { ChatBoxOffFillProps };
