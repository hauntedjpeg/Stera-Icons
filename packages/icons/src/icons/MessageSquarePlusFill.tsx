import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageSquarePlusFillProps = Omit<IconBaseProps, 'children'>;

const MessageSquarePlusFill = memo(
  forwardRef<SVGSVGElement, MessageSquarePlusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.6 3.13q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v.6q.01 1.37-.04 2.25c-.04.6-.12 1.12-.33 1.62-.5 1.19-1.44 2.14-2.63 2.63q-.73.29-1.62.34-.8.04-1.98.03l-4.54 3.03-.54.34c-.16.09-.44.22-.77.2-.4-.03-.77-.22-1.02-.54-.2-.27-.24-.57-.26-.75q-.02-.3-.02-.65v-1.63q-.78.01-1.37-.04c-.6-.04-1.12-.12-1.62-.33C3.94 17 3 16.06 2.5 14.87q-.3-.74-.33-1.62-.06-.88-.04-2.25v-.6q-.01-1.64.05-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zM12 6.63c-.48 0-.87.39-.87.87v2.13H9c-.48 0-.87.39-.87.87s.39.88.87.88h2.13v2.12c0 .48.39.88.87.88s.88-.4.88-.88v-2.12H15c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-2.12V7.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

MessageSquarePlusFill.displayName = 'MessageSquarePlusFill';

// Triple export pattern
export { MessageSquarePlusFill, MessageSquarePlusFill as MessageSquarePlusFillIcon, MessageSquarePlusFill as SiMessageSquarePlusFill };
export default MessageSquarePlusFill;
export type { MessageSquarePlusFillProps };
