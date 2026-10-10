import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftTopFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftTopFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowULeftTopFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.5 7.13c3.52 0 6.38 2.85 6.38 6.37s-2.86 6.38-6.38 6.38H9c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h4.5c2.55 0 4.63-2.08 4.63-4.63s-2.08-4.62-4.63-4.62H8.88V7.12z" opacity={.4} />
        <path d="M7.38 3.38c.25-.25.63-.32.95-.19.33.14.54.46.54.81v8c0 .35-.2.67-.54.8-.32.14-.7.07-.95-.18l-4-4q-.25-.27-.25-.62 0-.31.2-.55l.05-.07z" />
    </IconBase>
  ))
);

ArrowULeftTopFillDuotone.displayName = 'ArrowULeftTopFillDuotone';

// Triple export pattern
export { ArrowULeftTopFillDuotone, ArrowULeftTopFillDuotone as ArrowULeftTopFillDuotoneIcon, ArrowULeftTopFillDuotone as SiArrowULeftTopFillDuotone };
export default ArrowULeftTopFillDuotone;
export type { ArrowULeftTopFillDuotoneProps };
