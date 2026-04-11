import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.02 18.98A9.88 9.88 0 1 1 18.98 5.02 9.88 9.88 0 0 1 5.02 18.98m3.53-3.53c.34.34.9.34 1.24 0l4.16-4.17v3.55a.88.88 0 0 0 1.75 0V9.17a.9.9 0 0 0-.87-.87H9.17a.88.88 0 0 0 0 1.75h3.55L8.55 14.2a.87.87 0 0 0 0 1.24" clipRule="evenodd" opacity={.4} />
        <path d="M8.55 15.45a.87.87 0 0 1 0-1.24l4.17-4.16H9.17a.88.88 0 0 1 0-1.75h5.66a.9.9 0 0 1 .87.87v5.66a.88.88 0 0 1-1.75 0v-3.54L9.8 15.45a.9.9 0 0 1-1.24 0" />
    </IconBase>
  ))
);

ArrowCircleUpRightFillDuotone.displayName = 'ArrowCircleUpRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpRightFillDuotone, ArrowCircleUpRightFillDuotone as ArrowCircleUpRightFillDuotoneIcon, ArrowCircleUpRightFillDuotone as SiArrowCircleUpRightFillDuotone };
export default ArrowCircleUpRightFillDuotone;
export type { ArrowCircleUpRightFillDuotoneProps };
