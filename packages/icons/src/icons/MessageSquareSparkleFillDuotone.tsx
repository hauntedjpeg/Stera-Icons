import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageSquareSparkleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageSquareSparkleFillDuotone = memo(
  forwardRef<SVGSVGElement, MessageSquareSparkleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.6 3.13q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v.6q.01 1.37-.04 2.25c-.04.6-.12 1.12-.33 1.62-.5 1.19-1.44 2.14-2.63 2.63q-.73.29-1.62.34-.8.04-1.98.03l-4.54 3.03-.54.34c-.16.09-.44.22-.77.2-.4-.03-.77-.22-1.02-.54-.2-.27-.24-.57-.26-.75q-.02-.3-.02-.65v-1.63q-.78.01-1.37-.04c-.6-.04-1.12-.12-1.62-.33C3.94 17 3 16.06 2.5 14.87q-.3-.74-.33-1.62-.06-.88-.04-2.25v-.6q-.01-1.64.05-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zm-2.13 3.72c-.15-.44-.79-.45-.94 0l-.35.99c-.3.86-.98 1.54-1.84 1.84l-.99.35c-.45.15-.44.79 0 .94l.99.35c.86.3 1.54.98 1.84 1.84l.35.99c.15.44.79.44.94 0l.35-.99c.3-.86.98-1.54 1.84-1.84l.99-.35c.44-.15.44-.79 0-.94l-.99-.35c-.86-.3-1.54-.98-1.84-1.84z" clipRule="evenodd" opacity={.4} />
        <path d="M11.53 6.85c.15-.45.79-.45.94 0l.35.99c.3.86.98 1.54 1.84 1.84l.99.35c.44.15.44.79 0 .94l-.99.35c-.86.3-1.54.98-1.84 1.84l-.35.99c-.15.44-.79.44-.94 0l-.35-.99c-.3-.86-.98-1.54-1.84-1.84l-.99-.35c-.44-.15-.45-.79 0-.94l.99-.35c.86-.3 1.54-.98 1.84-1.84z" />
    </IconBase>
  ))
);

MessageSquareSparkleFillDuotone.displayName = 'MessageSquareSparkleFillDuotone';

// Triple export pattern
export { MessageSquareSparkleFillDuotone, MessageSquareSparkleFillDuotone as MessageSquareSparkleFillDuotoneIcon, MessageSquareSparkleFillDuotone as SiMessageSquareSparkleFillDuotone };
export default MessageSquareSparkleFillDuotone;
export type { MessageSquareSparkleFillDuotoneProps };
