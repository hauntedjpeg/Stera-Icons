import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageSquareDotRegular } from './MessageSquareDotRegular.js';
import { MessageSquareDotRegularDuotone } from './MessageSquareDotRegularDuotone.js';
import { MessageSquareDotBold } from './MessageSquareDotBold.js';
import { MessageSquareDotBoldDuotone } from './MessageSquareDotBoldDuotone.js';
import { MessageSquareDotFill } from './MessageSquareDotFill.js';
import { MessageSquareDotFillDuotone } from './MessageSquareDotFillDuotone.js';

export interface MessageSquareDotProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageSquareDot - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageSquareDotRegular } from 'stera-icons/icons/MessageSquareDotRegular';
 */
const MessageSquareDot = memo(forwardRef<SVGSVGElement, MessageSquareDotProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageSquareDotBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageSquareDotBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageSquareDotFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageSquareDotFill ref={ref} {...rest} />;
  if (duotone) return <MessageSquareDotRegularDuotone ref={ref} {...rest} />;
  return <MessageSquareDotRegular ref={ref} {...rest} />;
}));

MessageSquareDot.displayName = 'MessageSquareDot';

// Triple export pattern (lucide-react style)
export { MessageSquareDot, MessageSquareDot as MessageSquareDotIcon, MessageSquareDot as SiMessageSquareDot };
export default MessageSquareDot;
