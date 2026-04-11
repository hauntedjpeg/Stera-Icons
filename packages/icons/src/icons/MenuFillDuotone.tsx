import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuFillDuotone = memo(
  forwardRef<SVGSVGElement, MenuFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 10.75a1.25 1.25 0 1 1 0 2.5H4a1.25 1.25 0 1 1 0-2.5z" opacity={.4} />
        <path d="M20 16.75a1.25 1.25 0 1 1 0 2.5H4a1.25 1.25 0 1 1 0-2.5zM20 4.75a1.25 1.25 0 1 1 0 2.5H4a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

MenuFillDuotone.displayName = 'MenuFillDuotone';

// Triple export pattern (lucide-react style)
export { MenuFillDuotone, MenuFillDuotone as MenuFillDuotoneIcon, MenuFillDuotone as SiMenuFillDuotone };
export default MenuFillDuotone;
export type { MenuFillDuotoneProps };
