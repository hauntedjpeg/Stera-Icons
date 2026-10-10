import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.98 18.98c3.86-3.85 3.86-10.1 0-13.96s-10.1-3.86-13.96 0-3.86 10.1 0 13.96 10.1 3.86 13.96 0m-3.53-3.53c-.34.34-.9.34-1.24 0l-4.16-4.17v3.55c0 .48-.4.87-.88.87s-.87-.39-.87-.87V9.17q0-.36.25-.62.27-.25.62-.25h5.66c.48 0 .87.39.87.87s-.39.88-.87.88h-3.55l4.17 4.16c.34.34.34.9 0 1.24" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleUpLeftFill.displayName = 'ArrowCircleUpLeftFill';

// Triple export pattern
export { ArrowCircleUpLeftFill, ArrowCircleUpLeftFill as ArrowCircleUpLeftFillIcon, ArrowCircleUpLeftFill as SiArrowCircleUpLeftFill };
export default ArrowCircleUpLeftFill;
export type { ArrowCircleUpLeftFillProps };
