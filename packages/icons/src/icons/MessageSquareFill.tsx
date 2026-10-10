import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageSquareFillProps = Omit<IconBaseProps, 'children'>;

const MessageSquareFill = memo(
  forwardRef<SVGSVGElement, MessageSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.6 3.13q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v.2q.01 1.64-.05 2.7c-.06.72-.19 1.34-.48 1.91-.46.92-1.21 1.67-2.13 2.13-.57.3-1.19.42-1.91.48q-.83.05-2.03.05l-5 3.34c-.92.6-2.14-.05-2.14-1.14v-2.2q-.81 0-1.43-.05c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.19-.48-1.91q-.07-1.06-.06-2.7v-.2q-.02-1.64.06-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06z" />
    </IconBase>
  ))
);

MessageSquareFill.displayName = 'MessageSquareFill';

// Triple export pattern
export { MessageSquareFill, MessageSquareFill as MessageSquareFillIcon, MessageSquareFill as SiMessageSquareFill };
export default MessageSquareFill;
export type { MessageSquareFillProps };
