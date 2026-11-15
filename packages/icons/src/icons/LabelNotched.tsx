import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LabelNotchedRegular } from './LabelNotchedRegular.js';
import { LabelNotchedRegularDuotone } from './LabelNotchedRegularDuotone.js';
import { LabelNotchedBold } from './LabelNotchedBold.js';
import { LabelNotchedBoldDuotone } from './LabelNotchedBoldDuotone.js';
import { LabelNotchedFill } from './LabelNotchedFill.js';
import { LabelNotchedFillDuotone } from './LabelNotchedFillDuotone.js';

export interface LabelNotchedProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LabelNotched - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LabelNotchedRegular } from 'stera-icons/icons/LabelNotchedRegular';
 */
const LabelNotched = memo(forwardRef<SVGSVGElement, LabelNotchedProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <LabelNotchedBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LabelNotchedBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LabelNotchedFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LabelNotchedFill ref={ref} {...rest} />;
  if (duotone) return <LabelNotchedRegularDuotone ref={ref} {...rest} />;
  return <LabelNotchedRegular ref={ref} {...rest} />;
}));

LabelNotched.displayName = 'LabelNotched';

// Triple export pattern
export { LabelNotched, LabelNotched as LabelNotchedIcon, LabelNotched as SiLabelNotched };
export default LabelNotched;
