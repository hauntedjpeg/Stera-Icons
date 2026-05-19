import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageCircleCheckRegular } from './MessageCircleCheckRegular.js';
import { MessageCircleCheckRegularDuotone } from './MessageCircleCheckRegularDuotone.js';
import { MessageCircleCheckBold } from './MessageCircleCheckBold.js';
import { MessageCircleCheckBoldDuotone } from './MessageCircleCheckBoldDuotone.js';
import { MessageCircleCheckFill } from './MessageCircleCheckFill.js';
import { MessageCircleCheckFillDuotone } from './MessageCircleCheckFillDuotone.js';

export interface MessageCircleCheckProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageCircleCheck - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageCircleCheckRegular } from 'stera-icons/icons/MessageCircleCheckRegular';
 */
const MessageCircleCheck = memo(forwardRef<SVGSVGElement, MessageCircleCheckProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageCircleCheckBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageCircleCheckBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageCircleCheckFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageCircleCheckFill ref={ref} {...rest} />;
  if (duotone) return <MessageCircleCheckRegularDuotone ref={ref} {...rest} />;
  return <MessageCircleCheckRegular ref={ref} {...rest} />;
}));

MessageCircleCheck.displayName = 'MessageCircleCheck';

// Triple export pattern (lucide-react style)
export { MessageCircleCheck, MessageCircleCheck as MessageCircleCheckIcon, MessageCircleCheck as SiMessageCircleCheck };
export default MessageCircleCheck;
