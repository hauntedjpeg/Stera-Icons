import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SparklesTwinRegular } from './SparklesTwinRegular.js';
import { SparklesTwinRegularDuotone } from './SparklesTwinRegularDuotone.js';
import { SparklesTwinBold } from './SparklesTwinBold.js';
import { SparklesTwinBoldDuotone } from './SparklesTwinBoldDuotone.js';
import { SparklesTwinFill } from './SparklesTwinFill.js';
import { SparklesTwinFillDuotone } from './SparklesTwinFillDuotone.js';

export interface SparklesTwinProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SparklesTwin - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SparklesTwinRegular } from 'stera-icons/icons/SparklesTwinRegular';
 */
const SparklesTwin = memo(forwardRef<SVGSVGElement, SparklesTwinProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <SparklesTwinBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SparklesTwinBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SparklesTwinFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SparklesTwinFill ref={ref} {...rest} />;
  if (duotone) return <SparklesTwinRegularDuotone ref={ref} {...rest} />;
  return <SparklesTwinRegular ref={ref} {...rest} />;
}));

SparklesTwin.displayName = 'SparklesTwin';

// Triple export pattern
export { SparklesTwin, SparklesTwin as SparklesTwinIcon, SparklesTwin as SiSparklesTwin };
export default SparklesTwin;
