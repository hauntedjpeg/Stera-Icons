import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleStaggeredBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleStaggeredBoldDuotone = memo(
  forwardRef<SVGSVGElement, MenuSimpleStaggeredBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 15c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={.4} />
        <path d="M20 7c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

MenuSimpleStaggeredBoldDuotone.displayName = 'MenuSimpleStaggeredBoldDuotone';

// Triple export pattern
export { MenuSimpleStaggeredBoldDuotone, MenuSimpleStaggeredBoldDuotone as MenuSimpleStaggeredBoldDuotoneIcon, MenuSimpleStaggeredBoldDuotone as SiMenuSimpleStaggeredBoldDuotone };
export default MenuSimpleStaggeredBoldDuotone;
export type { MenuSimpleStaggeredBoldDuotoneProps };
