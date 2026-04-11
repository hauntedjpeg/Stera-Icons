import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightTopFillProps = Omit<IconBaseProps, 'children'>;

const ArrowURightTopFill = memo(
  forwardRef<SVGSVGElement, ArrowURightTopFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.67 3.2c.32-.14.7-.07.95.18l4 4 .06.07a.9.9 0 0 1-.06 1.17l-4 4a.88.88 0 0 1-1.5-.62V8.87H10.5a4.63 4.63 0 0 0 0 9.25H15a.88.88 0 0 1 0 1.75h-4.5a6.38 6.38 0 0 1 0-12.75h4.63V4c0-.35.2-.67.53-.8" />
    </IconBase>
  ))
);

ArrowURightTopFill.displayName = 'ArrowURightTopFill';

// Triple export pattern (lucide-react style)
export { ArrowURightTopFill, ArrowURightTopFill as ArrowURightTopFillIcon, ArrowURightTopFill as SiArrowURightTopFill };
export default ArrowURightTopFill;
export type { ArrowURightTopFillProps };
