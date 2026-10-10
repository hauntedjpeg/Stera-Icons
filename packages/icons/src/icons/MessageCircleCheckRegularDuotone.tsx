import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleCheckRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleCheckRegularDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleCheckRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.3 0 9.75 3.84 9.75 8.75S17.3 19.75 12 19.75q-1.17 0-2.26-.24L5.9 21.05c-1.25.5-2.58-.56-2.37-1.9l.46-3.01q.02-.11-.07-.24c-1.05-1.4-1.67-3.08-1.67-4.9 0-4.91 4.45-8.75 9.75-8.75m0 1.5c-4.64 0-8.25 3.33-8.25 7.25 0 1.47.5 2.84 1.37 4 .28.37.43.86.35 1.36l-.46 3.02c-.03.2.16.35.34.27l4.05-1.62.1-.03q.17-.04.35 0 1.02.24 2.15.25c4.64 0 8.25-3.33 8.25-7.25S16.65 3.75 12 3.75" clipRule="evenodd" opacity={.4} />
        <path d="M14.97 8.22c.29-.3.76-.3 1.06 0 .3.29.3.76 0 1.06l-4.31 4.34q-.16.16-.32.3-.15.17-.48.27-.42.12-.84-.06c-.2-.09-.34-.23-.43-.33q-.15-.16-.27-.35L7.9 11.47c-.25-.33-.18-.8.15-1.05s.8-.18 1.05.15l1.48 1.99.03.04.04-.04z" />
    </IconBase>
  ))
);

MessageCircleCheckRegularDuotone.displayName = 'MessageCircleCheckRegularDuotone';

// Triple export pattern
export { MessageCircleCheckRegularDuotone, MessageCircleCheckRegularDuotone as MessageCircleCheckRegularDuotoneIcon, MessageCircleCheckRegularDuotone as SiMessageCircleCheckRegularDuotone };
export default MessageCircleCheckRegularDuotone;
export type { MessageCircleCheckRegularDuotoneProps };
