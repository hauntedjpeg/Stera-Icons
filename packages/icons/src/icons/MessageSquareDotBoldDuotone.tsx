import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageSquareDotBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageSquareDotBoldDuotone = memo(
  forwardRef<SVGSVGElement, MessageSquareDotBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.22 3c.55 0 1 .45 1 1s-.45 1-1 1H9.4c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28-.57.28-1.03.74-1.31 1.3-.14.27-.23.62-.28 1.22C4 8.47 4 9.26 4 10.4v.6c0 .95 0 1.6.04 2.12.03.5.1.8.19 1.03.3.73.89 1.32 1.62 1.62.23.1.52.16 1.03.2C7.4 16 8.05 16 9 16c.55 0 1 .45 1 1v2.13l4.45-2.96.11-.07.15-.06.07-.01.02-.01h.06l.04-.02h.1c.95 0 1.6 0 2.12-.04.5-.03.8-.1 1.03-.19.73-.3 1.32-.89 1.62-1.62.1-.23.16-.52.2-1.03.03-.52.03-1.17.03-2.12v-.6c0-.55.45-1 1-1s1 .45 1 1v.6q.01 1.37-.04 2.26-.04.9-.34 1.65c-.5 1.23-1.48 2.2-2.7 2.7-.52.22-1.05.3-1.66.35q-.8.05-1.96.04l-4.97 3.31c-1 .67-2.33-.05-2.33-1.24V18q-.72 0-1.26-.04-.9-.04-1.65-.34c-1.23-.5-2.2-1.48-2.7-2.7-.22-.52-.3-1.05-.35-1.66Q1.99 12.37 2 11v-.6q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97.48-.94 1.25-1.7 2.19-2.19.6-.3 1.23-.42 1.96-.48Q7.75 2.99 9.4 3z" opacity={.4} />
        <path d="M18.5 2C20.43 2 22 3.57 22 5.5S20.43 9 18.5 9 15 7.43 15 5.5 16.57 2 18.5 2" />
    </IconBase>
  ))
);

MessageSquareDotBoldDuotone.displayName = 'MessageSquareDotBoldDuotone';

// Triple export pattern
export { MessageSquareDotBoldDuotone, MessageSquareDotBoldDuotone as MessageSquareDotBoldDuotoneIcon, MessageSquareDotBoldDuotone as SiMessageSquareDotBoldDuotone };
export default MessageSquareDotBoldDuotone;
export type { MessageSquareDotBoldDuotoneProps };
