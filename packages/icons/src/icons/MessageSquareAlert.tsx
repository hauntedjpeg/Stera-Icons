import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageSquareAlertRegular } from './MessageSquareAlertRegular.js';
import { MessageSquareAlertRegularDuotone } from './MessageSquareAlertRegularDuotone.js';
import { MessageSquareAlertBold } from './MessageSquareAlertBold.js';
import { MessageSquareAlertBoldDuotone } from './MessageSquareAlertBoldDuotone.js';
import { MessageSquareAlertFill } from './MessageSquareAlertFill.js';
import { MessageSquareAlertFillDuotone } from './MessageSquareAlertFillDuotone.js';

export interface MessageSquareAlertProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageSquareAlert - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageSquareAlertRegular } from 'stera-icons/icons/MessageSquareAlertRegular';
 */
const MessageSquareAlert = memo(forwardRef<SVGSVGElement, MessageSquareAlertProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageSquareAlertBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageSquareAlertBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageSquareAlertFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageSquareAlertFill ref={ref} {...rest} />;
  if (duotone) return <MessageSquareAlertRegularDuotone ref={ref} {...rest} />;
  return <MessageSquareAlertRegular ref={ref} {...rest} />;
}));

MessageSquareAlert.displayName = 'MessageSquareAlert';

// Triple export pattern (lucide-react style)
export { MessageSquareAlert, MessageSquareAlert as MessageSquareAlertIcon, MessageSquareAlert as SiMessageSquareAlert };
export default MessageSquareAlert;
