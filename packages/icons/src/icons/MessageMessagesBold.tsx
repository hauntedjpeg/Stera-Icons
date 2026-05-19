import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageMessagesBoldProps = Omit<IconBaseProps, 'children'>;

const MessageMessagesBold = memo(
  forwardRef<SVGSVGElement, MessageMessagesBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 7.5q.68 0 1.16.02.5.02.99.2a3 3 0 0 1 1.62 1.63q.2.5.2.99.04.47.03 1.16V21a1 1 0 0 1-1.53.85l-3.76-2.35H10.5q-.62.02-1.08-.06a3 3 0 0 1-2.36-2.36Q6.98 16.64 7 16a1 1 0 1 1 2 0c0 .51 0 .62.02.7.08.4.39.7.78.78.08.01.19.02.7.02H18a1 1 0 0 1 .53.15L21 19.2v-7.7c0-.48 0-.79-.02-1.03a1 1 0 0 0-.06-.35 1 1 0 0 0-.54-.54 1 1 0 0 0-.35-.06c-.24-.02-.55-.02-1.03-.02a1 1 0 1 1 0-2" />
        <path fillRule="evenodd" d="M12.8 2q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v3.6q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03H6.29l-3.76 2.35A1 1 0 0 1 1 15.5V6.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q4.4 1.99 5.2 2zM5.2 4c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42C3 5.25 3 5.62 3 6.2v7.5l2.47-1.55A1 1 0 0 1 6 12h6.8c.58 0 .95 0 1.23-.02.27-.03.37-.06.42-.09a1 1 0 0 0 .44-.44c.03-.05.06-.15.09-.42.02-.28.02-.65.02-1.23V6.2c0-.58 0-.95-.02-1.23a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09C13.75 4 13.38 4 12.8 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

MessageMessagesBold.displayName = 'MessageMessagesBold';

// Triple export pattern (lucide-react style)
export { MessageMessagesBold, MessageMessagesBold as MessageMessagesBoldIcon, MessageMessagesBold as SiMessageMessagesBold };
export default MessageMessagesBold;
export type { MessageMessagesBoldProps };
