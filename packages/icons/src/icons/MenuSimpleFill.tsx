import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleFillProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleFill = memo(
  forwardRef<SVGSVGElement, MenuSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 14.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H4c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM20 6.75c.69 0 1.25.56 1.25 1.25S20.69 9.25 20 9.25H4c-.69 0-1.25-.56-1.25-1.25S3.31 6.75 4 6.75z" />
    </IconBase>
  ))
);

MenuSimpleFill.displayName = 'MenuSimpleFill';

// Triple export pattern
export { MenuSimpleFill, MenuSimpleFill as MenuSimpleFillIcon, MenuSimpleFill as SiMenuSimpleFill };
export default MenuSimpleFill;
export type { MenuSimpleFillProps };
