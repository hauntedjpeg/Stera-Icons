import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageCircleOffRegular } from './MessageCircleOffRegular.js';
import { MessageCircleOffRegularDuotone } from './MessageCircleOffRegularDuotone.js';
import { MessageCircleOffBold } from './MessageCircleOffBold.js';
import { MessageCircleOffBoldDuotone } from './MessageCircleOffBoldDuotone.js';
import { MessageCircleOffFill } from './MessageCircleOffFill.js';
import { MessageCircleOffFillDuotone } from './MessageCircleOffFillDuotone.js';

export interface MessageCircleOffProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageCircleOff - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageCircleOffRegular } from 'stera-icons/icons/MessageCircleOffRegular';
 */
const MessageCircleOff = memo(forwardRef<SVGSVGElement, MessageCircleOffProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageCircleOffBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageCircleOffBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageCircleOffFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageCircleOffFill ref={ref} {...rest} />;
  if (duotone) return <MessageCircleOffRegularDuotone ref={ref} {...rest} />;
  return <MessageCircleOffRegular ref={ref} {...rest} />;
}));

MessageCircleOff.displayName = 'MessageCircleOff';

// Triple export pattern (lucide-react style)
export { MessageCircleOff, MessageCircleOff as MessageCircleOffIcon, MessageCircleOff as SiMessageCircleOff };
export default MessageCircleOff;
