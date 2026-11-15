import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ExpandSimpleMirroredRegular } from './ExpandSimpleMirroredRegular.js';
import { ExpandSimpleMirroredRegularDuotone } from './ExpandSimpleMirroredRegularDuotone.js';
import { ExpandSimpleMirroredBold } from './ExpandSimpleMirroredBold.js';
import { ExpandSimpleMirroredBoldDuotone } from './ExpandSimpleMirroredBoldDuotone.js';
import { ExpandSimpleMirroredFill } from './ExpandSimpleMirroredFill.js';
import { ExpandSimpleMirroredFillDuotone } from './ExpandSimpleMirroredFillDuotone.js';

export interface ExpandSimpleMirroredProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ExpandSimpleMirrored - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ExpandSimpleMirroredRegular } from 'stera-icons/icons/ExpandSimpleMirroredRegular';
 */
const ExpandSimpleMirrored = memo(forwardRef<SVGSVGElement, ExpandSimpleMirroredProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ExpandSimpleMirroredBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ExpandSimpleMirroredBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ExpandSimpleMirroredFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ExpandSimpleMirroredFill ref={ref} {...rest} />;
  if (duotone) return <ExpandSimpleMirroredRegularDuotone ref={ref} {...rest} />;
  return <ExpandSimpleMirroredRegular ref={ref} {...rest} />;
}));

ExpandSimpleMirrored.displayName = 'ExpandSimpleMirrored';

// Triple export pattern
export { ExpandSimpleMirrored, ExpandSimpleMirrored as ExpandSimpleMirroredIcon, ExpandSimpleMirrored as SiExpandSimpleMirrored };
export default ExpandSimpleMirrored;
