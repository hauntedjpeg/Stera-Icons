import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCirclePlusFillProps = Omit<IconBaseProps, 'children'>;

const MessageCirclePlusFill = memo(
  forwardRef<SVGSVGElement, MessageCirclePlusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.35 0 9.88 3.87 9.88 8.87s-4.53 8.88-9.88 8.88q-1.16 0-2.25-.24l-3.8 1.52c-1.35.54-2.77-.59-2.55-2.02l.47-3.02q.01-.04-.05-.15c-1.07-1.41-1.7-3.12-1.7-4.97 0-5 4.53-8.87 9.88-8.87m0 5c-.48 0-.87.39-.87.87v2.13H9c-.48 0-.87.39-.87.87s.39.88.87.88h2.13V14c0 .48.39.88.87.88s.88-.4.88-.88v-2.12H15c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-2.12V8c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

MessageCirclePlusFill.displayName = 'MessageCirclePlusFill';

// Triple export pattern
export { MessageCirclePlusFill, MessageCirclePlusFill as MessageCirclePlusFillIcon, MessageCirclePlusFill as SiMessageCirclePlusFill };
export default MessageCirclePlusFill;
export type { MessageCirclePlusFillProps };
