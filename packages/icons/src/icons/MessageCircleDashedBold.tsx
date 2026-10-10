import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleDashedBoldProps = Omit<IconBaseProps, 'children'>;

const MessageCircleDashedBold = memo(
  forwardRef<SVGSVGElement, MessageCircleDashedBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.95 14.81c.55.09.92.6.84 1.14l-.53 3.47L9.3 17.8c.52-.2 1.1.05 1.3.56s-.04 1.1-.55 1.3L6 21.28c-1.44.57-2.96-.63-2.72-2.16l.53-3.47c.09-.55.6-.92 1.14-.84M14.01 17.78c.54-.13 1.08.21 1.2.75s-.22 1.07-.75 1.2q-.84.18-1.73.25c-.55.03-1.03-.39-1.06-.94s.38-1.02.93-1.06q.73-.05 1.41-.2M18.7 14.83c.33-.44.95-.53 1.4-.2s.53.96.2 1.4c-.7.94-1.6 1.74-2.61 2.37-.47.3-1.09.15-1.38-.31-.3-.47-.15-1.1.32-1.38q1.24-.78 2.07-1.88M2.96 10.28c.56-.02 1.02.4 1.04.96q.02.8.3 1.64c.16.52-.13 1.09-.66 1.25-.52.17-1.09-.12-1.25-.65q-.35-1.1-.39-2.17c-.02-.55.41-1.01.96-1.03M20.58 8.37c.53-.13 1.07.2 1.2.74q.21.91.22 1.89 0 .91-.2 1.8c-.12.53-.65.87-1.2.75-.53-.12-.87-.66-.75-1.2Q20 11.7 20 11q0-.74-.17-1.43c-.12-.53.21-1.07.75-1.2M5.97 3.93c.46-.32 1.08-.2 1.4.24.31.46.2 1.08-.25 1.4-.97.67-1.77 1.53-2.32 2.49-.27.48-.88.65-1.36.37-.48-.27-.65-.88-.38-1.36.71-1.25 1.73-2.32 2.91-3.14M15.93 3.74c.27-.48.88-.65 1.36-.38q1.67.94 2.83 2.39c.35.43.28 1.06-.15 1.4-.43.35-1.06.28-1.4-.15q-.91-1.14-2.26-1.9c-.48-.27-.65-.88-.38-1.36M12 2q.93 0 1.83.15c.54.1.91.6.82 1.15s-.6.91-1.15.82Q12.76 4 12 4q-.86 0-1.71.18c-.54.12-1.07-.22-1.2-.76-.1-.54.24-1.07.78-1.2Q10.92 2.02 12 2" />
    </IconBase>
  ))
);

MessageCircleDashedBold.displayName = 'MessageCircleDashedBold';

// Triple export pattern
export { MessageCircleDashedBold, MessageCircleDashedBold as MessageCircleDashedBoldIcon, MessageCircleDashedBold as SiMessageCircleDashedBold };
export default MessageCircleDashedBold;
export type { MessageCircleDashedBoldProps };
