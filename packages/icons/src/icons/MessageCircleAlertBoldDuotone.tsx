import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleAlertBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleAlertBoldDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleAlertBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.4 0 10 3.92 10 9s-4.6 9-10 9q-1.16 0-2.24-.23L6 21.27c-1.44.58-2.96-.62-2.72-2.15l.46-3.02q0-.03-.02-.05C2.64 14.62 2 12.88 2 11c0-5.08 4.6-9 10-9m0 2c-4.53 0-8 3.24-8 7 0 1.41.48 2.73 1.31 3.84.32.43.5.98.4 1.56l-.46 3.02L9.3 17.8q.3-.12.6-.04 1 .23 2.1.24c4.53 0 8-3.24 8-7s-3.47-7-8-7" clipRule="evenodd" opacity={.4} />
        <path d="M12 12.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M12 6.5c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

MessageCircleAlertBoldDuotone.displayName = 'MessageCircleAlertBoldDuotone';

// Triple export pattern
export { MessageCircleAlertBoldDuotone, MessageCircleAlertBoldDuotone as MessageCircleAlertBoldDuotoneIcon, MessageCircleAlertBoldDuotone as SiMessageCircleAlertBoldDuotone };
export default MessageCircleAlertBoldDuotone;
export type { MessageCircleAlertBoldDuotoneProps };
