import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.98 5.02c3.86 3.85 3.86 10.1 0 13.96s-10.1 3.86-13.96 0-3.86-10.1 0-13.96 10.1-3.86 13.96 0m-3.53 3.53c-.34-.34-.9-.34-1.24 0l-4.16 4.17V9.17c0-.48-.4-.87-.88-.87s-.87.39-.87.87v5.66q0 .36.25.62.27.25.62.25h5.66c.48 0 .87-.39.87-.87s-.39-.88-.87-.88h-3.55l4.17-4.16c.34-.34.34-.9 0-1.24" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleDownLeftFill.displayName = 'ArrowCircleDownLeftFill';

// Triple export pattern
export { ArrowCircleDownLeftFill, ArrowCircleDownLeftFill as ArrowCircleDownLeftFillIcon, ArrowCircleDownLeftFill as SiArrowCircleDownLeftFill };
export default ArrowCircleDownLeftFill;
export type { ArrowCircleDownLeftFillProps };
