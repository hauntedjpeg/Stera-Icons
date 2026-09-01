import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { KeyHRegular } from './KeyHRegular.js';
import { KeyHRegularDuotone } from './KeyHRegularDuotone.js';
import { KeyHBold } from './KeyHBold.js';
import { KeyHBoldDuotone } from './KeyHBoldDuotone.js';
import { KeyHFill } from './KeyHFill.js';
import { KeyHFillDuotone } from './KeyHFillDuotone.js';

export interface KeyHProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * KeyH - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { KeyHRegular } from 'stera-icons/icons/KeyHRegular';
 */
const KeyH = memo(forwardRef<SVGSVGElement, KeyHProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <KeyHBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <KeyHBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <KeyHFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <KeyHFill ref={ref} {...rest} />;
  if (duotone) return <KeyHRegularDuotone ref={ref} {...rest} />;
  return <KeyHRegular ref={ref} {...rest} />;
}));

KeyH.displayName = 'KeyH';

// Triple export pattern (lucide-react style)
export { KeyH, KeyH as KeyHIcon, KeyH as SiKeyH };
export default KeyH;
