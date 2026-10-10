import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleDotsRegularProps = Omit<IconBaseProps, 'children'>;

const MessageCircleDotsRegular = memo(
  forwardRef<SVGSVGElement, MessageCircleDotsRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.75 9.75C8.44 9.75 9 10.31 9 11s-.56 1.25-1.25 1.25S6.5 11.69 6.5 11s.56-1.25 1.25-1.25M12 9.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M16.25 9.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25S15 11.69 15 11s.56-1.25 1.25-1.25" />
        <path fillRule="evenodd" d="M12 2.25c5.3 0 9.75 3.84 9.75 8.75S17.3 19.75 12 19.75q-1.17 0-2.26-.24L5.9 21.05c-1.25.5-2.58-.56-2.37-1.9l.46-3.01q.02-.11-.07-.24c-1.05-1.4-1.67-3.08-1.67-4.9 0-4.91 4.45-8.75 9.75-8.75m0 1.5c-4.64 0-8.25 3.33-8.25 7.25 0 1.47.5 2.84 1.37 4 .28.37.43.86.35 1.36l-.46 3.02c-.03.2.16.35.34.27l4.05-1.62.1-.03q.17-.04.35 0 1.02.24 2.15.25c4.64 0 8.25-3.33 8.25-7.25S16.65 3.75 12 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

MessageCircleDotsRegular.displayName = 'MessageCircleDotsRegular';

// Triple export pattern
export { MessageCircleDotsRegular, MessageCircleDotsRegular as MessageCircleDotsRegularIcon, MessageCircleDotsRegular as SiMessageCircleDotsRegular };
export default MessageCircleDotsRegular;
export type { MessageCircleDotsRegularProps };
