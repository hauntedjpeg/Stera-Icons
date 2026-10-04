import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { HardDriveRegular } from './HardDriveRegular.js';
import { HardDriveRegularDuotone } from './HardDriveRegularDuotone.js';
import { HardDriveBold } from './HardDriveBold.js';
import { HardDriveBoldDuotone } from './HardDriveBoldDuotone.js';
import { HardDriveFill } from './HardDriveFill.js';
import { HardDriveFillDuotone } from './HardDriveFillDuotone.js';

export interface HardDriveProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * HardDrive - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HardDriveRegular } from 'stera-icons/icons/HardDriveRegular';
 */
const HardDrive = memo(forwardRef<SVGSVGElement, HardDriveProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HardDriveBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HardDriveBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HardDriveFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HardDriveFill ref={ref} {...rest} />;
  if (duotone) return <HardDriveRegularDuotone ref={ref} {...rest} />;
  return <HardDriveRegular ref={ref} {...rest} />;
}));

HardDrive.displayName = 'HardDrive';

// Triple export pattern (lucide-react style)
export { HardDrive, HardDrive as HardDriveIcon, HardDrive as SiHardDrive };
export default HardDrive;
