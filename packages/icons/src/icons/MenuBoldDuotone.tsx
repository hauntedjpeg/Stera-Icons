import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuBoldDuotone = memo(
  forwardRef<SVGSVGElement, MenuBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 11c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={.4} />
        <path d="M20 17c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1zM20 5c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

MenuBoldDuotone.displayName = 'MenuBoldDuotone';

// Triple export pattern
export { MenuBoldDuotone, MenuBoldDuotone as MenuBoldDuotoneIcon, MenuBoldDuotone as SiMenuBoldDuotone };
export default MenuBoldDuotone;
export type { MenuBoldDuotoneProps };
