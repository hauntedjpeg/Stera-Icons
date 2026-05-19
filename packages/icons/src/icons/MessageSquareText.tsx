import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageSquareTextRegular } from './MessageSquareTextRegular.js';
import { MessageSquareTextRegularDuotone } from './MessageSquareTextRegularDuotone.js';
import { MessageSquareTextBold } from './MessageSquareTextBold.js';
import { MessageSquareTextBoldDuotone } from './MessageSquareTextBoldDuotone.js';
import { MessageSquareTextFill } from './MessageSquareTextFill.js';
import { MessageSquareTextFillDuotone } from './MessageSquareTextFillDuotone.js';

export interface MessageSquareTextProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageSquareText - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageSquareTextRegular } from 'stera-icons/icons/MessageSquareTextRegular';
 */
const MessageSquareText = memo(forwardRef<SVGSVGElement, MessageSquareTextProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageSquareTextBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageSquareTextBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageSquareTextFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageSquareTextFill ref={ref} {...rest} />;
  if (duotone) return <MessageSquareTextRegularDuotone ref={ref} {...rest} />;
  return <MessageSquareTextRegular ref={ref} {...rest} />;
}));

MessageSquareText.displayName = 'MessageSquareText';

// Triple export pattern (lucide-react style)
export { MessageSquareText, MessageSquareText as MessageSquareTextIcon, MessageSquareText as SiMessageSquareText };
export default MessageSquareText;
