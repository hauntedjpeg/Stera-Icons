import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleSparkleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleSparkleFillDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleSparkleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.35 0 9.88 3.87 9.88 8.87s-4.53 8.88-9.88 8.88q-1.16 0-2.25-.24l-3.8 1.52a1.88 1.88 0 0 1-2.55-2.02l.47-3.02q.01-.04-.05-.15A8.2 8.2 0 0 1 2.12 11c0-5 4.53-8.87 9.88-8.87m.47 5.22a.5.5 0 0 0-.94 0l-.35.99a3 3 0 0 1-1.84 1.84l-.99.35a.5.5 0 0 0 0 .94l.99.35a3 3 0 0 1 1.84 1.84l.35.99a.5.5 0 0 0 .94 0l.35-.99a3 3 0 0 1 1.84-1.84l.99-.35a.5.5 0 0 0 0-.94l-.99-.35a3 3 0 0 1-1.84-1.84z" clipRule="evenodd" opacity={.4} />
        <path d="M11.53 7.35a.5.5 0 0 1 .94 0l.35.99a3 3 0 0 0 1.84 1.84l.99.35a.5.5 0 0 1 0 .94l-.99.35a3 3 0 0 0-1.84 1.84l-.35.99a.5.5 0 0 1-.94 0l-.35-.99a3 3 0 0 0-1.84-1.84l-.99-.35a.5.5 0 0 1 0-.94l.99-.35a3 3 0 0 0 1.84-1.84z" />
    </IconBase>
  ))
);

MessageCircleSparkleFillDuotone.displayName = 'MessageCircleSparkleFillDuotone';

// Triple export pattern (lucide-react style)
export { MessageCircleSparkleFillDuotone, MessageCircleSparkleFillDuotone as MessageCircleSparkleFillDuotoneIcon, MessageCircleSparkleFillDuotone as SiMessageCircleSparkleFillDuotone };
export default MessageCircleSparkleFillDuotone;
export type { MessageCircleSparkleFillDuotoneProps };
