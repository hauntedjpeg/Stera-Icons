import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageSquareDotsRegular } from './MessageSquareDotsRegular.js';
import { MessageSquareDotsRegularDuotone } from './MessageSquareDotsRegularDuotone.js';
import { MessageSquareDotsBold } from './MessageSquareDotsBold.js';
import { MessageSquareDotsBoldDuotone } from './MessageSquareDotsBoldDuotone.js';
import { MessageSquareDotsFill } from './MessageSquareDotsFill.js';
import { MessageSquareDotsFillDuotone } from './MessageSquareDotsFillDuotone.js';

export interface MessageSquareDotsProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageSquareDots - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageSquareDotsRegular } from 'stera-icons/icons/MessageSquareDotsRegular';
 */
const MessageSquareDots = memo(forwardRef<SVGSVGElement, MessageSquareDotsProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageSquareDotsBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageSquareDotsBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageSquareDotsFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageSquareDotsFill ref={ref} {...rest} />;
  if (duotone) return <MessageSquareDotsRegularDuotone ref={ref} {...rest} />;
  return <MessageSquareDotsRegular ref={ref} {...rest} />;
}));

MessageSquareDots.displayName = 'MessageSquareDots';

// Triple export pattern (lucide-react style)
export { MessageSquareDots, MessageSquareDots as MessageSquareDotsIcon, MessageSquareDots as SiMessageSquareDots };
export default MessageSquareDots;
