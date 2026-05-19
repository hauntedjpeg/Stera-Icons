import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageSquareCheckRegular } from './MessageSquareCheckRegular.js';
import { MessageSquareCheckRegularDuotone } from './MessageSquareCheckRegularDuotone.js';
import { MessageSquareCheckBold } from './MessageSquareCheckBold.js';
import { MessageSquareCheckBoldDuotone } from './MessageSquareCheckBoldDuotone.js';
import { MessageSquareCheckFill } from './MessageSquareCheckFill.js';
import { MessageSquareCheckFillDuotone } from './MessageSquareCheckFillDuotone.js';

export interface MessageSquareCheckProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageSquareCheck - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageSquareCheckRegular } from 'stera-icons/icons/MessageSquareCheckRegular';
 */
const MessageSquareCheck = memo(forwardRef<SVGSVGElement, MessageSquareCheckProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageSquareCheckBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageSquareCheckBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageSquareCheckFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageSquareCheckFill ref={ref} {...rest} />;
  if (duotone) return <MessageSquareCheckRegularDuotone ref={ref} {...rest} />;
  return <MessageSquareCheckRegular ref={ref} {...rest} />;
}));

MessageSquareCheck.displayName = 'MessageSquareCheck';

// Triple export pattern (lucide-react style)
export { MessageSquareCheck, MessageSquareCheck as MessageSquareCheckIcon, MessageSquareCheck as SiMessageSquareCheck };
export default MessageSquareCheck;
