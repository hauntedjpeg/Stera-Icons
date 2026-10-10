import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CentRegular } from './CentRegular.js';
import { CentRegularDuotone } from './CentRegularDuotone.js';
import { CentBold } from './CentBold.js';
import { CentBoldDuotone } from './CentBoldDuotone.js';
import { CentFill } from './CentFill.js';
import { CentFillDuotone } from './CentFillDuotone.js';

export interface CentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Cent - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CentRegular } from 'stera-icons/icons/CentRegular';
 */
const Cent = memo(forwardRef<SVGSVGElement, CentProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <CentBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CentBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CentFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CentFill ref={ref} {...rest} />;
  if (duotone) return <CentRegularDuotone ref={ref} {...rest} />;
  return <CentRegular ref={ref} {...rest} />;
}));

Cent.displayName = 'Cent';

// Triple export pattern
export { Cent, Cent as CentIcon, Cent as SiCent };
export default Cent;
