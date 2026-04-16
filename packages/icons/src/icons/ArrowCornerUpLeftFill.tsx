import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.38 5.38a.88.88 0 0 1 1.5.62v4.12H13c1.8 0 2.9 0 3.82.3a5.9 5.9 0 0 1 3.77 3.76c.3.92.29 2.03.29 3.82a.87.87 0 1 1-1.75 0c0-1.93-.02-2.69-.2-3.27a4.1 4.1 0 0 0-2.66-2.65c-.58-.2-1.34-.2-3.27-.2H9.88V16a.88.88 0 0 1-1.5.62l-5-5a.9.9 0 0 1-.06-1.17l.06-.07z" />
    </IconBase>
  ))
);

ArrowCornerUpLeftFill.displayName = 'ArrowCornerUpLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpLeftFill, ArrowCornerUpLeftFill as ArrowCornerUpLeftFillIcon, ArrowCornerUpLeftFill as SiArrowCornerUpLeftFill };
export default ArrowCornerUpLeftFill;
export type { ArrowCornerUpLeftFillProps };
