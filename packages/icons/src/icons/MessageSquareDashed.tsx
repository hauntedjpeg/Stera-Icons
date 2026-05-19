import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageSquareDashedRegular } from './MessageSquareDashedRegular.js';
import { MessageSquareDashedRegularDuotone } from './MessageSquareDashedRegularDuotone.js';
import { MessageSquareDashedBold } from './MessageSquareDashedBold.js';
import { MessageSquareDashedBoldDuotone } from './MessageSquareDashedBoldDuotone.js';
import { MessageSquareDashedFill } from './MessageSquareDashedFill.js';
import { MessageSquareDashedFillDuotone } from './MessageSquareDashedFillDuotone.js';

export interface MessageSquareDashedProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageSquareDashed - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageSquareDashedRegular } from 'stera-icons/icons/MessageSquareDashedRegular';
 */
const MessageSquareDashed = memo(forwardRef<SVGSVGElement, MessageSquareDashedProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageSquareDashedBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageSquareDashedBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageSquareDashedFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageSquareDashedFill ref={ref} {...rest} />;
  if (duotone) return <MessageSquareDashedRegularDuotone ref={ref} {...rest} />;
  return <MessageSquareDashedRegular ref={ref} {...rest} />;
}));

MessageSquareDashed.displayName = 'MessageSquareDashed';

// Triple export pattern (lucide-react style)
export { MessageSquareDashed, MessageSquareDashed as MessageSquareDashedIcon, MessageSquareDashed as SiMessageSquareDashed };
export default MessageSquareDashed;
