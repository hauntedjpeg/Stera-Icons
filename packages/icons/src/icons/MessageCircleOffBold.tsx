import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleOffBoldProps = Omit<IconBaseProps, 'children'>;

const MessageCircleOffBold = memo(
  forwardRef<SVGSVGElement, MessageCircleOffBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M2.3 2.3c.38-.4 1.02-.4 1.4 0l17 17c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-2.05-2.04C15.72 19.51 13.92 20 12 20q-1.16 0-2.24-.23L6 21.27c-1.44.58-2.96-.62-2.72-2.15l.46-3.02q0-.03-.02-.05C2.64 14.62 2 12.88 2 11c0-2.08.79-3.99 2.08-5.5L2.3 3.7c-.39-.38-.39-1.02 0-1.4m3.2 4.62C4.55 8.08 4 9.49 4 11c0 1.41.48 2.73 1.31 3.84.32.43.5.98.4 1.56l-.46 3.02L9.3 17.8q.3-.12.6-.04 1 .23 2.1.24c1.37 0 2.64-.3 3.76-.82z" clipRule="evenodd" />
        <path d="M12 2c5.4 0 10 3.92 10 9 0 1.82-.6 3.5-1.62 4.91-.32.45-.95.55-1.4.23s-.54-.95-.22-1.4C19.55 13.65 20 12.37 20 11c0-3.76-3.47-7-8-7-1.28 0-2.49.26-3.55.73-.5.22-1.1-.01-1.32-.52-.22-.5.01-1.1.52-1.32C8.97 2.32 10.45 2 12 2" />
    </IconBase>
  ))
);

MessageCircleOffBold.displayName = 'MessageCircleOffBold';

// Triple export pattern
export { MessageCircleOffBold, MessageCircleOffBold as MessageCircleOffBoldIcon, MessageCircleOffBold as SiMessageCircleOffBold };
export default MessageCircleOffBold;
export type { MessageCircleOffBoldProps };
