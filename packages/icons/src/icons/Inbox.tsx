import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { InboxRegular } from './InboxRegular.js';
import { InboxRegularDuotone } from './InboxRegularDuotone.js';
import { InboxBold } from './InboxBold.js';
import { InboxBoldDuotone } from './InboxBoldDuotone.js';
import { InboxFill } from './InboxFill.js';
import { InboxFillDuotone } from './InboxFillDuotone.js';

export interface InboxProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Inbox - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { InboxRegular } from 'stera-icons/icons/InboxRegular';
 */
const Inbox = memo(forwardRef<SVGSVGElement, InboxProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <InboxBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <InboxBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <InboxFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <InboxFill ref={ref} {...rest} />;
  if (duotone) return <InboxRegularDuotone ref={ref} {...rest} />;
  return <InboxRegular ref={ref} {...rest} />;
}));

Inbox.displayName = 'Inbox';

// Triple export pattern (lucide-react style)
export { Inbox, Inbox as InboxIcon, Inbox as SiInbox };
export default Inbox;
