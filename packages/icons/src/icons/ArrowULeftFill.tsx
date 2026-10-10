import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftFill = memo(
  forwardRef<SVGSVGElement, ArrowULeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.5 4.13c3.52 0 6.38 2.85 6.38 6.37s-2.86 6.38-6.38 6.38H8.88V20c0 .35-.22.67-.55.8-.32.14-.7.07-.95-.18l-4-4-.06-.07q-.19-.24-.2-.55.01-.36.26-.62l4-4c.25-.25.63-.32.95-.19.33.14.54.46.54.81v3.13h4.63c2.55 0 4.63-2.08 4.63-4.63s-2.08-4.62-4.63-4.62H9c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

ArrowULeftFill.displayName = 'ArrowULeftFill';

// Triple export pattern
export { ArrowULeftFill, ArrowULeftFill as ArrowULeftFillIcon, ArrowULeftFill as SiArrowULeftFill };
export default ArrowULeftFill;
export type { ArrowULeftFillProps };
