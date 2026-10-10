import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageSquareQuestionFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageSquareQuestionFillDuotone = memo(
  forwardRef<SVGSVGElement, MessageSquareQuestionFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.6 3.13q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v.6q.01 1.37-.04 2.25c-.04.6-.12 1.12-.33 1.62-.5 1.19-1.44 2.14-2.63 2.63q-.73.29-1.62.34-.8.04-1.98.03l-4.54 3.03-.54.34c-.16.09-.44.22-.77.2-.4-.03-.77-.22-1.02-.54-.2-.27-.24-.57-.26-.75q-.02-.3-.02-.65v-1.63q-.78.01-1.37-.04c-.6-.04-1.12-.12-1.62-.33C3.94 17 3 16.06 2.5 14.87q-.3-.74-.33-1.62-.06-.88-.04-2.25v-.6q-.01-1.64.05-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zM12 12.88c-.62 0-1.12.5-1.12 1.12s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12m0-6.5c-1.08 0-2.12.71-2.35 1.8-.1.48.2.94.67 1.04s.93-.2 1.04-.66c.04-.2.27-.43.64-.44.4 0 .63.3.63.53 0 .17-.1.36-.33.46-.43.2-1.17.73-1.17 1.64 0 .48.39.88.87.88.46 0 .84-.36.87-.82l.07-.05.11-.07c.76-.36 1.33-1.12 1.33-2.04 0-1.31-1.13-2.27-2.38-2.28" clipRule="evenodd" opacity={.4} />
        <path d="M12 12.88c.62 0 1.13.5 1.13 1.12s-.5 1.12-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M12 6.38c1.25 0 2.38.96 2.38 2.27 0 .92-.57 1.68-1.33 2.04l-.11.07-.07.05c-.03.46-.4.81-.87.81-.48 0-.87-.39-.87-.87 0-.91.74-1.43 1.17-1.64.22-.1.33-.29.33-.46 0-.23-.23-.52-.63-.53-.37 0-.6.25-.64.44-.1.47-.57.77-1.04.66s-.78-.56-.67-1.04c.23-1.09 1.27-1.8 2.35-1.8" />
    </IconBase>
  ))
);

MessageSquareQuestionFillDuotone.displayName = 'MessageSquareQuestionFillDuotone';

// Triple export pattern
export { MessageSquareQuestionFillDuotone, MessageSquareQuestionFillDuotone as MessageSquareQuestionFillDuotoneIcon, MessageSquareQuestionFillDuotone as SiMessageSquareQuestionFillDuotone };
export default MessageSquareQuestionFillDuotone;
export type { MessageSquareQuestionFillDuotoneProps };
