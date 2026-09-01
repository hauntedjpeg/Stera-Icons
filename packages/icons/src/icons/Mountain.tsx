import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MountainRegular } from './MountainRegular.js';
import { MountainRegularDuotone } from './MountainRegularDuotone.js';
import { MountainBold } from './MountainBold.js';
import { MountainBoldDuotone } from './MountainBoldDuotone.js';
import { MountainFill } from './MountainFill.js';
import { MountainFillDuotone } from './MountainFillDuotone.js';

export interface MountainProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Mountain - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MountainRegular } from 'stera-icons/icons/MountainRegular';
 */
const Mountain = memo(forwardRef<SVGSVGElement, MountainProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MountainBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MountainBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MountainFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MountainFill ref={ref} {...rest} />;
  if (duotone) return <MountainRegularDuotone ref={ref} {...rest} />;
  return <MountainRegular ref={ref} {...rest} />;
}));

Mountain.displayName = 'Mountain';

// Triple export pattern (lucide-react style)
export { Mountain, Mountain as MountainIcon, Mountain as SiMountain };
export default Mountain;
