import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BinaryRegular } from './BinaryRegular.js';
import { BinaryRegularDuotone } from './BinaryRegularDuotone.js';
import { BinaryBold } from './BinaryBold.js';
import { BinaryBoldDuotone } from './BinaryBoldDuotone.js';
import { BinaryFill } from './BinaryFill.js';
import { BinaryFillDuotone } from './BinaryFillDuotone.js';

export interface BinaryProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Binary - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BinaryRegular } from 'stera-icons/icons/BinaryRegular';
 */
const Binary = memo(forwardRef<SVGSVGElement, BinaryProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BinaryBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BinaryBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BinaryFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BinaryFill ref={ref} {...rest} />;
  if (duotone) return <BinaryRegularDuotone ref={ref} {...rest} />;
  return <BinaryRegular ref={ref} {...rest} />;
}));

Binary.displayName = 'Binary';

// Triple export pattern (lucide-react style)
export { Binary, Binary as BinaryIcon, Binary as SiBinary };
export default Binary;
