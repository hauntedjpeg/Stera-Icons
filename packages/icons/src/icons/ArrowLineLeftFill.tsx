import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowLineLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowLineLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 3.13c.48 0 .88.39.88.87v16a.88.88 0 0 1-1.75 0V4c0-.48.39-.87.87-.87M12.61 5.15a1.32 1.32 0 0 1 2.27.94v5.04H21a.88.88 0 0 1 0 1.74h-6.12v5.04a1.32 1.32 0 0 1-2.27.94L6.76 13a1.4 1.4 0 0 1 0-1.98z" />
    </IconBase>
  ))
);

ArrowLineLeftFill.displayName = 'ArrowLineLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowLineLeftFill, ArrowLineLeftFill as ArrowLineLeftFillIcon, ArrowLineLeftFill as SiArrowLineLeftFill };
export default ArrowLineLeftFill;
export type { ArrowLineLeftFillProps };
