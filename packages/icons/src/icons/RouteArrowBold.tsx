import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RouteArrowBoldProps = Omit<IconBaseProps, 'children'>;

const RouteArrowBold = memo(
  forwardRef<SVGSVGElement, RouteArrowBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.5 2c1.59 0 2.92 1.05 3.35 2.5h4.9C16.1 4.5 18 6.4 18 8.75S16.1 13 13.75 13h-4.5C8.01 13 7 14 7 15.25c0 1.24 1 2.25 2.25 2.25h8.34l-1.3-1.3c-.39-.38-.39-1.02 0-1.4.4-.4 1.03-.4 1.42 0l3 3q.28.28.29.7t-.3.7l-3 3c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l1.29-1.3H9.25C6.9 19.5 5 17.6 5 15.25S6.9 11 9.25 11h4.5C14.99 11 16 10 16 8.75c0-1.24-1-2.25-2.25-2.25h-4.9C8.42 7.95 7.1 9 5.5 9 3.57 9 2 7.43 2 5.5S3.57 2 5.5 2m0 2C4.67 4 4 4.67 4 5.5S4.67 7 5.5 7 7 6.33 7 5.5 6.33 4 5.5 4" clipRule="evenodd" />
    </IconBase>
  ))
);

RouteArrowBold.displayName = 'RouteArrowBold';

// Triple export pattern
export { RouteArrowBold, RouteArrowBold as RouteArrowBoldIcon, RouteArrowBold as SiRouteArrowBold };
export default RouteArrowBold;
export type { RouteArrowBoldProps };
