import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleSparkleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleSparkleFillDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleSparkleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.35 0 9.88 3.87 9.88 8.87s-4.53 8.88-9.88 8.88q-1.16 0-2.25-.24l-3.8 1.52a1.88 1.88 0 0 1-2.55-2.02l.47-3.02q.01-.04-.05-.15A8.2 8.2 0 0 1 2.12 11c0-5 4.53-8.87 9.88-8.87m.2 4.65c-.06-.2-.34-.2-.4 0l-.22.9a4 4 0 0 1-2.9 2.9l-.9.23c-.2.05-.2.33 0 .38l.9.23a4 4 0 0 1 2.9 2.9l.23.9c.05.2.33.2.38 0l.23-.9a4 4 0 0 1 2.9-2.9l.9-.23c.2-.05.2-.33 0-.38l-.9-.23a4 4 0 0 1-2.9-2.9z" clipRule="evenodd" opacity={.4} />
        <path d="M11.8 6.78c.06-.2.34-.2.4 0l.22.9a4 4 0 0 0 2.9 2.9l.9.23c.2.05.2.33 0 .38l-.9.23a4 4 0 0 0-2.9 2.9l-.23.9c-.05.2-.33.2-.38 0l-.23-.9a4 4 0 0 0-2.9-2.9l-.9-.23c-.2-.05-.2-.33 0-.38l.9-.23a4 4 0 0 0 2.9-2.9z" />
    </IconBase>
  ))
);

MessageCircleSparkleFillDuotone.displayName = 'MessageCircleSparkleFillDuotone';

// Triple export pattern (lucide-react style)
export { MessageCircleSparkleFillDuotone, MessageCircleSparkleFillDuotone as MessageCircleSparkleFillDuotoneIcon, MessageCircleSparkleFillDuotone as SiMessageCircleSparkleFillDuotone };
export default MessageCircleSparkleFillDuotone;
export type { MessageCircleSparkleFillDuotoneProps };
