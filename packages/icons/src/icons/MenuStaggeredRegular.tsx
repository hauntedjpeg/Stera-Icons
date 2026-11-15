import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuStaggeredRegularProps = Omit<IconBaseProps, 'children'>;

const MenuStaggeredRegular = memo(
  forwardRef<SVGSVGElement, MenuStaggeredRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 16.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM20 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM20 6.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

MenuStaggeredRegular.displayName = 'MenuStaggeredRegular';

// Triple export pattern
export { MenuStaggeredRegular, MenuStaggeredRegular as MenuStaggeredRegularIcon, MenuStaggeredRegular as SiMenuStaggeredRegular };
export default MenuStaggeredRegular;
export type { MenuStaggeredRegularProps };
