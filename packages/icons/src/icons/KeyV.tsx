import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { KeyVRegular } from './KeyVRegular.js';
import { KeyVRegularDuotone } from './KeyVRegularDuotone.js';
import { KeyVBold } from './KeyVBold.js';
import { KeyVBoldDuotone } from './KeyVBoldDuotone.js';
import { KeyVFill } from './KeyVFill.js';
import { KeyVFillDuotone } from './KeyVFillDuotone.js';

export interface KeyVProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * KeyV - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { KeyVRegular } from 'stera-icons/icons/KeyVRegular';
 */
const KeyV = memo(forwardRef<SVGSVGElement, KeyVProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <KeyVBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <KeyVBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <KeyVFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <KeyVFill ref={ref} {...rest} />;
  if (duotone) return <KeyVRegularDuotone ref={ref} {...rest} />;
  return <KeyVRegular ref={ref} {...rest} />;
}));

KeyV.displayName = 'KeyV';

// Triple export pattern (lucide-react style)
export { KeyV, KeyV as KeyVIcon, KeyV as SiKeyV };
export default KeyV;
