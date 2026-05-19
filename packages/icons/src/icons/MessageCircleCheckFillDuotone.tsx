import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleCheckFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleCheckFillDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleCheckFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.35 0 9.88 3.87 9.88 8.87s-4.53 8.88-9.88 8.88q-1.16 0-2.25-.24l-3.8 1.52a1.88 1.88 0 0 1-2.55-2.02l.47-3.02q.01-.04-.05-.15A8.2 8.2 0 0 1 2.12 11c0-5 4.53-8.87 9.88-8.87m4.12 6a.9.9 0 0 0-1.24 0l-4.25 4.28L9.2 10.5a.87.87 0 0 0-1.4 1.05l1.48 1.98q.13.18.27.35a1.38 1.38 0 0 0 1.4.43c.25-.07.42-.2.53-.3q.17-.14.33-.3l4.31-4.34a.9.9 0 0 0 0-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M14.88 8.13a.88.88 0 0 1 1.24 1.24l-4.31 4.34q-.16.16-.33.3c-.11.1-.28.23-.52.3-.3.09-.64.06-.93-.07-.22-.1-.38-.25-.48-.36q-.14-.17-.27-.35L7.8 11.55a.88.88 0 0 1 1.4-1.05l1.43 1.91z" />
    </IconBase>
  ))
);

MessageCircleCheckFillDuotone.displayName = 'MessageCircleCheckFillDuotone';

// Triple export pattern (lucide-react style)
export { MessageCircleCheckFillDuotone, MessageCircleCheckFillDuotone as MessageCircleCheckFillDuotoneIcon, MessageCircleCheckFillDuotone as SiMessageCircleCheckFillDuotone };
export default MessageCircleCheckFillDuotone;
export type { MessageCircleCheckFillDuotoneProps };
