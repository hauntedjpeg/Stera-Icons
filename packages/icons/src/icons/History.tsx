import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { HistoryRegular } from './HistoryRegular.js';
import { HistoryRegularDuotone } from './HistoryRegularDuotone.js';
import { HistoryBold } from './HistoryBold.js';
import { HistoryBoldDuotone } from './HistoryBoldDuotone.js';
import { HistoryFill } from './HistoryFill.js';
import { HistoryFillDuotone } from './HistoryFillDuotone.js';

export interface HistoryProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * History - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HistoryRegular } from 'stera-icons/icons/HistoryRegular';
 */
const History = memo(forwardRef<SVGSVGElement, HistoryProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HistoryBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HistoryBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HistoryFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HistoryFill ref={ref} {...rest} />;
  if (duotone) return <HistoryRegularDuotone ref={ref} {...rest} />;
  return <HistoryRegular ref={ref} {...rest} />;
}));

History.displayName = 'History';

// Triple export pattern (lucide-react style)
export { History, History as HistoryIcon, History as SiHistory };
export default History;
