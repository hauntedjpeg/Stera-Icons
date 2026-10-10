import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MonitorRegular } from './MonitorRegular.js';
import { MonitorRegularDuotone } from './MonitorRegularDuotone.js';
import { MonitorBold } from './MonitorBold.js';
import { MonitorBoldDuotone } from './MonitorBoldDuotone.js';
import { MonitorFill } from './MonitorFill.js';
import { MonitorFillDuotone } from './MonitorFillDuotone.js';

export interface MonitorProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Monitor - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MonitorRegular } from 'stera-icons/icons/MonitorRegular';
 */
const Monitor = memo(forwardRef<SVGSVGElement, MonitorProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <MonitorBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MonitorBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MonitorFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MonitorFill ref={ref} {...rest} />;
  if (duotone) return <MonitorRegularDuotone ref={ref} {...rest} />;
  return <MonitorRegular ref={ref} {...rest} />;
}));

Monitor.displayName = 'Monitor';

// Triple export pattern
export { Monitor, Monitor as MonitorIcon, Monitor as SiMonitor };
export default Monitor;
