import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageSquarePlusRegular } from './MessageSquarePlusRegular.js';
import { MessageSquarePlusRegularDuotone } from './MessageSquarePlusRegularDuotone.js';
import { MessageSquarePlusBold } from './MessageSquarePlusBold.js';
import { MessageSquarePlusBoldDuotone } from './MessageSquarePlusBoldDuotone.js';
import { MessageSquarePlusFill } from './MessageSquarePlusFill.js';
import { MessageSquarePlusFillDuotone } from './MessageSquarePlusFillDuotone.js';

export interface MessageSquarePlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageSquarePlus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageSquarePlusRegular } from 'stera-icons/icons/MessageSquarePlusRegular';
 */
const MessageSquarePlus = memo(forwardRef<SVGSVGElement, MessageSquarePlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageSquarePlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageSquarePlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageSquarePlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageSquarePlusFill ref={ref} {...rest} />;
  if (duotone) return <MessageSquarePlusRegularDuotone ref={ref} {...rest} />;
  return <MessageSquarePlusRegular ref={ref} {...rest} />;
}));

MessageSquarePlus.displayName = 'MessageSquarePlus';

// Triple export pattern (lucide-react style)
export { MessageSquarePlus, MessageSquarePlus as MessageSquarePlusIcon, MessageSquarePlus as SiMessageSquarePlus };
export default MessageSquarePlus;
