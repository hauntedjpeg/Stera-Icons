import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleStaggeredFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleStaggeredFillDuotone = memo(
  forwardRef<SVGSVGElement, MenuSimpleStaggeredFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 6.75c.69 0 1.25.56 1.25 1.25S20.69 9.25 20 9.25H4c-.69 0-1.25-.56-1.25-1.25S3.31 6.75 4 6.75z" />
        <path d="M14 14.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H4c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" opacity={.4} />
    </IconBase>
  ))
);

MenuSimpleStaggeredFillDuotone.displayName = 'MenuSimpleStaggeredFillDuotone';

// Triple export pattern
export { MenuSimpleStaggeredFillDuotone, MenuSimpleStaggeredFillDuotone as MenuSimpleStaggeredFillDuotoneIcon, MenuSimpleStaggeredFillDuotone as SiMenuSimpleStaggeredFillDuotone };
export default MenuSimpleStaggeredFillDuotone;
export type { MenuSimpleStaggeredFillDuotoneProps };
