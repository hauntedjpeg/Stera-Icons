import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageSquareSparkleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageSquareSparkleFillDuotone = memo(
  forwardRef<SVGSVGElement, MessageSquareSparkleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.6 3.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v.6q.01 1.37-.04 2.24-.04.88-.32 1.58c-.48 1.16-1.4 2.09-2.57 2.57q-.7.28-1.58.32-.8.05-2.01.04l-4.57 3.04q-.29.2-.53.34c-.16.08-.4.2-.7.18q-.57-.04-.93-.49c-.18-.24-.22-.51-.23-.68q-.02-.27-.02-.64v-1.75q-.87 0-1.49-.04c-.6-.04-1.1-.12-1.58-.32-1.16-.48-2.09-1.4-2.57-2.57-.2-.48-.28-.98-.32-1.58q-.05-.87-.04-2.24v-.6q-.02-1.64.06-2.69.06-1.05.46-1.87c.45-.89 1.18-1.62 2.07-2.07.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-2.13 3.6c-.15-.44-.79-.44-.94 0l-.35.99c-.3.86-.98 1.54-1.84 1.84l-.99.35c-.44.15-.44.79 0 .94l.99.35c.86.3 1.54.98 1.84 1.84l.35.99c.15.44.79.44.94 0l.35-.99c.3-.86.98-1.54 1.84-1.84l.99-.35c.44-.15.44-.79 0-.94l-.99-.35c-.86-.3-1.54-.98-1.84-1.84z" clipRule="evenodd" opacity={.4} />
        <path d="M11.53 6.85c.15-.44.79-.44.94 0l.35.99c.3.86.98 1.54 1.84 1.84l.99.35c.44.15.44.79 0 .94l-.99.35c-.86.3-1.54.98-1.84 1.84l-.35.99c-.15.45-.79.45-.94 0l-.35-.99c-.3-.86-.98-1.54-1.84-1.84l-.99-.35c-.44-.15-.44-.79 0-.94l.99-.35c.86-.3 1.54-.98 1.84-1.84z" />
    </IconBase>
  ))
);

MessageSquareSparkleFillDuotone.displayName = 'MessageSquareSparkleFillDuotone';

// Triple export pattern
export { MessageSquareSparkleFillDuotone, MessageSquareSparkleFillDuotone as MessageSquareSparkleFillDuotoneIcon, MessageSquareSparkleFillDuotone as SiMessageSquareSparkleFillDuotone };
export default MessageSquareSparkleFillDuotone;
export type { MessageSquareSparkleFillDuotoneProps };
