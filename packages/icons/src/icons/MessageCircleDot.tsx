import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MessageCircleDotRegular } from './MessageCircleDotRegular.js';
import { MessageCircleDotRegularDuotone } from './MessageCircleDotRegularDuotone.js';
import { MessageCircleDotBold } from './MessageCircleDotBold.js';
import { MessageCircleDotBoldDuotone } from './MessageCircleDotBoldDuotone.js';
import { MessageCircleDotFill } from './MessageCircleDotFill.js';
import { MessageCircleDotFillDuotone } from './MessageCircleDotFillDuotone.js';

export interface MessageCircleDotProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MessageCircleDot - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MessageCircleDotRegular } from 'stera-icons/icons/MessageCircleDotRegular';
 */
const MessageCircleDot = memo(forwardRef<SVGSVGElement, MessageCircleDotProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MessageCircleDotBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MessageCircleDotBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MessageCircleDotFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MessageCircleDotFill ref={ref} {...rest} />;
  if (duotone) return <MessageCircleDotRegularDuotone ref={ref} {...rest} />;
  return <MessageCircleDotRegular ref={ref} {...rest} />;
}));

MessageCircleDot.displayName = 'MessageCircleDot';

// Triple export pattern (lucide-react style)
export { MessageCircleDot, MessageCircleDot as MessageCircleDotIcon, MessageCircleDot as SiMessageCircleDot };
export default MessageCircleDot;
