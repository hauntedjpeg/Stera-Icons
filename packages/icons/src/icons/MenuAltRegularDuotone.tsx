import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, MenuAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={.4} />
        <path d="M14 16.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM20 6.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

MenuAltRegularDuotone.displayName = 'MenuAltRegularDuotone';

// Triple export pattern
export { MenuAltRegularDuotone, MenuAltRegularDuotone as MenuAltRegularDuotoneIcon, MenuAltRegularDuotone as SiMenuAltRegularDuotone };
export default MenuAltRegularDuotone;
export type { MenuAltRegularDuotoneProps };
