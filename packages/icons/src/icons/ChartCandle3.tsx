import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChartCandle3Regular } from './ChartCandle3Regular.js';
import { ChartCandle3RegularDuotone } from './ChartCandle3RegularDuotone.js';
import { ChartCandle3Bold } from './ChartCandle3Bold.js';
import { ChartCandle3BoldDuotone } from './ChartCandle3BoldDuotone.js';
import { ChartCandle3Fill } from './ChartCandle3Fill.js';
import { ChartCandle3FillDuotone } from './ChartCandle3FillDuotone.js';

export interface ChartCandle3Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartCandle3 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartCandle3Regular } from 'stera-icons/icons/ChartCandle3Regular';
 */
const ChartCandle3 = memo(forwardRef<SVGSVGElement, ChartCandle3Props>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartCandle3BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartCandle3Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartCandle3FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartCandle3Fill ref={ref} {...rest} />;
  if (duotone) return <ChartCandle3RegularDuotone ref={ref} {...rest} />;
  return <ChartCandle3Regular ref={ref} {...rest} />;
}));

ChartCandle3.displayName = 'ChartCandle3';

// Triple export pattern
export { ChartCandle3, ChartCandle3 as ChartCandle3Icon, ChartCandle3 as SiChartCandle3 };
export default ChartCandle3;
