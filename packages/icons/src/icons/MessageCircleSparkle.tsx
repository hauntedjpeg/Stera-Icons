import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageCircleSparkleRegular } from './MessageCircleSparkleRegular.js';
import { MessageCircleSparkleRegularDuotone } from './MessageCircleSparkleRegularDuotone.js';
import { MessageCircleSparkleBold } from './MessageCircleSparkleBold.js';
import { MessageCircleSparkleBoldDuotone } from './MessageCircleSparkleBoldDuotone.js';
import { MessageCircleSparkleFill } from './MessageCircleSparkleFill.js';
import { MessageCircleSparkleFillDuotone } from './MessageCircleSparkleFillDuotone.js';

export interface MessageCircleSparkleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageCircleSparkle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageCircleSparkleRegular } from 'stera-icons/icons/MessageCircleSparkleRegular';
 */
const MessageCircleSparkle = memo(forwardRef<SVGSVGElement, MessageCircleSparkleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageCircleSparkleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageCircleSparkleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageCircleSparkleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageCircleSparkleFill ref={ref} {...rest} />;
  if (duotone) return <MessageCircleSparkleRegularDuotone ref={ref} {...rest} />;
  return <MessageCircleSparkleRegular ref={ref} {...rest} />;
}));

MessageCircleSparkle.displayName = 'MessageCircleSparkle';

// Triple export pattern (lucide-react style)
export { MessageCircleSparkle, MessageCircleSparkle as MessageCircleSparkleIcon, MessageCircleSparkle as SiMessageCircleSparkle };
export default MessageCircleSparkle;
