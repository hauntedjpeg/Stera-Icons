import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleDashedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleDashedBoldDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleDashedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.01 17.78c.54-.13 1.08.21 1.2.75s-.22 1.07-.76 1.2q-.83.18-1.72.25c-.55.03-1.03-.39-1.07-.94-.03-.55.39-1.02.94-1.06q.73-.05 1.41-.2M2.96 10.28c.56-.02 1.02.4 1.04.96q.02.8.3 1.64c.16.52-.13 1.09-.66 1.25-.53.17-1.09-.12-1.26-.65q-.34-1.1-.38-2.17c-.02-.55.41-1.01.96-1.03M20.58 8.37c.53-.13 1.07.2 1.2.74q.22.91.22 1.89 0 .91-.2 1.8c-.12.53-.66.87-1.2.75s-.87-.66-.75-1.2Q20 11.7 20 11q0-.74-.17-1.43c-.12-.53.2-1.07.75-1.2M12 2q.93 0 1.83.15c.54.1.9.6.82 1.15-.1.54-.6.91-1.15.82Q12.77 4 12 4q-.86 0-1.71.18c-.54.12-1.08-.22-1.2-.76-.1-.54.24-1.07.78-1.2Q10.9 2.02 12 2" opacity={0.4} />
        <path d="M3.81 15.65c.09-.55.6-.92 1.14-.84.55.09.92.6.84 1.14l-.53 3.47L9.3 17.8c.52-.2 1.1.05 1.3.56s-.04 1.1-.55 1.3L6 21.28c-1.44.57-2.96-.63-2.72-2.16zM18.7 14.83c.33-.44.95-.53 1.4-.2s.53.96.2 1.4c-.7.93-1.6 1.74-2.61 2.37-.47.3-1.09.15-1.38-.32-.3-.46-.15-1.08.32-1.37q1.24-.78 2.07-1.88M5.97 3.93c.46-.32 1.08-.2 1.4.24.31.46.2 1.08-.25 1.4-.97.67-1.77 1.53-2.32 2.49-.27.48-.88.65-1.36.37-.48-.27-.65-.88-.38-1.36.71-1.25 1.73-2.32 2.91-3.14M15.93 3.74c.27-.48.88-.65 1.36-.38q1.67.94 2.83 2.39c.35.43.28 1.06-.15 1.4-.43.35-1.06.28-1.4-.15q-.91-1.14-2.26-1.9c-.48-.27-.65-.88-.38-1.36" />
    </IconBase>
  ))
);

MessageCircleDashedBoldDuotone.displayName = 'MessageCircleDashedBoldDuotone';

// Triple export pattern
export { MessageCircleDashedBoldDuotone, MessageCircleDashedBoldDuotone as MessageCircleDashedBoldDuotoneIcon, MessageCircleDashedBoldDuotone as SiMessageCircleDashedBoldDuotone };
export default MessageCircleDashedBoldDuotone;
export type { MessageCircleDashedBoldDuotoneProps };
