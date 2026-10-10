import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleBoldProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleBold = memo(
  forwardRef<SVGSVGElement, MenuSimpleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 15c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1zM20 7c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

MenuSimpleBold.displayName = 'MenuSimpleBold';

// Triple export pattern
export { MenuSimpleBold, MenuSimpleBold as MenuSimpleBoldIcon, MenuSimpleBold as SiMenuSimpleBold };
export default MenuSimpleBold;
export type { MenuSimpleBoldProps };
