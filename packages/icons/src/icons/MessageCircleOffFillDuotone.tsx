import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleOffFillDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.27 18.5a10.7 10.7 0 0 1-7.52 1.14l-3.8 1.52a1.88 1.88 0 0 1-2.55-2.02l.47-3.02q.01-.04-.05-.15A8.2 8.2 0 0 1 2.12 11c0-2.1.8-4 2.13-5.5zM12 2.13c5.35 0 9.88 3.87 9.88 8.87 0 2.6-1.23 4.89-3.15 6.5L5.53 4.3A10.6 10.6 0 0 1 12 2.12" opacity={0.4} />
        <path d="M2.38 2.38a.9.9 0 0 1 1.24 0l17 17a.88.88 0 0 1-1.24 1.24l-17-17a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

MessageCircleOffFillDuotone.displayName = 'MessageCircleOffFillDuotone';

// Triple export pattern (lucide-react style)
export { MessageCircleOffFillDuotone, MessageCircleOffFillDuotone as MessageCircleOffFillDuotoneIcon, MessageCircleOffFillDuotone as SiMessageCircleOffFillDuotone };
export default MessageCircleOffFillDuotone;
export type { MessageCircleOffFillDuotoneProps };
