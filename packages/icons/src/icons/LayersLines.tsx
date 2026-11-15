import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LayersLinesRegular } from './LayersLinesRegular.js';
import { LayersLinesRegularDuotone } from './LayersLinesRegularDuotone.js';
import { LayersLinesBold } from './LayersLinesBold.js';
import { LayersLinesBoldDuotone } from './LayersLinesBoldDuotone.js';
import { LayersLinesFill } from './LayersLinesFill.js';
import { LayersLinesFillDuotone } from './LayersLinesFillDuotone.js';

export interface LayersLinesProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LayersLines - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LayersLinesRegular } from 'stera-icons/icons/LayersLinesRegular';
 */
const LayersLines = memo(forwardRef<SVGSVGElement, LayersLinesProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <LayersLinesBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LayersLinesBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LayersLinesFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LayersLinesFill ref={ref} {...rest} />;
  if (duotone) return <LayersLinesRegularDuotone ref={ref} {...rest} />;
  return <LayersLinesRegular ref={ref} {...rest} />;
}));

LayersLines.displayName = 'LayersLines';

// Triple export pattern
export { LayersLines, LayersLines as LayersLinesIcon, LayersLines as SiLayersLines };
export default LayersLines;
