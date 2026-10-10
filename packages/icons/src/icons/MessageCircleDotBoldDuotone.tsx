import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleDotBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleDotBoldDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleDotBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2q.87 0 1.7.13c.54.08.91.6.83 1.14s-.6.92-1.14.84Q12.71 4 12 4c-4.53 0-8 3.24-8 7 0 1.41.48 2.73 1.31 3.84.32.43.5.98.4 1.56l-.46 3.02L9.3 17.8q.3-.12.6-.04 1 .23 2.1.24c4.53 0 8-3.24 8-7q0-.26-.02-.5c-.05-.56.37-1.04.92-1.08s1.03.36 1.07.91q.03.33.03.67c0 5.08-4.6 9-10 9q-1.16 0-2.24-.23L6 21.27c-1.44.58-2.96-.62-2.72-2.15l.46-3.02q0-.03-.02-.05C2.64 14.62 2 12.88 2 11c0-5.08 4.6-9 10-9" opacity={.4} />
        <path d="M18.5 2C20.43 2 22 3.57 22 5.5S20.43 9 18.5 9 15 7.43 15 5.5 16.57 2 18.5 2" />
    </IconBase>
  ))
);

MessageCircleDotBoldDuotone.displayName = 'MessageCircleDotBoldDuotone';

// Triple export pattern
export { MessageCircleDotBoldDuotone, MessageCircleDotBoldDuotone as MessageCircleDotBoldDuotoneIcon, MessageCircleDotBoldDuotone as SiMessageCircleDotBoldDuotone };
export default MessageCircleDotBoldDuotone;
export type { MessageCircleDotBoldDuotoneProps };
