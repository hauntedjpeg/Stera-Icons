import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageSquareDotFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageSquareDotFillDuotone = memo(
  forwardRef<SVGSVGElement, MessageSquareDotFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.1 3.13q-.59 1.07-.6 2.37c0 2.76 2.24 5 5 5 1.3 0 2.48-.5 3.37-1.3V11q.01 1.37-.04 2.25c-.04.6-.12 1.12-.33 1.62-.5 1.19-1.44 2.14-2.63 2.63q-.73.29-1.62.34-.8.04-1.98.03l-4.54 3.03-.54.34c-.16.09-.44.22-.77.2-.4-.03-.77-.22-1.02-.54-.2-.27-.24-.57-.26-.75q-.02-.3-.02-.65v-1.63q-.78.01-1.37-.04c-.6-.04-1.12-.12-1.62-.33C3.94 17 3 16.06 2.5 14.87q-.3-.74-.33-1.62-.06-.88-.04-2.25v-.6q-.01-1.64.05-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06z" opacity={.4} />
        <path d="M18.5 2C20.43 2 22 3.57 22 5.5S20.43 9 18.5 9 15 7.43 15 5.5 16.57 2 18.5 2" />
    </IconBase>
  ))
);

MessageSquareDotFillDuotone.displayName = 'MessageSquareDotFillDuotone';

// Triple export pattern
export { MessageSquareDotFillDuotone, MessageSquareDotFillDuotone as MessageSquareDotFillDuotoneIcon, MessageSquareDotFillDuotone as SiMessageSquareDotFillDuotone };
export default MessageSquareDotFillDuotone;
export type { MessageSquareDotFillDuotoneProps };
