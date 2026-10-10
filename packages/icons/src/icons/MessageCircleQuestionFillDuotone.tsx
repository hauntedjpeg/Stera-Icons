import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleQuestionFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleQuestionFillDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleQuestionFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.35 0 9.88 3.87 9.88 8.87s-4.53 8.88-9.88 8.88q-1.16 0-2.25-.24l-3.8 1.52c-1.35.54-2.77-.59-2.55-2.02l.47-3.02q.01-.04-.05-.15c-1.07-1.41-1.7-3.12-1.7-4.97 0-5 4.53-8.87 9.88-8.87m0 11c-.62 0-1.12.5-1.12 1.12s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12m0-6.5c-1.08 0-2.12.71-2.35 1.8-.1.48.2.94.67 1.04s.93-.2 1.04-.66c.04-.2.27-.43.64-.44.4 0 .63.3.63.53 0 .17-.1.36-.33.46-.43.2-1.17.73-1.17 1.64 0 .48.39.88.87.88.46 0 .84-.36.87-.82l.07-.05.11-.07c.76-.36 1.33-1.12 1.33-2.04 0-1.31-1.13-2.27-2.38-2.28" clipRule="evenodd" opacity={.4} />
        <path d="M12 13.13c.62 0 1.13.5 1.13 1.12s-.5 1.12-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M12 6.63c1.25 0 2.38.96 2.38 2.27 0 .92-.57 1.68-1.33 2.04l-.11.07-.07.05c-.03.46-.4.81-.87.81-.48 0-.87-.39-.87-.87 0-.91.74-1.43 1.17-1.64.22-.1.33-.29.33-.46 0-.23-.23-.52-.63-.53-.37 0-.6.25-.64.44-.1.47-.57.77-1.04.66s-.78-.56-.67-1.04c.23-1.09 1.27-1.8 2.35-1.8" />
    </IconBase>
  ))
);

MessageCircleQuestionFillDuotone.displayName = 'MessageCircleQuestionFillDuotone';

// Triple export pattern
export { MessageCircleQuestionFillDuotone, MessageCircleQuestionFillDuotone as MessageCircleQuestionFillDuotoneIcon, MessageCircleQuestionFillDuotone as SiMessageCircleQuestionFillDuotone };
export default MessageCircleQuestionFillDuotone;
export type { MessageCircleQuestionFillDuotoneProps };
