import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleStaggeredRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleStaggeredRegularDuotone = memo(
  forwardRef<SVGSVGElement, MenuSimpleStaggeredRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 15.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={.4} />
        <path d="M20 7.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

MenuSimpleStaggeredRegularDuotone.displayName = 'MenuSimpleStaggeredRegularDuotone';

// Triple export pattern
export { MenuSimpleStaggeredRegularDuotone, MenuSimpleStaggeredRegularDuotone as MenuSimpleStaggeredRegularDuotoneIcon, MenuSimpleStaggeredRegularDuotone as SiMenuSimpleStaggeredRegularDuotone };
export default MenuSimpleStaggeredRegularDuotone;
export type { MenuSimpleStaggeredRegularDuotoneProps };
