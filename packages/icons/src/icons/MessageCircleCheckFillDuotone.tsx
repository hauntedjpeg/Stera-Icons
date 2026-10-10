import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleCheckFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleCheckFillDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleCheckFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.35 0 9.88 3.87 9.88 8.87s-4.53 8.88-9.88 8.88q-1.16 0-2.25-.24l-3.8 1.52c-1.35.54-2.77-.59-2.55-2.02l.47-3.02q.01-.04-.05-.15c-1.07-1.41-1.7-3.12-1.7-4.97 0-5 4.53-8.87 9.88-8.87m4.12 6c-.34-.34-.9-.34-1.24 0l-4.25 4.28L9.2 10.5c-.29-.39-.83-.47-1.22-.18s-.47.84-.18 1.23l1.48 1.98q.13.18.27.35c.1.11.26.26.48.36q.46.2.93.07c.24-.07.4-.2.52-.3q.17-.14.33-.3l4.31-4.34c.34-.35.34-.9 0-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M14.88 8.13c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-4.31 4.34q-.16.17-.33.3c-.11.1-.28.23-.52.3-.3.09-.64.06-.93-.07-.22-.1-.38-.25-.48-.36q-.14-.17-.27-.35L7.8 11.55c-.29-.4-.2-.94.18-1.23.39-.29.93-.2 1.22.18l1.43 1.91z" />
    </IconBase>
  ))
);

MessageCircleCheckFillDuotone.displayName = 'MessageCircleCheckFillDuotone';

// Triple export pattern
export { MessageCircleCheckFillDuotone, MessageCircleCheckFillDuotone as MessageCircleCheckFillDuotoneIcon, MessageCircleCheckFillDuotone as SiMessageCircleCheckFillDuotone };
export default MessageCircleCheckFillDuotone;
export type { MessageCircleCheckFillDuotoneProps };
