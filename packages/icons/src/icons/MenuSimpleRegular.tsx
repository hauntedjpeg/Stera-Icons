import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleRegularProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleRegular = memo(
  forwardRef<SVGSVGElement, MenuSimpleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 15.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM20 7.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

MenuSimpleRegular.displayName = 'MenuSimpleRegular';

// Triple export pattern
export { MenuSimpleRegular, MenuSimpleRegular as MenuSimpleRegularIcon, MenuSimpleRegular as SiMenuSimpleRegular };
export default MenuSimpleRegular;
export type { MenuSimpleRegularProps };
