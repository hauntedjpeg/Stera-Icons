import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageCirclePlusRegular } from './MessageCirclePlusRegular.js';
import { MessageCirclePlusRegularDuotone } from './MessageCirclePlusRegularDuotone.js';
import { MessageCirclePlusBold } from './MessageCirclePlusBold.js';
import { MessageCirclePlusBoldDuotone } from './MessageCirclePlusBoldDuotone.js';
import { MessageCirclePlusFill } from './MessageCirclePlusFill.js';
import { MessageCirclePlusFillDuotone } from './MessageCirclePlusFillDuotone.js';

export interface MessageCirclePlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageCirclePlus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageCirclePlusRegular } from 'stera-icons/icons/MessageCirclePlusRegular';
 */
const MessageCirclePlus = memo(forwardRef<SVGSVGElement, MessageCirclePlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageCirclePlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageCirclePlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageCirclePlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageCirclePlusFill ref={ref} {...rest} />;
  if (duotone) return <MessageCirclePlusRegularDuotone ref={ref} {...rest} />;
  return <MessageCirclePlusRegular ref={ref} {...rest} />;
}));

MessageCirclePlus.displayName = 'MessageCirclePlus';

// Triple export pattern (lucide-react style)
export { MessageCirclePlus, MessageCirclePlus as MessageCirclePlusIcon, MessageCirclePlus as SiMessageCirclePlus };
export default MessageCirclePlus;
