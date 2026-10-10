import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.25c5.3 0 9.75 3.84 9.75 8.75S17.3 19.75 12 19.75q-1.17 0-2.26-.24l.21-.08c.39-.16.57-.6.42-.98-.1-.23-.3-.4-.52-.45q1.02.24 2.15.25c4.64 0 8.25-3.33 8.25-7.25S16.65 3.75 12 3.75c-4.64 0-8.25 3.33-8.25 7.25 0 1.47.5 2.84 1.37 4 .26.35.4.8.36 1.27.01-.37-.26-.7-.63-.76-.41-.06-.8.22-.86.63q.02-.11-.07-.24c-1.05-1.4-1.67-3.08-1.67-4.9 0-4.91 4.45-8.75 9.75-8.75" opacity={.4} />
        <path d="M3.99 16.14c.06-.41.45-.7.86-.63s.69.45.62.86l-.46 3.01c-.03.2.16.34.34.27l4.05-1.62c.38-.15.82.04.97.42.15.39-.03.82-.42.98L5.9 21.05c-1.25.5-2.58-.56-2.37-1.9z" />
    </IconBase>
  ))
);

MessageCircleRegularDuotone.displayName = 'MessageCircleRegularDuotone';

// Triple export pattern
export { MessageCircleRegularDuotone, MessageCircleRegularDuotone as MessageCircleRegularDuotoneIcon, MessageCircleRegularDuotone as SiMessageCircleRegularDuotone };
export default MessageCircleRegularDuotone;
export type { MessageCircleRegularDuotoneProps };
