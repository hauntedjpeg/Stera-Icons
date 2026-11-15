import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageSquareDotFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageSquareDotFillDuotone = memo(
  forwardRef<SVGSVGElement, MessageSquareDotFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.04 3.25q-.53 1.03-.54 2.25c0 2.76 2.24 5 5 5 1.24 0 2.37-.45 3.24-1.2l.01 1.1v.6q.01 1.37-.04 2.24-.04.88-.32 1.58c-.48 1.16-1.4 2.09-2.57 2.57q-.7.28-1.58.32-.8.05-2.01.04l-4.57 3.04q-.29.2-.53.34c-.16.08-.4.2-.7.18q-.57-.04-.93-.49c-.18-.24-.22-.51-.23-.68q-.02-.27-.02-.64v-1.75q-.87 0-1.49-.04c-.6-.04-1.1-.12-1.58-.32-1.16-.48-2.09-1.4-2.57-2.57-.2-.48-.28-.98-.32-1.58q-.05-.87-.04-2.24v-.6q-.02-1.64.06-2.69.06-1.05.46-1.87c.45-.89 1.18-1.62 2.07-2.07.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06z" opacity={.4} />
        <path d="M18.5 2C20.43 2 22 3.57 22 5.5S20.43 9 18.5 9 15 7.43 15 5.5 16.57 2 18.5 2" />
    </IconBase>
  ))
);

MessageSquareDotFillDuotone.displayName = 'MessageSquareDotFillDuotone';

// Triple export pattern
export { MessageSquareDotFillDuotone, MessageSquareDotFillDuotone as MessageSquareDotFillDuotoneIcon, MessageSquareDotFillDuotone as SiMessageSquareDotFillDuotone };
export default MessageSquareDotFillDuotone;
export type { MessageSquareDotFillDuotoneProps };
