import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleStaggeredBoldProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleStaggeredBold = memo(
  forwardRef<SVGSVGElement, MenuSimpleStaggeredBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 15c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1zM20 7c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

MenuSimpleStaggeredBold.displayName = 'MenuSimpleStaggeredBold';

// Triple export pattern
export { MenuSimpleStaggeredBold, MenuSimpleStaggeredBold as MenuSimpleStaggeredBoldIcon, MenuSimpleStaggeredBold as SiMenuSimpleStaggeredBold };
export default MenuSimpleStaggeredBold;
export type { MenuSimpleStaggeredBoldProps };
