import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageCircleDashedRegular } from './MessageCircleDashedRegular.js';
import { MessageCircleDashedRegularDuotone } from './MessageCircleDashedRegularDuotone.js';
import { MessageCircleDashedBold } from './MessageCircleDashedBold.js';
import { MessageCircleDashedBoldDuotone } from './MessageCircleDashedBoldDuotone.js';
import { MessageCircleDashedFill } from './MessageCircleDashedFill.js';
import { MessageCircleDashedFillDuotone } from './MessageCircleDashedFillDuotone.js';

export interface MessageCircleDashedProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageCircleDashed - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageCircleDashedRegular } from 'stera-icons/icons/MessageCircleDashedRegular';
 */
const MessageCircleDashed = memo(forwardRef<SVGSVGElement, MessageCircleDashedProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageCircleDashedBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageCircleDashedBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageCircleDashedFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageCircleDashedFill ref={ref} {...rest} />;
  if (duotone) return <MessageCircleDashedRegularDuotone ref={ref} {...rest} />;
  return <MessageCircleDashedRegular ref={ref} {...rest} />;
}));

MessageCircleDashed.displayName = 'MessageCircleDashed';

// Triple export pattern (lucide-react style)
export { MessageCircleDashed, MessageCircleDashed as MessageCircleDashedIcon, MessageCircleDashed as SiMessageCircleDashed };
export default MessageCircleDashed;
