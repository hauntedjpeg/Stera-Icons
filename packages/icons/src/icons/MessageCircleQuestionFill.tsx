import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleQuestionFillProps = Omit<IconBaseProps, 'children'>;

const MessageCircleQuestionFill = memo(
  forwardRef<SVGSVGElement, MessageCircleQuestionFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.35 0 9.88 3.87 9.88 8.87s-4.53 8.88-9.88 8.88q-1.16 0-2.25-.24l-3.8 1.52c-1.35.54-2.77-.59-2.55-2.02l.47-3.02q.01-.04-.05-.15c-1.07-1.41-1.7-3.12-1.7-4.97 0-5 4.53-8.87 9.88-8.87m0 11c-.62 0-1.12.5-1.12 1.12s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12m0-6.5c-1.08 0-2.12.71-2.36 1.8-.1.48.2.94.67 1.04s.94-.2 1.05-.66c.04-.2.27-.43.64-.44.4 0 .63.3.63.53 0 .17-.11.36-.33.46-.44.2-1.18.73-1.18 1.64 0 .48.4.88.88.88.46 0 .84-.36.87-.82l.06-.05.12-.07c.76-.36 1.32-1.12 1.32-2.04 0-1.31-1.12-2.28-2.37-2.28" clipRule="evenodd" />
    </IconBase>
  ))
);

MessageCircleQuestionFill.displayName = 'MessageCircleQuestionFill';

// Triple export pattern
export { MessageCircleQuestionFill, MessageCircleQuestionFill as MessageCircleQuestionFillIcon, MessageCircleQuestionFill as SiMessageCircleQuestionFill };
export default MessageCircleQuestionFill;
export type { MessageCircleQuestionFillProps };
