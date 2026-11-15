import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CollapseSimpleMirroredRegular } from './CollapseSimpleMirroredRegular.js';
import { CollapseSimpleMirroredRegularDuotone } from './CollapseSimpleMirroredRegularDuotone.js';
import { CollapseSimpleMirroredBold } from './CollapseSimpleMirroredBold.js';
import { CollapseSimpleMirroredBoldDuotone } from './CollapseSimpleMirroredBoldDuotone.js';
import { CollapseSimpleMirroredFill } from './CollapseSimpleMirroredFill.js';
import { CollapseSimpleMirroredFillDuotone } from './CollapseSimpleMirroredFillDuotone.js';

export interface CollapseSimpleMirroredProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CollapseSimpleMirrored - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CollapseSimpleMirroredRegular } from 'stera-icons/icons/CollapseSimpleMirroredRegular';
 */
const CollapseSimpleMirrored = memo(forwardRef<SVGSVGElement, CollapseSimpleMirroredProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <CollapseSimpleMirroredBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CollapseSimpleMirroredBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CollapseSimpleMirroredFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CollapseSimpleMirroredFill ref={ref} {...rest} />;
  if (duotone) return <CollapseSimpleMirroredRegularDuotone ref={ref} {...rest} />;
  return <CollapseSimpleMirroredRegular ref={ref} {...rest} />;
}));

CollapseSimpleMirrored.displayName = 'CollapseSimpleMirrored';

// Triple export pattern
export { CollapseSimpleMirrored, CollapseSimpleMirrored as CollapseSimpleMirroredIcon, CollapseSimpleMirrored as SiCollapseSimpleMirrored };
export default CollapseSimpleMirrored;
