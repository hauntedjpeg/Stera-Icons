import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageCircleDotsRegular } from './MessageCircleDotsRegular.js';
import { MessageCircleDotsRegularDuotone } from './MessageCircleDotsRegularDuotone.js';
import { MessageCircleDotsBold } from './MessageCircleDotsBold.js';
import { MessageCircleDotsBoldDuotone } from './MessageCircleDotsBoldDuotone.js';
import { MessageCircleDotsFill } from './MessageCircleDotsFill.js';
import { MessageCircleDotsFillDuotone } from './MessageCircleDotsFillDuotone.js';

export interface MessageCircleDotsProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageCircleDots - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageCircleDotsRegular } from 'stera-icons/icons/MessageCircleDotsRegular';
 */
const MessageCircleDots = memo(forwardRef<SVGSVGElement, MessageCircleDotsProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageCircleDotsBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageCircleDotsBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageCircleDotsFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageCircleDotsFill ref={ref} {...rest} />;
  if (duotone) return <MessageCircleDotsRegularDuotone ref={ref} {...rest} />;
  return <MessageCircleDotsRegular ref={ref} {...rest} />;
}));

MessageCircleDots.displayName = 'MessageCircleDots';

// Triple export pattern (lucide-react style)
export { MessageCircleDots, MessageCircleDots as MessageCircleDotsIcon, MessageCircleDots as SiMessageCircleDots };
export default MessageCircleDots;
