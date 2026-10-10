import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleSparkleFillProps = Omit<IconBaseProps, 'children'>;

const MessageCircleSparkleFill = memo(
  forwardRef<SVGSVGElement, MessageCircleSparkleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.35 0 9.88 3.87 9.88 8.87s-4.53 8.88-9.88 8.88q-1.16 0-2.25-.24l-3.8 1.52c-1.35.54-2.77-.59-2.55-2.02l.47-3.02q.01-.04-.05-.15c-1.07-1.41-1.7-3.12-1.7-4.97 0-5 4.53-8.87 9.88-8.87m.2 4.65c-.06-.2-.34-.2-.4 0l-.22.9c-.36 1.42-1.48 2.54-2.9 2.9l-.9.23c-.2.05-.2.33 0 .38l.9.23c1.42.36 2.54 1.48 2.9 2.9l.23.9c.05.2.33.2.38 0l.23-.9c.36-1.42 1.48-2.54 2.9-2.9l.9-.23c.2-.05.2-.33 0-.38l-.9-.23c-1.42-.36-2.54-1.48-2.9-2.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

MessageCircleSparkleFill.displayName = 'MessageCircleSparkleFill';

// Triple export pattern
export { MessageCircleSparkleFill, MessageCircleSparkleFill as MessageCircleSparkleFillIcon, MessageCircleSparkleFill as SiMessageCircleSparkleFill };
export default MessageCircleSparkleFill;
export type { MessageCircleSparkleFillProps };
