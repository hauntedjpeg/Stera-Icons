import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleQuestionFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleQuestionFillDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleQuestionFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.35 0 9.88 3.87 9.88 8.87s-4.53 8.88-9.88 8.88q-1.16 0-2.25-.24l-3.8 1.52a1.88 1.88 0 0 1-2.55-2.02l.47-3.02q.01-.04-.05-.15A8.2 8.2 0 0 1 2.12 11c0-5 4.53-8.87 9.88-8.87m0 11a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.26m0-6.5c-1.08 0-2.12.71-2.35 1.8a.88.88 0 0 0 1.7.38c.05-.2.28-.43.65-.44.4 0 .63.3.63.53 0 .17-.1.36-.33.46-.43.2-1.17.73-1.17 1.64a.87.87 0 0 0 1.74.06l.07-.05.11-.07a2.3 2.3 0 0 0 1.33-2.04A2.33 2.33 0 0 0 12 6.62" clipRule="evenodd" opacity={.4} />
        <path d="M12 13.13a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M12 6.63c1.25 0 2.38.96 2.38 2.27 0 .92-.57 1.68-1.33 2.04l-.18.12a.87.87 0 0 1-1.74-.06c0-.91.74-1.43 1.17-1.64.22-.1.33-.29.33-.46 0-.23-.23-.52-.63-.53-.37 0-.6.25-.64.44a.88.88 0 0 1-1.72-.38A2.4 2.4 0 0 1 12 6.63" />
    </IconBase>
  ))
);

MessageCircleQuestionFillDuotone.displayName = 'MessageCircleQuestionFillDuotone';

// Triple export pattern (lucide-react style)
export { MessageCircleQuestionFillDuotone, MessageCircleQuestionFillDuotone as MessageCircleQuestionFillDuotoneIcon, MessageCircleQuestionFillDuotone as SiMessageCircleQuestionFillDuotone };
export default MessageCircleQuestionFillDuotone;
export type { MessageCircleQuestionFillDuotoneProps };
