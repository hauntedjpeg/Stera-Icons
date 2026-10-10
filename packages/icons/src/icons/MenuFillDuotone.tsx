import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuFillDuotone = memo(
  forwardRef<SVGSVGElement, MenuFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H4c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" opacity={.4} />
        <path d="M20 16.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H4c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM20 4.75c.69 0 1.25.56 1.25 1.25S20.69 7.25 20 7.25H4c-.69 0-1.25-.56-1.25-1.25S3.31 4.75 4 4.75z" />
    </IconBase>
  ))
);

MenuFillDuotone.displayName = 'MenuFillDuotone';

// Triple export pattern
export { MenuFillDuotone, MenuFillDuotone as MenuFillDuotoneIcon, MenuFillDuotone as SiMenuFillDuotone };
export default MenuFillDuotone;
export type { MenuFillDuotoneProps };
