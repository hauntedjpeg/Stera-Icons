import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.38 3.38a.88.88 0 0 1 1.5.62v3.12H16A3.9 3.9 0 0 1 19.88 11v8a.87.87 0 1 1-1.75 0v-8c0-1.17-.96-2.13-2.13-2.13H8.88V12a.88.88 0 0 1-1.5.62l-4-4a.9.9 0 0 1-.06-1.17l.06-.07z" />
    </IconBase>
  ))
);

ArrowCornerUpLeftFill.displayName = 'ArrowCornerUpLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpLeftFill, ArrowCornerUpLeftFill as ArrowCornerUpLeftFillIcon, ArrowCornerUpLeftFill as SiArrowCornerUpLeftFill };
export default ArrowCornerUpLeftFill;
export type { ArrowCornerUpLeftFillProps };
