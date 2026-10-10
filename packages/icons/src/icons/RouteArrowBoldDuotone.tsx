import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RouteArrowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RouteArrowBoldDuotone = memo(
  forwardRef<SVGSVGElement, RouteArrowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.75 4.5C16.1 4.5 18 6.4 18 8.75S16.1 13 13.75 13h-4.5C8.01 13 7 14 7 15.25c0 1.24 1 2.25 2.25 2.25h8.34l1 1-1 1H9.25C6.9 19.5 5 17.6 5 15.25S6.9 11 9.25 11h4.5C14.99 11 16 10 16 8.75c0-1.24-1-2.25-2.25-2.25h-4.9q.15-.48.15-1t-.15-1z" opacity={.4} />
        <path d="M16.3 14.8c.38-.4 1.02-.4 1.4 0l3 3q.3.28.3.7t-.3.7l-3 3c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l2.29-2.3-2.3-2.3c-.39-.38-.39-1.02 0-1.4" />
        <path fillRule="evenodd" d="M5.5 2C7.43 2 9 3.57 9 5.5S7.43 9 5.5 9 2 7.43 2 5.5 3.57 2 5.5 2m0 2C4.67 4 4 4.67 4 5.5S4.67 7 5.5 7 7 6.33 7 5.5 6.33 4 5.5 4" clipRule="evenodd" />
    </IconBase>
  ))
);

RouteArrowBoldDuotone.displayName = 'RouteArrowBoldDuotone';

// Triple export pattern
export { RouteArrowBoldDuotone, RouteArrowBoldDuotone as RouteArrowBoldDuotoneIcon, RouteArrowBoldDuotone as SiRouteArrowBoldDuotone };
export default RouteArrowBoldDuotone;
export type { RouteArrowBoldDuotoneProps };
