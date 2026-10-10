import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleTextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleTextFillDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleTextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.35 0 9.88 3.87 9.88 8.87s-4.53 8.88-9.88 8.88q-1.16 0-2.25-.24l-3.8 1.52c-1.35.54-2.77-.59-2.55-2.02l.47-3.02q.01-.04-.05-.15c-1.07-1.41-1.7-3.12-1.7-4.97 0-5 4.53-8.87 9.88-8.87m-3.5 9.5c-.48 0-.87.39-.87.87s.39.88.87.88H12c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zm0-3.5c-.48 0-.87.39-.87.87s.39.88.87.88h7c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" opacity={.4} />
        <path d="M12 11.63c.48 0 .88.39.88.87s-.4.88-.88.88H8.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM15.5 8.13c.48 0 .88.39.88.87s-.4.88-.88.88h-7c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

MessageCircleTextFillDuotone.displayName = 'MessageCircleTextFillDuotone';

// Triple export pattern
export { MessageCircleTextFillDuotone, MessageCircleTextFillDuotone as MessageCircleTextFillDuotoneIcon, MessageCircleTextFillDuotone as SiMessageCircleTextFillDuotone };
export default MessageCircleTextFillDuotone;
export type { MessageCircleTextFillDuotoneProps };
