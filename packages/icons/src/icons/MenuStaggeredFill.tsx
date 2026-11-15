import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuStaggeredFillProps = Omit<IconBaseProps, 'children'>;

const MenuStaggeredFill = memo(
  forwardRef<SVGSVGElement, MenuStaggeredFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 16.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H4c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM20 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H4c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM20 4.75c.69 0 1.25.56 1.25 1.25S20.69 7.25 20 7.25H4c-.69 0-1.25-.56-1.25-1.25S3.31 4.75 4 4.75z" />
    </IconBase>
  ))
);

MenuStaggeredFill.displayName = 'MenuStaggeredFill';

// Triple export pattern
export { MenuStaggeredFill, MenuStaggeredFill as MenuStaggeredFillIcon, MenuStaggeredFill as SiMenuStaggeredFill };
export default MenuStaggeredFill;
export type { MenuStaggeredFillProps };
