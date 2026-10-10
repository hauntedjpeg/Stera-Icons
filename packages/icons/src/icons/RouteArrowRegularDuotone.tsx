import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RouteArrowRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RouteArrowRegularDuotone = memo(
  forwardRef<SVGSVGElement, RouteArrowRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.75 4.75c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5h8.94l.75.75-.75.75H9.25c-2.2 0-4-1.8-4-4s1.8-4 4-4h4.5c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5H8.66q.09-.37.09-.75t-.09-.75z" opacity={.4} />
        <path d="M16.47 14.97c.3-.3.77-.3 1.06 0l3 3c.3.3.3.77 0 1.06l-3 3c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l2.47-2.47-2.47-2.47c-.3-.3-.3-.77 0-1.06" />
        <path fillRule="evenodd" d="M5.5 2.25c1.8 0 3.25 1.46 3.25 3.25 0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25 0-1.8 1.46-3.25 3.25-3.25m0 1.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75" clipRule="evenodd" />
    </IconBase>
  ))
);

RouteArrowRegularDuotone.displayName = 'RouteArrowRegularDuotone';

// Triple export pattern
export { RouteArrowRegularDuotone, RouteArrowRegularDuotone as RouteArrowRegularDuotoneIcon, RouteArrowRegularDuotone as SiRouteArrowRegularDuotone };
export default RouteArrowRegularDuotone;
export type { RouteArrowRegularDuotoneProps };
