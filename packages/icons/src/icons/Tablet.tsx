import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { TabletRegular } from './TabletRegular.js';
import { TabletRegularDuotone } from './TabletRegularDuotone.js';
import { TabletBold } from './TabletBold.js';
import { TabletBoldDuotone } from './TabletBoldDuotone.js';
import { TabletFill } from './TabletFill.js';
import { TabletFillDuotone } from './TabletFillDuotone.js';

export interface TabletProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Tablet - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TabletRegular } from 'stera-icons/icons/TabletRegular';
 */
const Tablet = memo(forwardRef<SVGSVGElement, TabletProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TabletBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TabletBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TabletFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TabletFill ref={ref} {...rest} />;
  if (duotone) return <TabletRegularDuotone ref={ref} {...rest} />;
  return <TabletRegular ref={ref} {...rest} />;
}));

Tablet.displayName = 'Tablet';

// Triple export pattern (lucide-react style)
export { Tablet, Tablet as TabletIcon, Tablet as SiTablet };
export default Tablet;
