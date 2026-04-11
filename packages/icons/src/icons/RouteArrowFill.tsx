import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RouteArrowFillProps = Omit<IconBaseProps, 'children'>;

const RouteArrowFill = memo(
  forwardRef<SVGSVGElement, RouteArrowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.5 2.13a3.4 3.4 0 0 1 3.26 2.5h4.99a4.12 4.12 0 1 1 0 8.25h-4.5a2.37 2.37 0 1 0 0 4.74h6.88V15.5a.88.88 0 0 1 1.49-.62l3 3a.9.9 0 0 1 0 1.24l-3 3a.88.88 0 0 1-1.5-.62v-2.12H9.25a4.12 4.12 0 1 1 0-8.25h4.5a2.37 2.37 0 1 0 0-4.76H8.76A3.38 3.38 0 1 1 5.5 2.13" />
    </IconBase>
  ))
);

RouteArrowFill.displayName = 'RouteArrowFill';

// Triple export pattern (lucide-react style)
export { RouteArrowFill, RouteArrowFill as RouteArrowFillIcon, RouteArrowFill as SiRouteArrowFill };
export default RouteArrowFill;
export type { RouteArrowFillProps };
