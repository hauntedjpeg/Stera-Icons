import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageSquareOffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageSquareOffRegularDuotone = memo(
  forwardRef<SVGSVGElement, MessageSquareOffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.67 5.73q-.34.35-.57.8c-.15.3-.25.68-.3 1.3-.05.63-.05 1.44-.05 2.57v.6c0 .94 0 1.61.04 2.14.03.52.1.84.2 1.1.34.8.97 1.43 1.77 1.76.26.11.58.18 1.1.21.53.04 1.2.04 2.14.04.41 0 .75.34.75.75v2.6l.08-.05 4.75-3.17.1-.06q.14-.07.32-.07h.19l1.48 1.48q-.62.02-1.44.02l-4.57 3.04q-.29.2-.53.34c-.16.08-.4.2-.7.18q-.57-.04-.93-.49c-.18-.24-.22-.51-.23-.68q-.02-.27-.02-.64v-1.75q-.87 0-1.49-.04c-.6-.04-1.1-.12-1.58-.32-1.16-.48-2.09-1.4-2.57-2.57-.2-.48-.28-.98-.32-1.58q-.05-.87-.04-2.24v-.6q-.02-1.64.06-2.69.06-1.05.46-1.87.33-.64.84-1.17zM14.6 3.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v.6q.01 1.37-.04 2.24-.04.88-.32 1.58-.33.78-.9 1.4c-.27.3-.75.32-1.05.04s-.33-.76-.05-1.06q.4-.42.61-.96c.11-.26.18-.58.21-1.1.04-.53.04-1.2.04-2.14v-.6c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05H8.25c-.42 0-.75-.33-.76-.74 0-.41.33-.75.75-.76h6.36" opacity={0.4} />
        <path d="M1.97 1.97c.3-.3.77-.3 1.06 0l17 17c.3.3.3.77 0 1.06s-.77.3-1.06 0l-17-17c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

MessageSquareOffRegularDuotone.displayName = 'MessageSquareOffRegularDuotone';

// Triple export pattern
export { MessageSquareOffRegularDuotone, MessageSquareOffRegularDuotone as MessageSquareOffRegularDuotoneIcon, MessageSquareOffRegularDuotone as SiMessageSquareOffRegularDuotone };
export default MessageSquareOffRegularDuotone;
export type { MessageSquareOffRegularDuotoneProps };
