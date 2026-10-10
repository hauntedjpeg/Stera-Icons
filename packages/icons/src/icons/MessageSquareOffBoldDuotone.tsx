import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageSquareOffBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageSquareOffBoldDuotone = memo(
  forwardRef<SVGSVGElement, MessageSquareOffBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.68 6.1q-.2.24-.35.54c-.14.26-.23.6-.28 1.21C4 8.47 4 9.26 4 10.4v.6c0 .95 0 1.6.04 2.12.03.5.1.8.19 1.03.3.73.89 1.32 1.62 1.62.23.1.52.16 1.03.2C7.4 16 8.05 16 9 16c.55 0 1 .45 1 1v2.13l4.45-2.96.12-.07.08-.04L16.57 18H15.3L10.8 21q-.29.2-.55.35c-.17.09-.47.24-.84.21-.44-.02-.84-.24-1.1-.59-.23-.3-.28-.63-.3-.81L8 19.5V18q-.72 0-1.26-.04-.9-.04-1.65-.34c-1.23-.5-2.2-1.48-2.7-2.7-.22-.52-.3-1.05-.35-1.66Q1.99 12.37 2 11v-.6q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97q.3-.57.72-1.05zM14.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48.94.48 1.7 1.25 2.19 2.19.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v.6q.01 1.37-.04 2.26-.04.9-.34 1.65-.34.83-.94 1.47c-.37.4-1 .43-1.41.06s-.43-1-.06-1.41q.36-.39.56-.88c.1-.23.16-.52.2-1.03.03-.52.03-1.17.03-2.12v-.6c0-1.14 0-1.93-.05-2.55-.05-.6-.14-.95-.28-1.21q-.44-.87-1.3-1.31c-.27-.14-.62-.23-1.22-.28C16.53 5 15.74 5 14.6 5H8.25c-.55 0-1-.44-1-.99-.01-.55.43-1 .98-1L9.4 3z" opacity={0.4} />
        <path d="M1.8 1.8c.38-.4 1.02-.4 1.4 0l17 17c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-17-17c-.4-.38-.4-1.02 0-1.4" />
    </IconBase>
  ))
);

MessageSquareOffBoldDuotone.displayName = 'MessageSquareOffBoldDuotone';

// Triple export pattern
export { MessageSquareOffBoldDuotone, MessageSquareOffBoldDuotone as MessageSquareOffBoldDuotoneIcon, MessageSquareOffBoldDuotone as SiMessageSquareOffBoldDuotone };
export default MessageSquareOffBoldDuotone;
export type { MessageSquareOffBoldDuotoneProps };
