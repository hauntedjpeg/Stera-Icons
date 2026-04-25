import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CaseSensitiveRegular } from './CaseSensitiveRegular.js';
import { CaseSensitiveRegularDuotone } from './CaseSensitiveRegularDuotone.js';
import { CaseSensitiveBold } from './CaseSensitiveBold.js';
import { CaseSensitiveBoldDuotone } from './CaseSensitiveBoldDuotone.js';
import { CaseSensitiveFill } from './CaseSensitiveFill.js';
import { CaseSensitiveFillDuotone } from './CaseSensitiveFillDuotone.js';

export interface CaseSensitiveProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CaseSensitive - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CaseSensitiveRegular } from 'stera-icons/icons/CaseSensitiveRegular';
 */
const CaseSensitive = memo(forwardRef<SVGSVGElement, CaseSensitiveProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CaseSensitiveBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CaseSensitiveBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CaseSensitiveFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CaseSensitiveFill ref={ref} {...rest} />;
  if (duotone) return <CaseSensitiveRegularDuotone ref={ref} {...rest} />;
  return <CaseSensitiveRegular ref={ref} {...rest} />;
}));

CaseSensitive.displayName = 'CaseSensitive';

// Triple export pattern (lucide-react style)
export { CaseSensitive, CaseSensitive as CaseSensitiveIcon, CaseSensitive as SiCaseSensitive };
export default CaseSensitive;
