import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleStaggeredRegularProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleStaggeredRegular = memo(
  forwardRef<SVGSVGElement, MenuSimpleStaggeredRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 15.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM20 7.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

MenuSimpleStaggeredRegular.displayName = 'MenuSimpleStaggeredRegular';

// Triple export pattern
export { MenuSimpleStaggeredRegular, MenuSimpleStaggeredRegular as MenuSimpleStaggeredRegularIcon, MenuSimpleStaggeredRegular as SiMenuSimpleStaggeredRegular };
export default MenuSimpleStaggeredRegular;
export type { MenuSimpleStaggeredRegularProps };
