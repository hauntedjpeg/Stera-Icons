import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuStaggeredBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuStaggeredBoldDuotone = memo(
  forwardRef<SVGSVGElement, MenuStaggeredBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 11c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={.4} />
        <path d="M14 17c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1zM20 5c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

MenuStaggeredBoldDuotone.displayName = 'MenuStaggeredBoldDuotone';

// Triple export pattern
export { MenuStaggeredBoldDuotone, MenuStaggeredBoldDuotone as MenuStaggeredBoldDuotoneIcon, MenuStaggeredBoldDuotone as SiMenuStaggeredBoldDuotone };
export default MenuStaggeredBoldDuotone;
export type { MenuStaggeredBoldDuotoneProps };
