import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleQuestionRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleQuestionRegularDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleQuestionRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.3 0 9.75 3.84 9.75 8.75S17.3 19.75 12 19.75q-1.17 0-2.26-.24L5.9 21.05c-1.25.5-2.58-.56-2.37-1.9l.46-3.01q.02-.11-.07-.24c-1.05-1.4-1.67-3.08-1.67-4.9 0-4.91 4.45-8.75 9.75-8.75m0 1.5c-4.64 0-8.25 3.33-8.25 7.25 0 1.47.5 2.84 1.37 4 .28.37.43.86.35 1.36l-.46 3.02c-.03.2.16.35.34.27l4.05-1.62.1-.03q.17-.04.35 0 1.02.24 2.15.25c4.64 0 8.25-3.33 8.25-7.25S16.65 3.75 12 3.75" clipRule="evenodd" opacity={.4} />
        <path d="M12 13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M12 7.25c1.2 0 2.25.92 2.25 2.15 0 .87-.53 1.59-1.25 1.93q-.15.07-.23.16l-.02.03c-.01.4-.34.73-.75.73s-.75-.34-.75-.75c0-.84.68-1.33 1.1-1.53.26-.12.4-.35.4-.57 0-.31-.29-.65-.75-.65-.42 0-.71.28-.77.53-.09.4-.48.66-.89.57-.4-.09-.66-.48-.57-.89.22-1.03 1.2-1.71 2.23-1.71" />
    </IconBase>
  ))
);

MessageCircleQuestionRegularDuotone.displayName = 'MessageCircleQuestionRegularDuotone';

// Triple export pattern
export { MessageCircleQuestionRegularDuotone, MessageCircleQuestionRegularDuotone as MessageCircleQuestionRegularDuotoneIcon, MessageCircleQuestionRegularDuotone as SiMessageCircleQuestionRegularDuotone };
export default MessageCircleQuestionRegularDuotone;
export type { MessageCircleQuestionRegularDuotoneProps };
