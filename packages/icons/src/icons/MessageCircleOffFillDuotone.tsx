import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleOffFillDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.27 18.5c-1.54.87-3.35 1.38-5.27 1.38q-1.16 0-2.25-.24l-3.8 1.52c-1.35.54-2.77-.59-2.55-2.02l.47-3.02q.01-.04-.05-.15c-1.07-1.41-1.7-3.12-1.7-4.97 0-2.1.8-4 2.13-5.5zM12 2.13c5.35 0 9.88 3.87 9.88 8.87 0 2.6-1.23 4.89-3.15 6.5L5.53 4.3C7.28 2.93 9.55 2.12 12 2.12" opacity={0.4} />
        <path d="M2.38 2.38c.34-.34.9-.34 1.24 0l17 17c.34.34.34.9 0 1.24s-.9.34-1.24 0l-17-17c-.34-.34-.34-.9 0-1.24" />
    </IconBase>
  ))
);

MessageCircleOffFillDuotone.displayName = 'MessageCircleOffFillDuotone';

// Triple export pattern
export { MessageCircleOffFillDuotone, MessageCircleOffFillDuotone as MessageCircleOffFillDuotoneIcon, MessageCircleOffFillDuotone as SiMessageCircleOffFillDuotone };
export default MessageCircleOffFillDuotone;
export type { MessageCircleOffFillDuotoneProps };
