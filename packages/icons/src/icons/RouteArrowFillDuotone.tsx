import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RouteArrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RouteArrowFillDuotone = memo(
  forwardRef<SVGSVGElement, RouteArrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="route-arrow-fill-duotone" {...props}>
      <path d="M13.75 4.63a4.12 4.12 0 1 1 0 8.25h-4.5a2.37 2.37 0 1 0 0 4.74h6.88v1.75H9.25a4.12 4.12 0 1 1 0-8.25h4.5a2.37 2.37 0 1 0 0-4.74H8.76a3.4 3.4 0 0 0 0-1.75z" opacity={.4} />
        <path d="M16.67 14.7c.32-.14.7-.07.95.18l3 3a.9.9 0 0 1 0 1.24l-3 3a.88.88 0 0 1-1.5-.62v-6c0-.35.22-.67.54-.8M5.5 2.13a3.38 3.38 0 1 1 0 6.75 3.38 3.38 0 0 1 0-6.76" />
    </IconBase>
  ))
);

RouteArrowFillDuotone.displayName = 'RouteArrowFillDuotone';

// Triple export pattern (lucide-react style)
export { RouteArrowFillDuotone, RouteArrowFillDuotone as RouteArrowFillDuotoneIcon, RouteArrowFillDuotone as SiRouteArrowFillDuotone };
export default RouteArrowFillDuotone;
export type { RouteArrowFillDuotoneProps };
