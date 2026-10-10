import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.02 18.98c-3.86-3.85-3.86-10.1 0-13.96s10.1-3.86 13.96 0 3.86 10.1 0 13.96-10.1 3.86-13.96 0m3.53-3.53c.34.34.9.34 1.24 0l4.16-4.17v3.55c0 .48.4.87.88.87s.87-.39.87-.87V9.17q0-.36-.25-.62-.27-.25-.62-.25H9.17c-.48 0-.87.39-.87.87s.39.88.87.88h3.55L8.55 14.2c-.34.34-.34.9 0 1.24" clipRule="evenodd" opacity={.4} />
        <path d="M8.55 15.45c-.34-.34-.34-.9 0-1.24l4.17-4.16H9.17c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h5.66q.36 0 .62.25.24.27.25.62v5.66c0 .48-.39.87-.87.87s-.88-.39-.88-.87v-3.54L9.8 15.45c-.34.34-.9.34-1.24 0" />
    </IconBase>
  ))
);

ArrowCircleUpRightFillDuotone.displayName = 'ArrowCircleUpRightFillDuotone';

// Triple export pattern
export { ArrowCircleUpRightFillDuotone, ArrowCircleUpRightFillDuotone as ArrowCircleUpRightFillDuotoneIcon, ArrowCircleUpRightFillDuotone as SiArrowCircleUpRightFillDuotone };
export default ArrowCircleUpRightFillDuotone;
export type { ArrowCircleUpRightFillDuotoneProps };
