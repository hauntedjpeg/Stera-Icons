import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AsteriskSerifRegular } from './AsteriskSerifRegular.js';
import { AsteriskSerifRegularDuotone } from './AsteriskSerifRegularDuotone.js';
import { AsteriskSerifBold } from './AsteriskSerifBold.js';
import { AsteriskSerifBoldDuotone } from './AsteriskSerifBoldDuotone.js';
import { AsteriskSerifFill } from './AsteriskSerifFill.js';
import { AsteriskSerifFillDuotone } from './AsteriskSerifFillDuotone.js';

export interface AsteriskSerifProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AsteriskSerif - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AsteriskSerifRegular } from 'stera-icons/icons/AsteriskSerifRegular';
 */
const AsteriskSerif = memo(forwardRef<SVGSVGElement, AsteriskSerifProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <AsteriskSerifBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AsteriskSerifBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AsteriskSerifFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AsteriskSerifFill ref={ref} {...rest} />;
  if (duotone) return <AsteriskSerifRegularDuotone ref={ref} {...rest} />;
  return <AsteriskSerifRegular ref={ref} {...rest} />;
}));

AsteriskSerif.displayName = 'AsteriskSerif';

// Triple export pattern
export { AsteriskSerif, AsteriskSerif as AsteriskSerifIcon, AsteriskSerif as SiAsteriskSerif };
export default AsteriskSerif;
