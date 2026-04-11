import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuAltFillDuotone = memo(
  forwardRef<SVGSVGElement, MenuAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 10.75a1.25 1.25 0 1 1 0 2.5H4a1.25 1.25 0 1 1 0-2.5z" opacity={.4} />
        <path d="M14 16.75a1.25 1.25 0 1 1 0 2.5H4a1.25 1.25 0 1 1 0-2.5zM20 4.75a1.25 1.25 0 1 1 0 2.5H4a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

MenuAltFillDuotone.displayName = 'MenuAltFillDuotone';

// Triple export pattern (lucide-react style)
export { MenuAltFillDuotone, MenuAltFillDuotone as MenuAltFillDuotoneIcon, MenuAltFillDuotone as SiMenuAltFillDuotone };
export default MenuAltFillDuotone;
export type { MenuAltFillDuotoneProps };
