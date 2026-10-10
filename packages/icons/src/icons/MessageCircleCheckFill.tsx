import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleCheckFillProps = Omit<IconBaseProps, 'children'>;

const MessageCircleCheckFill = memo(
  forwardRef<SVGSVGElement, MessageCircleCheckFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.35 0 9.88 3.87 9.88 8.87s-4.53 8.88-9.88 8.88q-1.16 0-2.25-.24l-3.8 1.52c-1.35.54-2.77-.59-2.55-2.02l.47-3.02q.01-.04-.05-.15c-1.07-1.41-1.7-3.12-1.7-4.97 0-5 4.53-8.87 9.88-8.87m4.12 6c-.35-.34-.9-.34-1.24 0l-4.25 4.28L9.2 10.5c-.29-.39-.84-.47-1.22-.18-.39.29-.47.84-.18 1.23l1.48 1.98q.13.18.27.35c.1.11.26.26.48.36q.46.2.93.07c.24-.07.4-.2.52-.3q.17-.14.33-.3l4.31-4.34c.34-.35.34-.9 0-1.24" clipRule="evenodd" />
    </IconBase>
  ))
);

MessageCircleCheckFill.displayName = 'MessageCircleCheckFill';

// Triple export pattern
export { MessageCircleCheckFill, MessageCircleCheckFill as MessageCircleCheckFillIcon, MessageCircleCheckFill as SiMessageCircleCheckFill };
export default MessageCircleCheckFill;
export type { MessageCircleCheckFillProps };
