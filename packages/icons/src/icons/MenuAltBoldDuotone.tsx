import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, MenuAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 11c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={.4} />
        <path d="M14 17c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1zM20 5c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

MenuAltBoldDuotone.displayName = 'MenuAltBoldDuotone';

// Triple export pattern
export { MenuAltBoldDuotone, MenuAltBoldDuotone as MenuAltBoldDuotoneIcon, MenuAltBoldDuotone as SiMenuAltBoldDuotone };
export default MenuAltBoldDuotone;
export type { MenuAltBoldDuotoneProps };
