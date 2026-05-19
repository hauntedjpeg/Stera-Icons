import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageCircleRegular } from './MessageCircleRegular.js';
import { MessageCircleRegularDuotone } from './MessageCircleRegularDuotone.js';
import { MessageCircleBold } from './MessageCircleBold.js';
import { MessageCircleBoldDuotone } from './MessageCircleBoldDuotone.js';
import { MessageCircleFill } from './MessageCircleFill.js';
import { MessageCircleFillDuotone } from './MessageCircleFillDuotone.js';

export interface MessageCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageCircleRegular } from 'stera-icons/icons/MessageCircleRegular';
 */
const MessageCircle = memo(forwardRef<SVGSVGElement, MessageCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageCircleFill ref={ref} {...rest} />;
  if (duotone) return <MessageCircleRegularDuotone ref={ref} {...rest} />;
  return <MessageCircleRegular ref={ref} {...rest} />;
}));

MessageCircle.displayName = 'MessageCircle';

// Triple export pattern (lucide-react style)
export { MessageCircle, MessageCircle as MessageCircleIcon, MessageCircle as SiMessageCircle };
export default MessageCircle;
