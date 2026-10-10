import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuBoldProps = Omit<IconBaseProps, 'children'>;

const MenuBold = memo(
  forwardRef<SVGSVGElement, MenuBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 17c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1zM20 11c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1zM20 5c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

MenuBold.displayName = 'MenuBold';

// Triple export pattern
export { MenuBold, MenuBold as MenuBoldIcon, MenuBold as SiMenuBold };
export default MenuBold;
export type { MenuBoldProps };
