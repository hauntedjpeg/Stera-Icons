import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuFillProps = Omit<IconBaseProps, 'children'>;

const MenuFill = memo(
  forwardRef<SVGSVGElement, MenuFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 16.75a1.25 1.25 0 1 1 0 2.5H4a1.25 1.25 0 1 1 0-2.5zM20 10.75a1.25 1.25 0 1 1 0 2.5H4a1.25 1.25 0 1 1 0-2.5zM20 4.75a1.25 1.25 0 1 1 0 2.5H4a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

MenuFill.displayName = 'MenuFill';

// Triple export pattern (lucide-react style)
export { MenuFill, MenuFill as MenuFillIcon, MenuFill as SiMenuFill };
export default MenuFill;
export type { MenuFillProps };
