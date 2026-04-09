import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuAltFillProps = Omit<IconBaseProps, 'children'>;

const MenuAltFill = memo(
  forwardRef<SVGSVGElement, MenuAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-alt-fill" {...props}>
      <path d="M14 16.75a1.25 1.25 0 1 1 0 2.5H4a1.25 1.25 0 1 1 0-2.5zM20 10.75a1.25 1.25 0 1 1 0 2.5H4a1.25 1.25 0 1 1 0-2.5zM20 4.75a1.25 1.25 0 1 1 0 2.5H4a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

MenuAltFill.displayName = 'MenuAltFill';

// Triple export pattern (lucide-react style)
export { MenuAltFill, MenuAltFill as MenuAltFillIcon, MenuAltFill as SiMenuAltFill };
export default MenuAltFill;
export type { MenuAltFillProps };
