import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleDashedRegularProps = Omit<IconBaseProps, 'children'>;

const MessageCircleDashedRegular = memo(
  forwardRef<SVGSVGElement, MessageCircleDashedRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.91 15.06c.41.06.7.45.63.85l-.53 3.47c-.03.2.16.35.34.27l4.05-1.62c.38-.15.82.04.97.42.15.39-.03.82-.42.98L5.9 21.05c-1.25.5-2.58-.56-2.37-1.9l.53-3.46c.06-.41.45-.7.85-.63M14.07 18.02c.4-.1.8.16.9.57s-.17.8-.57.9q-.82.18-1.69.24c-.41.02-.77-.29-.8-.7-.02-.42.3-.77.7-.8q.75-.05 1.46-.21M18.9 14.98c.24-.33.71-.4 1.04-.15s.4.72.15 1.05c-.68.9-1.54 1.7-2.53 2.31-.36.22-.82.11-1.04-.24s-.1-.81.24-1.03q1.28-.8 2.13-1.94M2.97 10.53c.42-.02.77.3.78.72q.03.83.3 1.7c.13.4-.09.82-.49.94-.39.13-.81-.09-.94-.48q-.33-1.07-.37-2.1c-.01-.42.3-.77.72-.78M20.63 8.61c.4-.1.81.16.9.56q.22.9.22 1.83 0 .9-.2 1.74c-.08.4-.48.66-.89.57-.4-.1-.66-.5-.57-.9q.16-.69.16-1.41 0-.75-.17-1.48c-.1-.4.15-.81.55-.9M6.12 4.13c.34-.24.8-.15 1.04.19s.16.8-.18 1.04c-1 .7-1.83 1.58-2.4 2.58-.2.36-.66.48-1.02.28s-.48-.66-.28-1.02c.69-1.22 1.68-2.26 2.84-3.07M16.15 3.87c.2-.37.66-.5 1.02-.3q1.63.92 2.76 2.33c.26.33.2.8-.12 1.06s-.8.2-1.05-.12q-.94-1.17-2.32-1.95c-.37-.2-.5-.66-.3-1.02M12 2.25q.91 0 1.79.15c.4.06.68.45.61.86-.06.4-.45.68-.86.62q-.75-.13-1.54-.13-.9 0-1.77.19c-.4.09-.8-.17-.89-.57-.08-.41.17-.8.58-.9q1.03-.21 2.08-.22" />
    </IconBase>
  ))
);

MessageCircleDashedRegular.displayName = 'MessageCircleDashedRegular';

// Triple export pattern
export { MessageCircleDashedRegular, MessageCircleDashedRegular as MessageCircleDashedRegularIcon, MessageCircleDashedRegular as SiMessageCircleDashedRegular };
export default MessageCircleDashedRegular;
export type { MessageCircleDashedRegularProps };
