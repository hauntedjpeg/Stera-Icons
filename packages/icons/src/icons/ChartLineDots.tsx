import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChartLineDotsRegular } from './ChartLineDotsRegular.js';
import { ChartLineDotsRegularDuotone } from './ChartLineDotsRegularDuotone.js';
import { ChartLineDotsBold } from './ChartLineDotsBold.js';
import { ChartLineDotsBoldDuotone } from './ChartLineDotsBoldDuotone.js';
import { ChartLineDotsFill } from './ChartLineDotsFill.js';
import { ChartLineDotsFillDuotone } from './ChartLineDotsFillDuotone.js';

export interface ChartLineDotsProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartLineDots - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartLineDotsRegular } from 'stera-icons/icons/ChartLineDotsRegular';
 */
const ChartLineDots = memo(forwardRef<SVGSVGElement, ChartLineDotsProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartLineDotsBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartLineDotsBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartLineDotsFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartLineDotsFill ref={ref} {...rest} />;
  if (duotone) return <ChartLineDotsRegularDuotone ref={ref} {...rest} />;
  return <ChartLineDotsRegular ref={ref} {...rest} />;
}));

ChartLineDots.displayName = 'ChartLineDots';

// Triple export pattern
export { ChartLineDots, ChartLineDots as ChartLineDotsIcon, ChartLineDots as SiChartLineDots };
export default ChartLineDots;
