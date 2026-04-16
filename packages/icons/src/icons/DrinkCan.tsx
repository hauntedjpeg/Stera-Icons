import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { DrinkCanRegular } from './DrinkCanRegular.js';
import { DrinkCanRegularDuotone } from './DrinkCanRegularDuotone.js';
import { DrinkCanBold } from './DrinkCanBold.js';
import { DrinkCanBoldDuotone } from './DrinkCanBoldDuotone.js';
import { DrinkCanFill } from './DrinkCanFill.js';
import { DrinkCanFillDuotone } from './DrinkCanFillDuotone.js';

export interface DrinkCanProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * DrinkCan - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DrinkCanRegular } from 'stera-icons/icons/DrinkCanRegular';
 */
const DrinkCan = memo(forwardRef<SVGSVGElement, DrinkCanProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DrinkCanBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DrinkCanBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DrinkCanFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DrinkCanFill ref={ref} {...rest} />;
  if (duotone) return <DrinkCanRegularDuotone ref={ref} {...rest} />;
  return <DrinkCanRegular ref={ref} {...rest} />;
}));

DrinkCan.displayName = 'DrinkCan';

// Triple export pattern (lucide-react style)
export { DrinkCan, DrinkCan as DrinkCanIcon, DrinkCan as SiDrinkCan };
export default DrinkCan;
