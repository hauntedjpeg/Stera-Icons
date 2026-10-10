import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RouteArrowFillProps = Omit<IconBaseProps, 'children'>;

const RouteArrowFill = memo(
  forwardRef<SVGSVGElement, RouteArrowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.5 2.13c1.56 0 2.87 1.06 3.26 2.5h4.99c2.28 0 4.13 1.84 4.13 4.12s-1.85 4.13-4.13 4.13h-4.5c-1.31 0-2.37 1.06-2.37 2.37s1.06 2.38 2.37 2.38h6.88V15.5c0-.35.2-.67.54-.8.32-.14.7-.07.95.18l3 3q.24.27.25.62 0 .35-.25.62l-3 3c-.25.25-.63.32-.96.19-.32-.14-.54-.46-.54-.81v-2.12H9.25c-2.28 0-4.12-1.85-4.12-4.13s1.84-4.12 4.12-4.12h4.5c1.31 0 2.38-1.07 2.38-2.38s-1.07-2.37-2.38-2.37H8.76c-.39 1.43-1.7 2.5-3.26 2.5-1.86 0-3.37-1.52-3.37-3.38s1.5-3.37 3.37-3.37" />
    </IconBase>
  ))
);

RouteArrowFill.displayName = 'RouteArrowFill';

// Triple export pattern
export { RouteArrowFill, RouteArrowFill as RouteArrowFillIcon, RouteArrowFill as SiRouteArrowFill };
export default RouteArrowFill;
export type { RouteArrowFillProps };
