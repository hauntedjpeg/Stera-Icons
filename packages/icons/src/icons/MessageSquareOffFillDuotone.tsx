import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageSquareOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageSquareOffFillDuotone = memo(
  forwardRef<SVGSVGElement, MessageSquareOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m16.62 17.86-1.35.01-4.54 3.03-.54.34c-.16.09-.44.22-.77.2-.4-.03-.77-.22-1.02-.54-.2-.27-.24-.57-.26-.75q-.02-.3-.02-.65v-1.63q-.78.01-1.37-.04a5 5 0 0 1-1.62-.33 5 5 0 0 1-2.63-2.63q-.3-.74-.33-1.62-.06-.88-.04-2.25v-.6q-.01-1.64.05-2.7a5 5 0 0 1 .48-1.91q.3-.62.78-1.11zM14.6 3.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v.6q.01 1.37-.04 2.25c-.04.6-.12 1.12-.33 1.62a5 5 0 0 1-2.63 2.63l-.1.04L4.87 3.62a5 5 0 0 1 1.84-.44q1.06-.07 2.7-.06z" opacity={0.4} />
        <path d="M1.88 1.88a.9.9 0 0 1 1.24 0l17 17a.88.88 0 0 1-1.24 1.24l-17-17a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

MessageSquareOffFillDuotone.displayName = 'MessageSquareOffFillDuotone';

// Triple export pattern (lucide-react style)
export { MessageSquareOffFillDuotone, MessageSquareOffFillDuotone as MessageSquareOffFillDuotoneIcon, MessageSquareOffFillDuotone as SiMessageSquareOffFillDuotone };
export default MessageSquareOffFillDuotone;
export type { MessageSquareOffFillDuotoneProps };
