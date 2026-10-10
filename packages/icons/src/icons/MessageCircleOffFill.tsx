import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleOffFillProps = Omit<IconBaseProps, 'children'>;

const MessageCircleOffFill = memo(
  forwardRef<SVGSVGElement, MessageCircleOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2.38 2.38c.34-.34.9-.34 1.24 0l17 17c.34.34.34.9 0 1.24s-.9.34-1.24 0l-2.11-2.12c-1.54.87-3.35 1.37-5.27 1.37q-1.16 0-2.25-.23l-3.8 1.52c-1.35.54-2.77-.59-2.55-2.02l.47-3.02q.01-.05-.05-.15c-1.07-1.41-1.7-3.12-1.7-4.97 0-2.1.8-4 2.13-5.5L2.38 3.61c-.34-.34-.34-.9 0-1.24M12 2.12c5.35 0 9.87 3.88 9.87 8.88 0 1.93-.68 3.7-1.82 5.14L7.17 3.26c1.44-.72 3.1-1.14 4.83-1.14" />
    </IconBase>
  ))
);

MessageCircleOffFill.displayName = 'MessageCircleOffFill';

// Triple export pattern
export { MessageCircleOffFill, MessageCircleOffFill as MessageCircleOffFillIcon, MessageCircleOffFill as SiMessageCircleOffFill };
export default MessageCircleOffFill;
export type { MessageCircleOffFillProps };
