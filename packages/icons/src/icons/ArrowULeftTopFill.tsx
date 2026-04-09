import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftTopFillProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftTopFill = memo(
  forwardRef<SVGSVGElement, ArrowULeftTopFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left-top-fill" {...props}>
      <path d="M7.38 3.38a.88.88 0 0 1 1.5.62v3.12h4.62a6.38 6.38 0 0 1 0 12.75H9a.87.87 0 1 1 0-1.75h4.5a4.63 4.63 0 0 0 0-9.25H8.88V12a.88.88 0 0 1-1.5.62l-4-4a.9.9 0 0 1-.06-1.17l.06-.07z" />
    </IconBase>
  ))
);

ArrowULeftTopFill.displayName = 'ArrowULeftTopFill';

// Triple export pattern (lucide-react style)
export { ArrowULeftTopFill, ArrowULeftTopFill as ArrowULeftTopFillIcon, ArrowULeftTopFill as SiArrowULeftTopFill };
export default ArrowULeftTopFill;
export type { ArrowULeftTopFillProps };
