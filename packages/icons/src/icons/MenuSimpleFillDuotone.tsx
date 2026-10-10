import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, MenuSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 6.75c.69 0 1.25.56 1.25 1.25S20.69 9.25 20 9.25H4c-.69 0-1.25-.56-1.25-1.25S3.31 6.75 4 6.75z" />
        <path d="M14 14.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H4c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" opacity={.4} />
    </IconBase>
  ))
);

MenuSimpleFillDuotone.displayName = 'MenuSimpleFillDuotone';

// Triple export pattern
export { MenuSimpleFillDuotone, MenuSimpleFillDuotone as MenuSimpleFillDuotoneIcon, MenuSimpleFillDuotone as SiMenuSimpleFillDuotone };
export default MenuSimpleFillDuotone;
export type { MenuSimpleFillDuotoneProps };
