import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CherryRegular } from './CherryRegular.js';
import { CherryRegularDuotone } from './CherryRegularDuotone.js';
import { CherryBold } from './CherryBold.js';
import { CherryBoldDuotone } from './CherryBoldDuotone.js';
import { CherryFill } from './CherryFill.js';
import { CherryFillDuotone } from './CherryFillDuotone.js';

export interface CherryProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Cherry - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CherryRegular } from 'stera-icons/icons/CherryRegular';
 */
const Cherry = memo(forwardRef<SVGSVGElement, CherryProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CherryBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CherryBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CherryFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CherryFill ref={ref} {...rest} />;
  if (duotone) return <CherryRegularDuotone ref={ref} {...rest} />;
  return <CherryRegular ref={ref} {...rest} />;
}));

Cherry.displayName = 'Cherry';

// Triple export pattern (lucide-react style)
export { Cherry, Cherry as CherryIcon, Cherry as SiCherry };
export default Cherry;
