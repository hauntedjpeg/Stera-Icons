import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageSquareRegular } from './MessageSquareRegular.js';
import { MessageSquareRegularDuotone } from './MessageSquareRegularDuotone.js';
import { MessageSquareBold } from './MessageSquareBold.js';
import { MessageSquareBoldDuotone } from './MessageSquareBoldDuotone.js';
import { MessageSquareFill } from './MessageSquareFill.js';
import { MessageSquareFillDuotone } from './MessageSquareFillDuotone.js';

export interface MessageSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageSquareRegular } from 'stera-icons/icons/MessageSquareRegular';
 */
const MessageSquare = memo(forwardRef<SVGSVGElement, MessageSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageSquareFill ref={ref} {...rest} />;
  if (duotone) return <MessageSquareRegularDuotone ref={ref} {...rest} />;
  return <MessageSquareRegular ref={ref} {...rest} />;
}));

MessageSquare.displayName = 'MessageSquare';

// Triple export pattern (lucide-react style)
export { MessageSquare, MessageSquare as MessageSquareIcon, MessageSquare as SiMessageSquare };
export default MessageSquare;
