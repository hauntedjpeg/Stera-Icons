import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageSquareQuestionRegular } from './MessageSquareQuestionRegular.js';
import { MessageSquareQuestionRegularDuotone } from './MessageSquareQuestionRegularDuotone.js';
import { MessageSquareQuestionBold } from './MessageSquareQuestionBold.js';
import { MessageSquareQuestionBoldDuotone } from './MessageSquareQuestionBoldDuotone.js';
import { MessageSquareQuestionFill } from './MessageSquareQuestionFill.js';
import { MessageSquareQuestionFillDuotone } from './MessageSquareQuestionFillDuotone.js';

export interface MessageSquareQuestionProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageSquareQuestion - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageSquareQuestionRegular } from 'stera-icons/icons/MessageSquareQuestionRegular';
 */
const MessageSquareQuestion = memo(forwardRef<SVGSVGElement, MessageSquareQuestionProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageSquareQuestionBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageSquareQuestionBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageSquareQuestionFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageSquareQuestionFill ref={ref} {...rest} />;
  if (duotone) return <MessageSquareQuestionRegularDuotone ref={ref} {...rest} />;
  return <MessageSquareQuestionRegular ref={ref} {...rest} />;
}));

MessageSquareQuestion.displayName = 'MessageSquareQuestion';

// Triple export pattern (lucide-react style)
export { MessageSquareQuestion, MessageSquareQuestion as MessageSquareQuestionIcon, MessageSquareQuestion as SiMessageSquareQuestion };
export default MessageSquareQuestion;
