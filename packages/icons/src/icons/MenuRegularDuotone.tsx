import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuRegularDuotone = memo(
  forwardRef<SVGSVGElement, MenuRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={.4} />
        <path d="M20 17.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM20 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

MenuRegularDuotone.displayName = 'MenuRegularDuotone';

// Triple export pattern
export { MenuRegularDuotone, MenuRegularDuotone as MenuRegularDuotoneIcon, MenuRegularDuotone as SiMenuRegularDuotone };
export default MenuRegularDuotone;
export type { MenuRegularDuotoneProps };
