import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RouteArrowRegularProps = Omit<IconBaseProps, 'children'>;

const RouteArrowRegular = memo(
  forwardRef<SVGSVGElement, RouteArrowRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.5 2.25c1.54 0 2.82 1.07 3.16 2.5h5.09c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5h8.94l-1.72-1.72c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l3 3q.22.22.22.53t-.22.53l-3 3c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l1.72-1.72H9.25c-2.2 0-4-1.8-4-4s1.8-4 4-4h4.5c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5H8.66c-.34 1.43-1.62 2.5-3.16 2.5-1.8 0-3.25-1.46-3.25-3.25 0-1.8 1.46-3.25 3.25-3.25m0 1.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75" clipRule="evenodd" />
    </IconBase>
  ))
);

RouteArrowRegular.displayName = 'RouteArrowRegular';

// Triple export pattern
export { RouteArrowRegular, RouteArrowRegular as RouteArrowRegularIcon, RouteArrowRegular as SiRouteArrowRegular };
export default RouteArrowRegular;
export type { RouteArrowRegularProps };
