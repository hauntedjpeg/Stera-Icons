import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageMessagesRegular } from './MessageMessagesRegular.js';
import { MessageMessagesRegularDuotone } from './MessageMessagesRegularDuotone.js';
import { MessageMessagesBold } from './MessageMessagesBold.js';
import { MessageMessagesBoldDuotone } from './MessageMessagesBoldDuotone.js';
import { MessageMessagesFill } from './MessageMessagesFill.js';
import { MessageMessagesFillDuotone } from './MessageMessagesFillDuotone.js';

export interface MessageMessagesProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageMessages - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageMessagesRegular } from 'stera-icons/icons/MessageMessagesRegular';
 */
const MessageMessages = memo(forwardRef<SVGSVGElement, MessageMessagesProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageMessagesBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageMessagesBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageMessagesFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageMessagesFill ref={ref} {...rest} />;
  if (duotone) return <MessageMessagesRegularDuotone ref={ref} {...rest} />;
  return <MessageMessagesRegular ref={ref} {...rest} />;
}));

MessageMessages.displayName = 'MessageMessages';

// Triple export pattern (lucide-react style)
export { MessageMessages, MessageMessages as MessageMessagesIcon, MessageMessages as SiMessageMessages };
export default MessageMessages;
