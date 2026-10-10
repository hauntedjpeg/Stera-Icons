import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowURightFill = memo(
  forwardRef<SVGSVGElement, ArrowURightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 4.13c.48 0 .88.39.88.87s-.4.88-.88.88h-4.5c-2.55 0-4.62 2.07-4.62 4.62s2.07 4.63 4.62 4.63h4.63V12c0-.35.2-.67.53-.8.33-.14.7-.07.96.18l4 4q.24.26.25.62 0 .31-.2.55l-.05.07-4 4c-.25.25-.63.32-.96.19-.32-.14-.54-.46-.54-.81v-3.12H10.5c-3.52 0-6.37-2.86-6.37-6.38s2.85-6.37 6.37-6.37z" />
    </IconBase>
  ))
);

ArrowURightFill.displayName = 'ArrowURightFill';

// Triple export pattern
export { ArrowURightFill, ArrowURightFill as ArrowURightFillIcon, ArrowURightFill as SiArrowURightFill };
export default ArrowURightFill;
export type { ArrowURightFillProps };
