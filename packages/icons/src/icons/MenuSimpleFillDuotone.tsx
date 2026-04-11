import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, MenuSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 6.75a1.25 1.25 0 1 1 0 2.5H4a1.25 1.25 0 1 1 0-2.5z" />
        <path d="M14 14.75a1.25 1.25 0 1 1 0 2.5H4a1.25 1.25 0 1 1 0-2.5z" opacity={.4} />
    </IconBase>
  ))
);

MenuSimpleFillDuotone.displayName = 'MenuSimpleFillDuotone';

// Triple export pattern (lucide-react style)
export { MenuSimpleFillDuotone, MenuSimpleFillDuotone as MenuSimpleFillDuotoneIcon, MenuSimpleFillDuotone as SiMenuSimpleFillDuotone };
export default MenuSimpleFillDuotone;
export type { MenuSimpleFillDuotoneProps };
