import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleSparkleBoldProps = Omit<IconBaseProps, 'children'>;

const MessageCircleSparkleBold = memo(
  forwardRef<SVGSVGElement, MessageCircleSparkleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.8 6.78c.06-.2.34-.2.4 0l.22.9c.36 1.42 1.48 2.54 2.9 2.9l.9.23c.2.05.2.33 0 .38l-.9.23c-1.42.36-2.54 1.48-2.9 2.9l-.23.9c-.05.2-.33.2-.38 0l-.23-.9c-.36-1.42-1.48-2.54-2.9-2.9l-.9-.23c-.2-.05-.2-.33 0-.38l.9-.23c1.42-.36 2.54-1.48 2.9-2.9z" />
        <path fillRule="evenodd" d="M12 2c5.4 0 10 3.92 10 9s-4.6 9-10 9q-1.16 0-2.24-.23L6 21.27c-1.44.58-2.96-.62-2.72-2.15l.46-3.02q0-.03-.02-.05C2.64 14.62 2 12.88 2 11c0-5.08 4.6-9 10-9m0 2c-4.53 0-8 3.24-8 7 0 1.41.48 2.73 1.31 3.84.32.43.5.98.4 1.56l-.46 3.02L9.3 17.8q.3-.12.6-.04 1 .23 2.1.24c4.53 0 8-3.24 8-7s-3.47-7-8-7" clipRule="evenodd" />
    </IconBase>
  ))
);

MessageCircleSparkleBold.displayName = 'MessageCircleSparkleBold';

// Triple export pattern
export { MessageCircleSparkleBold, MessageCircleSparkleBold as MessageCircleSparkleBoldIcon, MessageCircleSparkleBold as SiMessageCircleSparkleBold };
export default MessageCircleSparkleBold;
export type { MessageCircleSparkleBoldProps };
