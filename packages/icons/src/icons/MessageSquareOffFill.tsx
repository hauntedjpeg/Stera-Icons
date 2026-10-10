import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageSquareOffFillProps = Omit<IconBaseProps, 'children'>;

const MessageSquareOffFill = memo(
  forwardRef<SVGSVGElement, MessageSquareOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1.88 1.88c.34-.34.9-.34 1.24 0l1.74 1.74h.02l13.91 13.91h-.02l1.35 1.35c.34.34.34.9 0 1.24s-.9.34-1.24 0l-2.26-2.26-1.35.01-4.54 3.03-.54.34c-.16.09-.44.22-.77.2-.4-.03-.77-.22-1.02-.55-.2-.26-.24-.56-.26-.74q-.02-.3-.02-.65v-1.63q-.78.01-1.37-.04c-.6-.04-1.12-.12-1.62-.33C3.94 17 3 16.06 2.5 14.86q-.29-.72-.34-1.61T2.12 11v-.6q-.02-1.64.06-2.7c.06-.72.18-1.34.48-1.91q.3-.62.78-1.11L1.88 3.12c-.34-.34-.34-.9 0-1.24M14.6 3.12q1.64-.02 2.7.06c.72.06 1.34.18 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91q.06 1.06.05 2.7v.6q.01 1.37-.04 2.25c-.04.6-.12 1.12-.33 1.61q-.41 1-1.19 1.71L6.91 3.17q1-.05 2.49-.05z" />
    </IconBase>
  ))
);

MessageSquareOffFill.displayName = 'MessageSquareOffFill';

// Triple export pattern
export { MessageSquareOffFill, MessageSquareOffFill as MessageSquareOffFillIcon, MessageSquareOffFill as SiMessageSquareOffFill };
export default MessageSquareOffFill;
export type { MessageSquareOffFillProps };
