import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuRegularProps = Omit<IconBaseProps, 'children'>;

const MenuRegular = memo(
  forwardRef<SVGSVGElement, MenuRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 17.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM20 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM20 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

MenuRegular.displayName = 'MenuRegular';

// Triple export pattern
export { MenuRegular, MenuRegular as MenuRegularIcon, MenuRegular as SiMenuRegular };
export default MenuRegular;
export type { MenuRegularProps };
