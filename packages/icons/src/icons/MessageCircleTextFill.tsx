import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleTextFillProps = Omit<IconBaseProps, 'children'>;

const MessageCircleTextFill = memo(
  forwardRef<SVGSVGElement, MessageCircleTextFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.3 0 9.75 3.84 9.75 8.75S17.3 19.75 12 19.75q-1.17 0-2.26-.24L5.9 21.05c-1.25.5-2.58-.56-2.37-1.9l.46-3.01q.02-.11-.07-.24c-1.05-1.4-1.67-3.08-1.67-4.9 0-4.91 4.45-8.75 9.75-8.75m-3.5 9.5c-.41 0-.75.34-.75.75s.34.75.75.75H12c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zm0-3.5c-.41 0-.75.34-.75.75s.34.75.75.75h7c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

MessageCircleTextFill.displayName = 'MessageCircleTextFill';

// Triple export pattern
export { MessageCircleTextFill, MessageCircleTextFill as MessageCircleTextFillIcon, MessageCircleTextFill as SiMessageCircleTextFill };
export default MessageCircleTextFill;
export type { MessageCircleTextFillProps };
