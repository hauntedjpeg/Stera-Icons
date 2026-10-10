import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 3.13c.48 0 .88.39.88.87v16c0 .48-.4.88-.88.88s-.87-.4-.87-.88V4c0-.48.39-.87.87-.87" opacity={.4} />
        <path d="M9.13 6.09c0-1.18 1.42-1.77 2.26-.94L17.24 11c.55.55.55 1.43 0 1.98l-5.85 5.86c-.84.83-2.26.24-2.27-.94v-5.03H3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h6.13z" />
    </IconBase>
  ))
);

ArrowLineRightFillDuotone.displayName = 'ArrowLineRightFillDuotone';

// Triple export pattern
export { ArrowLineRightFillDuotone, ArrowLineRightFillDuotone as ArrowLineRightFillDuotoneIcon, ArrowLineRightFillDuotone as SiArrowLineRightFillDuotone };
export default ArrowLineRightFillDuotone;
export type { ArrowLineRightFillDuotoneProps };
