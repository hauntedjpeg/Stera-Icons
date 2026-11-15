import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MenuSimpleStaggeredRegular } from './MenuSimpleStaggeredRegular.js';
import { MenuSimpleStaggeredRegularDuotone } from './MenuSimpleStaggeredRegularDuotone.js';
import { MenuSimpleStaggeredBold } from './MenuSimpleStaggeredBold.js';
import { MenuSimpleStaggeredBoldDuotone } from './MenuSimpleStaggeredBoldDuotone.js';
import { MenuSimpleStaggeredFill } from './MenuSimpleStaggeredFill.js';
import { MenuSimpleStaggeredFillDuotone } from './MenuSimpleStaggeredFillDuotone.js';

export interface MenuSimpleStaggeredProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MenuSimpleStaggered - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MenuSimpleStaggeredRegular } from 'stera-icons/icons/MenuSimpleStaggeredRegular';
 */
const MenuSimpleStaggered = memo(forwardRef<SVGSVGElement, MenuSimpleStaggeredProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <MenuSimpleStaggeredBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MenuSimpleStaggeredBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MenuSimpleStaggeredFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MenuSimpleStaggeredFill ref={ref} {...rest} />;
  if (duotone) return <MenuSimpleStaggeredRegularDuotone ref={ref} {...rest} />;
  return <MenuSimpleStaggeredRegular ref={ref} {...rest} />;
}));

MenuSimpleStaggered.displayName = 'MenuSimpleStaggered';

// Triple export pattern
export { MenuSimpleStaggered, MenuSimpleStaggered as MenuSimpleStaggeredIcon, MenuSimpleStaggered as SiMenuSimpleStaggered };
export default MenuSimpleStaggered;
