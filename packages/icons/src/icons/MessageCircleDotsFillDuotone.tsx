import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleDotsFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleDotsFillDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleDotsFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.35 0 9.88 3.87 9.88 8.87s-4.53 8.88-9.88 8.88q-1.16 0-2.25-.24l-3.8 1.52c-1.35.54-2.77-.59-2.55-2.02l.47-3.02q.01-.04-.05-.15c-1.07-1.41-1.7-3.12-1.7-4.97 0-5 4.53-8.87 9.88-8.87M7.5 9.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S9 11.83 9 11s-.67-1.5-1.5-1.5m4.5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m4.5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S18 11.83 18 11s-.67-1.5-1.5-1.5" clipRule="evenodd" opacity={.4} />
        <path d="M7.5 9.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S6 11.83 6 11s.67-1.5 1.5-1.5M12 9.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M16.5 9.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S15 11.83 15 11s.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

MessageCircleDotsFillDuotone.displayName = 'MessageCircleDotsFillDuotone';

// Triple export pattern
export { MessageCircleDotsFillDuotone, MessageCircleDotsFillDuotone as MessageCircleDotsFillDuotoneIcon, MessageCircleDotsFillDuotone as SiMessageCircleDotsFillDuotone };
export default MessageCircleDotsFillDuotone;
export type { MessageCircleDotsFillDuotoneProps };
