import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuStaggeredFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuStaggeredFillDuotone = memo(
  forwardRef<SVGSVGElement, MenuStaggeredFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H4c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" opacity={.4} />
        <path d="M14 16.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H4c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM20 4.75c.69 0 1.25.56 1.25 1.25S20.69 7.25 20 7.25H4c-.69 0-1.25-.56-1.25-1.25S3.31 4.75 4 4.75z" />
    </IconBase>
  ))
);

MenuStaggeredFillDuotone.displayName = 'MenuStaggeredFillDuotone';

// Triple export pattern
export { MenuStaggeredFillDuotone, MenuStaggeredFillDuotone as MenuStaggeredFillDuotoneIcon, MenuStaggeredFillDuotone as SiMenuStaggeredFillDuotone };
export default MenuStaggeredFillDuotone;
export type { MenuStaggeredFillDuotoneProps };
