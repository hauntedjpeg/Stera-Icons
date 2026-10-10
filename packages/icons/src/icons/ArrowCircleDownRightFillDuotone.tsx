import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.02 5.02c-3.86 3.85-3.86 10.1 0 13.96s10.1 3.86 13.96 0 3.86-10.1 0-13.96-10.1-3.86-13.96 0m3.53 3.53c.34-.34.9-.34 1.24 0l4.16 4.17V9.17c0-.48.4-.87.88-.87s.87.39.87.87v5.66q0 .36-.25.62-.27.25-.62.25H9.17c-.48 0-.87-.39-.87-.87s.39-.88.87-.88h3.55L8.55 9.8c-.34-.34-.34-.9 0-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M8.55 8.55c-.34.34-.34.9 0 1.24l4.17 4.16H9.17c-.48 0-.87.4-.87.88s.39.87.87.87h5.66q.36 0 .62-.25.24-.27.25-.62V9.17c0-.48-.39-.87-.87-.87s-.88.39-.88.87v3.55L9.8 8.55c-.34-.34-.9-.34-1.24 0" />
    </IconBase>
  ))
);

ArrowCircleDownRightFillDuotone.displayName = 'ArrowCircleDownRightFillDuotone';

// Triple export pattern
export { ArrowCircleDownRightFillDuotone, ArrowCircleDownRightFillDuotone as ArrowCircleDownRightFillDuotoneIcon, ArrowCircleDownRightFillDuotone as SiArrowCircleDownRightFillDuotone };
export default ArrowCircleDownRightFillDuotone;
export type { ArrowCircleDownRightFillDuotoneProps };
