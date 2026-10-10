import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCirclePlusRegularProps = Omit<IconBaseProps, 'children'>;

const MessageCirclePlusRegular = memo(
  forwardRef<SVGSVGElement, MessageCirclePlusRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7.25c.41 0 .75.34.75.75v2.25H15c.41 0 .75.34.75.75s-.34.75-.75.75h-2.25V14c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.25H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25V8c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 2.25c5.3 0 9.75 3.84 9.75 8.75S17.3 19.75 12 19.75q-1.17 0-2.26-.24L5.9 21.05c-1.25.5-2.58-.56-2.37-1.9l.46-3.01q.02-.11-.07-.24c-1.05-1.4-1.67-3.08-1.67-4.9 0-4.91 4.45-8.75 9.75-8.75m0 1.5c-4.64 0-8.25 3.33-8.25 7.25 0 1.47.5 2.84 1.37 4 .28.37.43.86.35 1.36l-.46 3.02c-.03.2.16.35.34.27l4.05-1.62.1-.03q.17-.04.35 0 1.02.24 2.15.25c4.64 0 8.25-3.33 8.25-7.25S16.65 3.75 12 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

MessageCirclePlusRegular.displayName = 'MessageCirclePlusRegular';

// Triple export pattern
export { MessageCirclePlusRegular, MessageCirclePlusRegular as MessageCirclePlusRegularIcon, MessageCirclePlusRegular as SiMessageCirclePlusRegular };
export default MessageCirclePlusRegular;
export type { MessageCirclePlusRegularProps };
