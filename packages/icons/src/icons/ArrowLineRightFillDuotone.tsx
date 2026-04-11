import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 3.13c.48 0 .88.39.88.87v16a.88.88 0 0 1-1.75 0V4c0-.48.39-.87.87-.87" opacity={.4} />
        <path d="M9.13 6.09a1.32 1.32 0 0 1 2.26-.94L17.24 11a1.4 1.4 0 0 1 0 1.98l-5.85 5.86c-.84.83-2.26.24-2.27-.94v-5.03H3a.88.88 0 0 1 0-1.76h6.13z" />
    </IconBase>
  ))
);

ArrowLineRightFillDuotone.displayName = 'ArrowLineRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLineRightFillDuotone, ArrowLineRightFillDuotone as ArrowLineRightFillDuotoneIcon, ArrowLineRightFillDuotone as SiArrowLineRightFillDuotone };
export default ArrowLineRightFillDuotone;
export type { ArrowLineRightFillDuotoneProps };
