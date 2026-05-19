import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageCircleQuestionRegular } from './MessageCircleQuestionRegular.js';
import { MessageCircleQuestionRegularDuotone } from './MessageCircleQuestionRegularDuotone.js';
import { MessageCircleQuestionBold } from './MessageCircleQuestionBold.js';
import { MessageCircleQuestionBoldDuotone } from './MessageCircleQuestionBoldDuotone.js';
import { MessageCircleQuestionFill } from './MessageCircleQuestionFill.js';
import { MessageCircleQuestionFillDuotone } from './MessageCircleQuestionFillDuotone.js';

export interface MessageCircleQuestionProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageCircleQuestion - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageCircleQuestionRegular } from 'stera-icons/icons/MessageCircleQuestionRegular';
 */
const MessageCircleQuestion = memo(forwardRef<SVGSVGElement, MessageCircleQuestionProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageCircleQuestionBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageCircleQuestionBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageCircleQuestionFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageCircleQuestionFill ref={ref} {...rest} />;
  if (duotone) return <MessageCircleQuestionRegularDuotone ref={ref} {...rest} />;
  return <MessageCircleQuestionRegular ref={ref} {...rest} />;
}));

MessageCircleQuestion.displayName = 'MessageCircleQuestion';

// Triple export pattern (lucide-react style)
export { MessageCircleQuestion, MessageCircleQuestion as MessageCircleQuestionIcon, MessageCircleQuestion as SiMessageCircleQuestion };
export default MessageCircleQuestion;
