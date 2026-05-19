import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageCircleTextRegular } from './MessageCircleTextRegular.js';
import { MessageCircleTextRegularDuotone } from './MessageCircleTextRegularDuotone.js';
import { MessageCircleTextBold } from './MessageCircleTextBold.js';
import { MessageCircleTextBoldDuotone } from './MessageCircleTextBoldDuotone.js';
import { MessageCircleTextFill } from './MessageCircleTextFill.js';
import { MessageCircleTextFillDuotone } from './MessageCircleTextFillDuotone.js';

export interface MessageCircleTextProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageCircleText - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageCircleTextRegular } from 'stera-icons/icons/MessageCircleTextRegular';
 */
const MessageCircleText = memo(forwardRef<SVGSVGElement, MessageCircleTextProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageCircleTextBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageCircleTextBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageCircleTextFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageCircleTextFill ref={ref} {...rest} />;
  if (duotone) return <MessageCircleTextRegularDuotone ref={ref} {...rest} />;
  return <MessageCircleTextRegular ref={ref} {...rest} />;
}));

MessageCircleText.displayName = 'MessageCircleText';

// Triple export pattern (lucide-react style)
export { MessageCircleText, MessageCircleText as MessageCircleTextIcon, MessageCircleText as SiMessageCircleText };
export default MessageCircleText;
