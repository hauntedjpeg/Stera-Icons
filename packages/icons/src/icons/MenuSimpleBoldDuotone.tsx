import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleBoldDuotone = memo(
  forwardRef<SVGSVGElement, MenuSimpleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 15c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={.4} />
        <path d="M20 7c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

MenuSimpleBoldDuotone.displayName = 'MenuSimpleBoldDuotone';

// Triple export pattern
export { MenuSimpleBoldDuotone, MenuSimpleBoldDuotone as MenuSimpleBoldDuotoneIcon, MenuSimpleBoldDuotone as SiMenuSimpleBoldDuotone };
export default MenuSimpleBoldDuotone;
export type { MenuSimpleBoldDuotoneProps };
