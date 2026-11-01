import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MonitorSmartphoneRegular } from './MonitorSmartphoneRegular.js';
import { MonitorSmartphoneRegularDuotone } from './MonitorSmartphoneRegularDuotone.js';
import { MonitorSmartphoneBold } from './MonitorSmartphoneBold.js';
import { MonitorSmartphoneBoldDuotone } from './MonitorSmartphoneBoldDuotone.js';
import { MonitorSmartphoneFill } from './MonitorSmartphoneFill.js';
import { MonitorSmartphoneFillDuotone } from './MonitorSmartphoneFillDuotone.js';

export interface MonitorSmartphoneProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MonitorSmartphone - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MonitorSmartphoneRegular } from 'stera-icons/icons/MonitorSmartphoneRegular';
 */
const MonitorSmartphone = memo(forwardRef<SVGSVGElement, MonitorSmartphoneProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <MonitorSmartphoneBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MonitorSmartphoneBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MonitorSmartphoneFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MonitorSmartphoneFill ref={ref} {...rest} />;
  if (duotone) return <MonitorSmartphoneRegularDuotone ref={ref} {...rest} />;
  return <MonitorSmartphoneRegular ref={ref} {...rest} />;
}));

MonitorSmartphone.displayName = 'MonitorSmartphone';

// Triple export pattern
export { MonitorSmartphone, MonitorSmartphone as MonitorSmartphoneIcon, MonitorSmartphone as SiMonitorSmartphone };
export default MonitorSmartphone;
