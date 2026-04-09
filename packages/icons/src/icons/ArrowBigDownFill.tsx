import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigDownFillProps = Omit<IconBaseProps, 'children'>;

const ArrowBigDownFill = memo(
  forwardRef<SVGSVGElement, ArrowBigDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-big-down-fill" {...props}>
      <path d="M15 3.13c1.04 0 1.87.83 1.87 1.87v4.63h3.92c1.23 0 1.84 1.48.98 2.34l-8.27 8.26c-.83.83-2.17.83-3 0l-8.27-8.26a1.38 1.38 0 0 1 .98-2.35h3.91V5c0-1.04.84-1.87 1.88-1.87z" />
    </IconBase>
  ))
);

ArrowBigDownFill.displayName = 'ArrowBigDownFill';

// Triple export pattern (lucide-react style)
export { ArrowBigDownFill, ArrowBigDownFill as ArrowBigDownFillIcon, ArrowBigDownFill as SiArrowBigDownFill };
export default ArrowBigDownFill;
export type { ArrowBigDownFillProps };
