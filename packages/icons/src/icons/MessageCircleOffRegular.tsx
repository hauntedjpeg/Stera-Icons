import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleOffRegularProps = Omit<IconBaseProps, 'children'>;

const MessageCircleOffRegular = memo(
  forwardRef<SVGSVGElement, MessageCircleOffRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M2.47 2.47c.3-.3.77-.3 1.06 0l17 17c.3.3.3.77 0 1.06s-.77.3-1.06 0l-2.18-2.18c-1.53.89-3.35 1.4-5.29 1.4q-1.17 0-2.26-.24L5.9 21.05c-1.25.5-2.58-.56-2.37-1.9l.46-3.01q.02-.11-.07-.24c-1.05-1.4-1.67-3.08-1.67-4.9 0-2.1.82-4.02 2.18-5.51L2.47 3.53c-.3-.3-.3-.77 0-1.06m3.02 4.08C4.39 7.79 3.75 9.33 3.75 11c0 1.47.5 2.84 1.37 4 .28.37.43.86.35 1.36l-.46 3.02c-.03.2.16.35.34.27l4.05-1.62.1-.03q.17-.04.35 0 1.02.24 2.15.25c1.53 0 2.96-.37 4.19-1z" clipRule="evenodd" />
        <path d="M12 2.25c5.3 0 9.75 3.84 9.75 8.75 0 1.76-.58 3.4-1.57 4.77-.25.33-.71.4-1.05.17-.34-.25-.41-.72-.17-1.05.82-1.13 1.29-2.46 1.29-3.89 0-3.92-3.6-7.25-8.25-7.25q-1.98.01-3.65.75c-.38.16-.82-.01-.99-.4-.16-.37 0-.81.39-.98Q9.7 2.26 12 2.25" />
    </IconBase>
  ))
);

MessageCircleOffRegular.displayName = 'MessageCircleOffRegular';

// Triple export pattern
export { MessageCircleOffRegular, MessageCircleOffRegular as MessageCircleOffRegularIcon, MessageCircleOffRegular as SiMessageCircleOffRegular };
export default MessageCircleOffRegular;
export type { MessageCircleOffRegularProps };
