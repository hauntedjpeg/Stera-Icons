import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleSparkleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleSparkleBoldDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleSparkleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.4 0 10 3.92 10 9s-4.6 9-10 9q-1.16 0-2.24-.23L6 21.27a2 2 0 0 1-2.72-2.15l.46-3.02-.02-.05A8.4 8.4 0 0 1 2 11c0-5.08 4.6-9 10-9m0 2c-4.53 0-8 3.24-8 7 0 1.41.48 2.73 1.31 3.84.32.43.5.98.4 1.56l-.46 3.02L9.3 17.8a1 1 0 0 1 .6-.04q1 .23 2.1.24c4.53 0 8-3.24 8-7s-3.47-7-8-7" clipRule="evenodd" opacity={.4} />
        <path d="M11.8 6.78c.06-.2.34-.2.4 0l.22.9a4 4 0 0 0 2.9 2.9l.9.23c.2.05.2.33 0 .38l-.9.23a4 4 0 0 0-2.9 2.9l-.23.9c-.05.2-.33.2-.38 0l-.23-.9a4 4 0 0 0-2.9-2.9l-.9-.23c-.2-.05-.2-.33 0-.38l.9-.23a4 4 0 0 0 2.9-2.9z" />
    </IconBase>
  ))
);

MessageCircleSparkleBoldDuotone.displayName = 'MessageCircleSparkleBoldDuotone';

// Triple export pattern (lucide-react style)
export { MessageCircleSparkleBoldDuotone, MessageCircleSparkleBoldDuotone as MessageCircleSparkleBoldDuotoneIcon, MessageCircleSparkleBoldDuotone as SiMessageCircleSparkleBoldDuotone };
export default MessageCircleSparkleBoldDuotone;
export type { MessageCircleSparkleBoldDuotoneProps };
