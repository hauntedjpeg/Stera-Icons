import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2c5.4 0 10 3.92 10 9s-4.6 9-10 9q-1.16 0-2.24-.23l.29-.11c.5-.2.76-.79.55-1.3-.12-.31-.39-.53-.7-.6q1 .23 2.1.24c4.53 0 8-3.24 8-7s-3.47-7-8-7-8 3.24-8 7c0 1.41.48 2.73 1.31 3.84.3.4.47.91.42 1.45.02-.5-.34-.95-.85-1.03-.54-.08-1.05.3-1.14.84q0-.03-.02-.05C2.64 14.62 2 12.88 2 11c0-5.08 4.6-9 10-9" opacity={.4} />
        <path d="M4.88 15.26c.55.09.92.6.84 1.14l-.46 3.02L9.3 17.8c.52-.2 1.1.05 1.3.56s-.04 1.1-.55 1.3L6 21.28c-1.44.57-2.96-.63-2.72-2.16l.46-3.02c.09-.55.6-.92 1.14-.84" />
    </IconBase>
  ))
);

MessageCircleBoldDuotone.displayName = 'MessageCircleBoldDuotone';

// Triple export pattern
export { MessageCircleBoldDuotone, MessageCircleBoldDuotone as MessageCircleBoldDuotoneIcon, MessageCircleBoldDuotone as SiMessageCircleBoldDuotone };
export default MessageCircleBoldDuotone;
export type { MessageCircleBoldDuotoneProps };
