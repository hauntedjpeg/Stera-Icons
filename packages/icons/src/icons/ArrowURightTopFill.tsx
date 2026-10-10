import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightTopFillProps = Omit<IconBaseProps, 'children'>;

const ArrowURightTopFill = memo(
  forwardRef<SVGSVGElement, ArrowURightTopFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.67 3.2c.32-.14.7-.07.95.18l4 4 .06.07q.19.24.2.55-.01.36-.26.62l-4 4c-.25.25-.63.32-.96.19-.32-.14-.54-.46-.54-.81V8.87H10.5c-2.55 0-4.62 2.08-4.62 4.63s2.07 4.62 4.62 4.62H15c.48 0 .87.4.88.88 0 .48-.4.87-.88.87h-4.5c-3.52 0-6.37-2.85-6.37-6.37s2.85-6.38 6.37-6.38h4.63V4c0-.35.2-.67.53-.8" />
    </IconBase>
  ))
);

ArrowURightTopFill.displayName = 'ArrowURightTopFill';

// Triple export pattern
export { ArrowURightTopFill, ArrowURightTopFill as ArrowURightTopFillIcon, ArrowURightTopFill as SiArrowURightTopFill };
export default ArrowURightTopFill;
export type { ArrowURightTopFillProps };
