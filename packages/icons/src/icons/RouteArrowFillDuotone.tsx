import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RouteArrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RouteArrowFillDuotone = memo(
  forwardRef<SVGSVGElement, RouteArrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.75 4.63c2.28 0 4.13 1.84 4.13 4.12s-1.85 4.13-4.13 4.13h-4.5c-1.31 0-2.37 1.06-2.37 2.37s1.06 2.38 2.37 2.38h6.88v1.75H9.25c-2.28 0-4.12-1.85-4.12-4.13s1.84-4.12 4.12-4.12h4.5c1.31 0 2.38-1.07 2.38-2.38s-1.07-2.37-2.38-2.37H8.76q.11-.43.12-.88 0-.46-.12-.87z" opacity={.4} />
        <path d="M16.67 14.7c.32-.14.7-.07.95.18l3 3q.24.27.25.62 0 .35-.25.62l-3 3c-.25.25-.63.32-.96.19-.32-.14-.54-.46-.54-.81v-6c0-.35.22-.67.54-.8M5.5 2.13c1.86 0 3.38 1.5 3.38 3.37 0 1.86-1.52 3.38-3.38 3.38S2.13 7.36 2.13 5.5s1.5-3.37 3.37-3.37" />
    </IconBase>
  ))
);

RouteArrowFillDuotone.displayName = 'RouteArrowFillDuotone';

// Triple export pattern
export { RouteArrowFillDuotone, RouteArrowFillDuotone as RouteArrowFillDuotoneIcon, RouteArrowFillDuotone as SiRouteArrowFillDuotone };
export default RouteArrowFillDuotone;
export type { RouteArrowFillDuotoneProps };
