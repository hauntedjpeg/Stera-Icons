import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuAltBoldProps = Omit<IconBaseProps, 'children'>;

const MenuAltBold = memo(
  forwardRef<SVGSVGElement, MenuAltBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 17c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1zM20 11c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1zM20 5c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

MenuAltBold.displayName = 'MenuAltBold';

// Triple export pattern
export { MenuAltBold, MenuAltBold as MenuAltBoldIcon, MenuAltBold as SiMenuAltBold };
export default MenuAltBold;
export type { MenuAltBoldProps };
