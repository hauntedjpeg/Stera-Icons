import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleDotFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleDotFillDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleDotFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.13q1.32 0 2.56.3c-.67.85-1.06 1.91-1.06 3.07 0 2.76 2.24 5 5 5 1.22 0 2.33-.44 3.2-1.16q.17.81.18 1.66c0 5-4.53 8.88-9.88 8.88q-1.16 0-2.25-.24l-3.8 1.52c-1.35.54-2.77-.59-2.55-2.02l.47-3.02q.01-.04-.05-.15c-1.07-1.41-1.7-3.12-1.7-4.97 0-5 4.53-8.87 9.88-8.87" opacity={.4} />
        <path d="M18.5 2C20.43 2 22 3.57 22 5.5S20.43 9 18.5 9 15 7.43 15 5.5 16.57 2 18.5 2" />
    </IconBase>
  ))
);

MessageCircleDotFillDuotone.displayName = 'MessageCircleDotFillDuotone';

// Triple export pattern
export { MessageCircleDotFillDuotone, MessageCircleDotFillDuotone as MessageCircleDotFillDuotoneIcon, MessageCircleDotFillDuotone as SiMessageCircleDotFillDuotone };
export default MessageCircleDotFillDuotone;
export type { MessageCircleDotFillDuotoneProps };
