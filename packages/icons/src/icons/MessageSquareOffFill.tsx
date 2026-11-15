import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageSquareOffFillProps = Omit<IconBaseProps, 'children'>;

const MessageSquareOffFill = memo(
  forwardRef<SVGSVGElement, MessageSquareOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1.97 1.97c.3-.3.77-.3 1.06 0l17 17c.3.3.3.77 0 1.06s-.77.3-1.06 0l-2.3-2.3q-.62.02-1.44.02l-4.57 3.04q-.29.2-.53.34c-.16.08-.4.2-.7.18q-.57-.04-.93-.49c-.18-.24-.22-.51-.23-.68q-.02-.27-.02-.64v-1.75q-.87 0-1.49-.04-.88-.05-1.58-.32c-1.16-.48-2.09-1.4-2.57-2.57-.2-.48-.28-.98-.32-1.58q-.05-.87-.04-2.24v-.6q-.02-1.64.06-2.69.06-1.06.46-1.87.33-.64.84-1.17L1.97 3.03c-.3-.3-.3-.77 0-1.06M14.6 3.25q1.64-.02 2.69.06 1.06.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v.6q.01 1.37-.04 2.24c-.04.6-.12 1.1-.32 1.58q-.45 1.05-1.3 1.78L6.8 3.3c.7-.05 1.54-.05 2.61-.05z" />
    </IconBase>
  ))
);

MessageSquareOffFill.displayName = 'MessageSquareOffFill';

// Triple export pattern
export { MessageSquareOffFill, MessageSquareOffFill as MessageSquareOffFillIcon, MessageSquareOffFill as SiMessageSquareOffFill };
export default MessageSquareOffFill;
export type { MessageSquareOffFillProps };
