import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageCircleAlertRegular } from './MessageCircleAlertRegular.js';
import { MessageCircleAlertRegularDuotone } from './MessageCircleAlertRegularDuotone.js';
import { MessageCircleAlertBold } from './MessageCircleAlertBold.js';
import { MessageCircleAlertBoldDuotone } from './MessageCircleAlertBoldDuotone.js';
import { MessageCircleAlertFill } from './MessageCircleAlertFill.js';
import { MessageCircleAlertFillDuotone } from './MessageCircleAlertFillDuotone.js';

export interface MessageCircleAlertProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageCircleAlert - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageCircleAlertRegular } from 'stera-icons/icons/MessageCircleAlertRegular';
 */
const MessageCircleAlert = memo(forwardRef<SVGSVGElement, MessageCircleAlertProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageCircleAlertBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageCircleAlertBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageCircleAlertFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageCircleAlertFill ref={ref} {...rest} />;
  if (duotone) return <MessageCircleAlertRegularDuotone ref={ref} {...rest} />;
  return <MessageCircleAlertRegular ref={ref} {...rest} />;
}));

MessageCircleAlert.displayName = 'MessageCircleAlert';

// Triple export pattern (lucide-react style)
export { MessageCircleAlert, MessageCircleAlert as MessageCircleAlertIcon, MessageCircleAlert as SiMessageCircleAlert };
export default MessageCircleAlert;
