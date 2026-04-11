import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleFillProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleFill = memo(
  forwardRef<SVGSVGElement, MenuSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 14.75a1.25 1.25 0 1 1 0 2.5H4a1.25 1.25 0 1 1 0-2.5zM20 6.75a1.25 1.25 0 1 1 0 2.5H4a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

MenuSimpleFill.displayName = 'MenuSimpleFill';

// Triple export pattern (lucide-react style)
export { MenuSimpleFill, MenuSimpleFill as MenuSimpleFillIcon, MenuSimpleFill as SiMenuSimpleFill };
export default MenuSimpleFill;
export type { MenuSimpleFillProps };
