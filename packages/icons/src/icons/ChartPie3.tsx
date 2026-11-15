import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChartPie3Regular } from './ChartPie3Regular.js';
import { ChartPie3RegularDuotone } from './ChartPie3RegularDuotone.js';
import { ChartPie3Bold } from './ChartPie3Bold.js';
import { ChartPie3BoldDuotone } from './ChartPie3BoldDuotone.js';
import { ChartPie3Fill } from './ChartPie3Fill.js';
import { ChartPie3FillDuotone } from './ChartPie3FillDuotone.js';

export interface ChartPie3Props extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartPie3 - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartPie3Regular } from 'stera-icons/icons/ChartPie3Regular';
 */
const ChartPie3 = memo(forwardRef<SVGSVGElement, ChartPie3Props>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartPie3BoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartPie3Bold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartPie3FillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartPie3Fill ref={ref} {...rest} />;
  if (duotone) return <ChartPie3RegularDuotone ref={ref} {...rest} />;
  return <ChartPie3Regular ref={ref} {...rest} />;
}));

ChartPie3.displayName = 'ChartPie3';

// Triple export pattern
export { ChartPie3, ChartPie3 as ChartPie3Icon, ChartPie3 as SiChartPie3 };
export default ChartPie3;
