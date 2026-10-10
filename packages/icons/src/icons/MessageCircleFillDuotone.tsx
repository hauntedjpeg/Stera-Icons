import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.88c4.59 0 8.13 3.28 8.13 7.12s-3.54 7.13-8.13 7.13q-1.11-.01-2.12-.25-.2-.05-.4 0l-.13.04-4.05 1.62c-.09.03-.18-.04-.17-.14l.47-3.02c.08-.54-.09-1.06-.39-1.46-.85-1.13-1.33-2.48-1.33-3.92 0-3.84 3.53-7.12 8.12-7.12" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.13c5.35 0 9.88 3.87 9.88 8.87s-4.53 8.88-9.88 8.88q-1.16 0-2.25-.24l-3.8 1.52c-1.35.54-2.77-.59-2.55-2.02l.47-3.02q.01-.04-.05-.15c-1.07-1.41-1.7-3.12-1.7-4.97 0-5 4.53-8.87 9.88-8.87m0 1.75c-4.59 0-8.12 3.28-8.12 7.12 0 1.44.48 2.79 1.33 3.92.3.4.47.92.39 1.46l-.47 3.02c-.01.1.08.17.17.14l4.05-1.62.13-.04q.2-.04.4 0 1 .25 2.12.25c4.59 0 8.13-3.29 8.13-7.13S16.59 3.88 12 3.88" clipRule="evenodd" />
    </IconBase>
  ))
);

MessageCircleFillDuotone.displayName = 'MessageCircleFillDuotone';

// Triple export pattern
export { MessageCircleFillDuotone, MessageCircleFillDuotone as MessageCircleFillDuotoneIcon, MessageCircleFillDuotone as SiMessageCircleFillDuotone };
export default MessageCircleFillDuotone;
export type { MessageCircleFillDuotoneProps };
