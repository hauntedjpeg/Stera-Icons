import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleQuestionBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleQuestionBoldDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleQuestionBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.4 0 10 3.92 10 9s-4.6 9-10 9q-1.16 0-2.24-.23L6 21.27c-1.44.58-2.96-.62-2.72-2.15l.46-3.02q0-.03-.02-.05C2.64 14.62 2 12.88 2 11c0-5.08 4.6-9 10-9m0 2c-4.53 0-8 3.24-8 7 0 1.41.48 2.73 1.31 3.84.32.43.5.98.4 1.56l-.46 3.02L9.3 17.8q.3-.12.6-.04 1 .23 2.1.24c4.53 0 8-3.24 8-7s-3.47-7-8-7" clipRule="evenodd" opacity={.4} />
        <path d="M12 13c.7 0 1.25.56 1.25 1.25S12.7 15.5 12 15.5s-1.25-.56-1.25-1.25S11.31 13 12 13M12 6.75c1.31 0 2.5 1.01 2.5 2.4 0 .97-.6 1.78-1.4 2.15l-.1.06v.01c-.07.5-.49.88-1 .88-.55 0-1-.45-1-1 0-.99.8-1.54 1.25-1.75q.26-.15.25-.35c0-.16-.16-.4-.5-.4-.32 0-.5.21-.52.33-.12.54-.65.88-1.2.77-.53-.12-.87-.65-.76-1.2.25-1.15 1.35-1.9 2.48-1.9" />
    </IconBase>
  ))
);

MessageCircleQuestionBoldDuotone.displayName = 'MessageCircleQuestionBoldDuotone';

// Triple export pattern
export { MessageCircleQuestionBoldDuotone, MessageCircleQuestionBoldDuotone as MessageCircleQuestionBoldDuotoneIcon, MessageCircleQuestionBoldDuotone as SiMessageCircleQuestionBoldDuotone };
export default MessageCircleQuestionBoldDuotone;
export type { MessageCircleQuestionBoldDuotoneProps };
