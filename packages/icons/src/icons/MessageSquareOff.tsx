import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageSquareOffRegular } from './MessageSquareOffRegular.js';
import { MessageSquareOffRegularDuotone } from './MessageSquareOffRegularDuotone.js';
import { MessageSquareOffBold } from './MessageSquareOffBold.js';
import { MessageSquareOffBoldDuotone } from './MessageSquareOffBoldDuotone.js';
import { MessageSquareOffFill } from './MessageSquareOffFill.js';
import { MessageSquareOffFillDuotone } from './MessageSquareOffFillDuotone.js';

export interface MessageSquareOffProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageSquareOff - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageSquareOffRegular } from 'stera-icons/icons/MessageSquareOffRegular';
 */
const MessageSquareOff = memo(forwardRef<SVGSVGElement, MessageSquareOffProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageSquareOffBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageSquareOffBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageSquareOffFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageSquareOffFill ref={ref} {...rest} />;
  if (duotone) return <MessageSquareOffRegularDuotone ref={ref} {...rest} />;
  return <MessageSquareOffRegular ref={ref} {...rest} />;
}));

MessageSquareOff.displayName = 'MessageSquareOff';

// Triple export pattern (lucide-react style)
export { MessageSquareOff, MessageSquareOff as MessageSquareOffIcon, MessageSquareOff as SiMessageSquareOff };
export default MessageSquareOff;
