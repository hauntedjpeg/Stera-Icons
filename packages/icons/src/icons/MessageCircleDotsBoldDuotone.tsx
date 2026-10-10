import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleDotsBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleDotsBoldDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleDotsBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.4 0 10 3.92 10 9s-4.6 9-10 9q-1.16 0-2.24-.23L6 21.27c-1.44.58-2.96-.62-2.72-2.15l.46-3.02q0-.03-.02-.05C2.64 14.62 2 12.88 2 11c0-5.08 4.6-9 10-9m0 2c-4.53 0-8 3.24-8 7 0 1.41.48 2.73 1.31 3.84.32.43.5.98.4 1.56l-.46 3.02L9.3 17.8q.3-.12.6-.04 1 .23 2.1.24c4.53 0 8-3.24 8-7s-3.47-7-8-7" clipRule="evenodd" opacity={.4} />
        <path d="M7.5 9.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S6 11.83 6 11s.67-1.5 1.5-1.5M12 9.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M16.5 9.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S15 11.83 15 11s.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

MessageCircleDotsBoldDuotone.displayName = 'MessageCircleDotsBoldDuotone';

// Triple export pattern
export { MessageCircleDotsBoldDuotone, MessageCircleDotsBoldDuotone as MessageCircleDotsBoldDuotoneIcon, MessageCircleDotsBoldDuotone as SiMessageCircleDotsBoldDuotone };
export default MessageCircleDotsBoldDuotone;
export type { MessageCircleDotsBoldDuotoneProps };
