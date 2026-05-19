import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageSquareSparkleRegular } from './MessageSquareSparkleRegular.js';
import { MessageSquareSparkleRegularDuotone } from './MessageSquareSparkleRegularDuotone.js';
import { MessageSquareSparkleBold } from './MessageSquareSparkleBold.js';
import { MessageSquareSparkleBoldDuotone } from './MessageSquareSparkleBoldDuotone.js';
import { MessageSquareSparkleFill } from './MessageSquareSparkleFill.js';
import { MessageSquareSparkleFillDuotone } from './MessageSquareSparkleFillDuotone.js';

export interface MessageSquareSparkleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageSquareSparkle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageSquareSparkleRegular } from 'stera-icons/icons/MessageSquareSparkleRegular';
 */
const MessageSquareSparkle = memo(forwardRef<SVGSVGElement, MessageSquareSparkleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageSquareSparkleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageSquareSparkleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageSquareSparkleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageSquareSparkleFill ref={ref} {...rest} />;
  if (duotone) return <MessageSquareSparkleRegularDuotone ref={ref} {...rest} />;
  return <MessageSquareSparkleRegular ref={ref} {...rest} />;
}));

MessageSquareSparkle.displayName = 'MessageSquareSparkle';

// Triple export pattern (lucide-react style)
export { MessageSquareSparkle, MessageSquareSparkle as MessageSquareSparkleIcon, MessageSquareSparkle as SiMessageSquareSparkle };
export default MessageSquareSparkle;
