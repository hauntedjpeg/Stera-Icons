import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleFillProps = Omit<IconBaseProps, 'children'>;

const MessageCircleFill = memo(
  forwardRef<SVGSVGElement, MessageCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.13c5.35 0 9.88 3.87 9.88 8.87s-4.53 8.88-9.88 8.88q-1.16 0-2.25-.24l-3.8 1.52a1.88 1.88 0 0 1-2.55-2.02l.47-3.02q.01-.04-.05-.15A8.2 8.2 0 0 1 2.12 11c0-5 4.53-8.87 9.88-8.87" />
    </IconBase>
  ))
);

MessageCircleFill.displayName = 'MessageCircleFill';

// Triple export pattern (lucide-react style)
export { MessageCircleFill, MessageCircleFill as MessageCircleFillIcon, MessageCircleFill as SiMessageCircleFill };
export default MessageCircleFill;
export type { MessageCircleFillProps };
