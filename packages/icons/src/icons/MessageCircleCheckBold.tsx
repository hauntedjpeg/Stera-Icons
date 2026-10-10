import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleCheckBoldProps = Omit<IconBaseProps, 'children'>;

const MessageCircleCheckBold = memo(
  forwardRef<SVGSVGElement, MessageCircleCheckBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.8 8.04c.38-.39 1.01-.39 1.4 0 .4.39.4 1.02 0 1.42l-4.3 4.34q-.16.16-.34.31c-.12.1-.3.25-.57.32q-.52.14-1-.07c-.26-.11-.43-.28-.53-.4q-.15-.17-.28-.36L7.7 11.62c-.33-.44-.24-1.07.2-1.4.45-.33 1.07-.24 1.4.2l1.34 1.8z" />
        <path fillRule="evenodd" d="M12 2c5.4 0 10 3.92 10 9s-4.6 9-10 9q-1.16 0-2.24-.23L6 21.27c-1.44.58-2.96-.62-2.72-2.15l.46-3.02q0-.03-.02-.05C2.64 14.62 2 12.88 2 11c0-5.08 4.6-9 10-9m0 2c-4.53 0-8 3.24-8 7 0 1.41.48 2.73 1.31 3.84.32.43.5.98.4 1.56l-.46 3.02L9.3 17.8q.3-.12.6-.04 1 .23 2.1.24c4.53 0 8-3.24 8-7s-3.47-7-8-7" clipRule="evenodd" />
    </IconBase>
  ))
);

MessageCircleCheckBold.displayName = 'MessageCircleCheckBold';

// Triple export pattern
export { MessageCircleCheckBold, MessageCircleCheckBold as MessageCircleCheckBoldIcon, MessageCircleCheckBold as SiMessageCircleCheckBold };
export default MessageCircleCheckBold;
export type { MessageCircleCheckBoldProps };
