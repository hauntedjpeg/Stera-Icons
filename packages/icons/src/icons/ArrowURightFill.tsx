import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowURightFill = memo(
  forwardRef<SVGSVGElement, ArrowURightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 4.13a.88.88 0 0 1 0 1.75h-4.5a4.62 4.62 0 1 0 0 9.25h4.63V12a.88.88 0 0 1 1.49-.62l4 4a.9.9 0 0 1 .06 1.17l-.06.07-4 4a.88.88 0 0 1-1.5-.62v-3.12H10.5a6.38 6.38 0 0 1 0-12.75z" />
    </IconBase>
  ))
);

ArrowURightFill.displayName = 'ArrowURightFill';

// Triple export pattern (lucide-react style)
export { ArrowURightFill, ArrowURightFill as ArrowURightFillIcon, ArrowURightFill as SiArrowURightFill };
export default ArrowURightFill;
export type { ArrowURightFillProps };
