import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MenuStaggeredRegular } from './MenuStaggeredRegular.js';
import { MenuStaggeredRegularDuotone } from './MenuStaggeredRegularDuotone.js';
import { MenuStaggeredBold } from './MenuStaggeredBold.js';
import { MenuStaggeredBoldDuotone } from './MenuStaggeredBoldDuotone.js';
import { MenuStaggeredFill } from './MenuStaggeredFill.js';
import { MenuStaggeredFillDuotone } from './MenuStaggeredFillDuotone.js';

export interface MenuStaggeredProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MenuStaggered - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MenuStaggeredRegular } from 'stera-icons/icons/MenuStaggeredRegular';
 */
const MenuStaggered = memo(forwardRef<SVGSVGElement, MenuStaggeredProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <MenuStaggeredBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MenuStaggeredBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MenuStaggeredFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MenuStaggeredFill ref={ref} {...rest} />;
  if (duotone) return <MenuStaggeredRegularDuotone ref={ref} {...rest} />;
  return <MenuStaggeredRegular ref={ref} {...rest} />;
}));

MenuStaggered.displayName = 'MenuStaggered';

// Triple export pattern
export { MenuStaggered, MenuStaggered as MenuStaggeredIcon, MenuStaggered as SiMenuStaggered };
export default MenuStaggered;
