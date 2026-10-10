import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleRegularDuotone = memo(
  forwardRef<SVGSVGElement, MenuSimpleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 15.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={.4} />
        <path d="M20 7.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

MenuSimpleRegularDuotone.displayName = 'MenuSimpleRegularDuotone';

// Triple export pattern
export { MenuSimpleRegularDuotone, MenuSimpleRegularDuotone as MenuSimpleRegularDuotoneIcon, MenuSimpleRegularDuotone as SiMenuSimpleRegularDuotone };
export default MenuSimpleRegularDuotone;
export type { MenuSimpleRegularDuotoneProps };
