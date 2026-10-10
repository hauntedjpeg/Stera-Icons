import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuAltRegularProps = Omit<IconBaseProps, 'children'>;

const MenuAltRegular = memo(
  forwardRef<SVGSVGElement, MenuAltRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 16.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM20 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM20 6.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

MenuAltRegular.displayName = 'MenuAltRegular';

// Triple export pattern
export { MenuAltRegular, MenuAltRegular as MenuAltRegularIcon, MenuAltRegular as SiMenuAltRegular };
export default MenuAltRegular;
export type { MenuAltRegularProps };
