import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CrownRegular } from './CrownRegular.js';
import { CrownRegularDuotone } from './CrownRegularDuotone.js';
import { CrownBold } from './CrownBold.js';
import { CrownBoldDuotone } from './CrownBoldDuotone.js';
import { CrownFill } from './CrownFill.js';
import { CrownFillDuotone } from './CrownFillDuotone.js';

export interface CrownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Crown - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CrownRegular } from 'stera-icons/icons/CrownRegular';
 */
const Crown = memo(forwardRef<SVGSVGElement, CrownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CrownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CrownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CrownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CrownFill ref={ref} {...rest} />;
  if (duotone) return <CrownRegularDuotone ref={ref} {...rest} />;
  return <CrownRegular ref={ref} {...rest} />;
}));

Crown.displayName = 'Crown';

// Triple export pattern (lucide-react style)
export { Crown, Crown as CrownIcon, Crown as SiCrown };
export default Crown;
