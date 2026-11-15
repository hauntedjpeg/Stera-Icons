import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageSquareFillProps = Omit<IconBaseProps, 'children'>;

const MessageSquareFill = memo(
  forwardRef<SVGSVGElement, MessageSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.6 3.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v.2q.02 1.64-.06 2.69-.06 1.05-.46 1.87c-.45.89-1.18 1.62-2.07 2.07-.55.28-1.16.4-1.87.46q-.84.07-2.06.06L10.2 21.1c-.83.55-1.94-.05-1.94-1.04v-2.33q-.88 0-1.54-.05-1.05-.06-1.87-.46c-.89-.45-1.62-1.18-2.07-2.07-.28-.55-.4-1.16-.46-1.87q-.07-1.04-.06-2.69v-.2q-.02-1.64.06-2.69.06-1.05.46-1.87c.45-.89 1.18-1.62 2.07-2.07.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06z" />
    </IconBase>
  ))
);

MessageSquareFill.displayName = 'MessageSquareFill';

// Triple export pattern
export { MessageSquareFill, MessageSquareFill as MessageSquareFillIcon, MessageSquareFill as SiMessageSquareFill };
export default MessageSquareFill;
export type { MessageSquareFillProps };
