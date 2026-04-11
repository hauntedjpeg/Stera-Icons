import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxFillProps = Omit<IconBaseProps, 'children'>;

const ChatBoxFill = memo(
  forwardRef<SVGSVGElement, ChatBoxFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.6 3.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48q-.83.05-2.03.05l-5 3.34c-.92.6-2.14-.05-2.14-1.14v-2.2q-.81 0-1.43-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7v-.2q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06z" />
    </IconBase>
  ))
);

ChatBoxFill.displayName = 'ChatBoxFill';

// Triple export pattern (lucide-react style)
export { ChatBoxFill, ChatBoxFill as ChatBoxFillIcon, ChatBoxFill as SiChatBoxFill };
export default ChatBoxFill;
export type { ChatBoxFillProps };
