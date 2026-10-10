import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleDotRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleDotRegularDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleDotRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.25q.84 0 1.66.13c.4.06.69.44.62.85s-.44.7-.85.63q-.7-.1-1.43-.11c-4.64 0-8.25 3.33-8.25 7.25 0 1.47.5 2.84 1.37 4 .28.37.43.86.35 1.36l-.46 3.02c-.03.2.16.35.34.27l4.05-1.62.1-.03q.17-.04.35 0 1.02.24 2.15.25c4.64 0 8.25-3.33 8.25-7.25q0-.26-.02-.53c-.03-.4.27-.77.68-.8s.78.27.81.68q.03.32.03.65c0 4.91-4.45 8.75-9.75 8.75q-1.17 0-2.26-.24L5.9 21.05c-1.25.5-2.58-.56-2.37-1.9l.46-3.01q.02-.11-.07-.24c-1.05-1.4-1.67-3.08-1.67-4.9 0-4.91 4.45-8.75 9.75-8.75" opacity={.4} />
        <path d="M18.5 2C20.43 2 22 3.57 22 5.5S20.43 9 18.5 9 15 7.43 15 5.5 16.57 2 18.5 2" />
    </IconBase>
  ))
);

MessageCircleDotRegularDuotone.displayName = 'MessageCircleDotRegularDuotone';

// Triple export pattern
export { MessageCircleDotRegularDuotone, MessageCircleDotRegularDuotone as MessageCircleDotRegularDuotoneIcon, MessageCircleDotRegularDuotone as SiMessageCircleDotRegularDuotone };
export default MessageCircleDotRegularDuotone;
export type { MessageCircleDotRegularDuotoneProps };
