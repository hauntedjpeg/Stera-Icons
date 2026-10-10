import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftTopFillProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftTopFill = memo(
  forwardRef<SVGSVGElement, ArrowULeftTopFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.38 3.38c.25-.25.63-.32.95-.19.33.14.54.46.54.81v3.12h4.63c3.52 0 6.37 2.86 6.38 6.38s-2.86 6.37-6.38 6.37H9c-.48 0-.87-.39-.87-.87s.39-.88.87-.88h4.5c2.55 0 4.63-2.07 4.63-4.62s-2.08-4.63-4.63-4.63H8.88V12c0 .35-.22.67-.55.8-.32.14-.7.07-.95-.18l-4-4q-.25-.27-.25-.62 0-.31.2-.55l.05-.07z" />
    </IconBase>
  ))
);

ArrowULeftTopFill.displayName = 'ArrowULeftTopFill';

// Triple export pattern
export { ArrowULeftTopFill, ArrowULeftTopFill as ArrowULeftTopFillIcon, ArrowULeftTopFill as SiArrowULeftTopFill };
export default ArrowULeftTopFill;
export type { ArrowULeftTopFillProps };
