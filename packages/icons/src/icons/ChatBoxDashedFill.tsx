import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChatBoxDashedFillProps = Omit<IconBaseProps, 'children'>;

const ChatBoxDashedFill = memo(
  forwardRef<SVGSVGElement, ChatBoxDashedFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chat-box-dashed-fill" {...props}>
      <path d="M14.51 16.27a.88.88 0 0 1 .98 1.46l-5.23 3.48c-.91.6-2.13-.05-2.13-1.14V17a.88.88 0 0 1 1.74 0v2.36zM3 11.38c.48 0 .88.39.88.87v1.28c0 1.26.95 2.35 2.26 2.56a.88.88 0 0 1-.28 1.73 4.4 4.4 0 0 1-3.74-4.29v-1.28c0-.48.4-.87.88-.87M21 11.38c.48 0 .88.39.88.87v1.28a4.4 4.4 0 0 1-3.74 4.29.88.88 0 1 1-.28-1.73 2.6 2.6 0 0 0 2.27-2.56v-1.28c0-.48.39-.87.87-.87M14.9 6.5c1.26 0 1.89 0 2.37.25q.65.33.98.98c.25.48.25 1.11.25 2.37v.8c0 1.26 0 1.89-.25 2.37q-.33.65-.98.98c-.48.25-1.11.25-2.37.25H9.1c-1.26 0-1.89 0-2.37-.25a2.3 2.3 0 0 1-.98-.98c-.25-.48-.25-1.11-.25-2.37v-.8c0-1.26 0-1.89.25-2.37q.33-.65.98-.98C7.2 6.5 7.84 6.5 9.1 6.5zM17 3.13c2.61 0 4.88 1.94 4.88 4.5V9a.88.88 0 0 1-1.75 0V7.64c0-1.45-1.32-2.76-3.13-2.76a.88.88 0 0 1 0-1.75M6.6 3.13a.87.87 0 1 1 0 1.75 2.66 2.66 0 0 0-2.72 2.59v1.3a.87.87 0 1 1-1.75 0v-1.3A4.4 4.4 0 0 1 6.6 3.13M14 3.13a.88.88 0 0 1 0 1.75h-4a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

ChatBoxDashedFill.displayName = 'ChatBoxDashedFill';

// Triple export pattern (lucide-react style)
export { ChatBoxDashedFill, ChatBoxDashedFill as ChatBoxDashedFillIcon, ChatBoxDashedFill as SiChatBoxDashedFill };
export default ChatBoxDashedFill;
export type { ChatBoxDashedFillProps };
