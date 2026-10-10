import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SwatchBookRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SwatchBookRegularDuotone = memo(
  forwardRef<SVGSVGElement, SwatchBookRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.13 5.16c1.07-1.08 2.81-1.08 3.89 0l2.82 2.82c1.08 1.08 1.08 2.82 0 3.9l-.37.37H19c1.52 0 2.75 1.23 2.75 2.75v4c0 1.52-1.23 2.75-2.75 2.75H6.79 7c2.62 0 4.75-2.13 4.75-4.75v-.15l6.03-6.04c.5-.49.5-1.28 0-1.76l-2.82-2.83c-.5-.5-1.28-.5-1.77 0l-1.44 1.43V5.53zm-1.66 15.09H19c.69 0 1.25-.56 1.25-1.25v-4c0-.69-.56-1.25-1.25-1.25h-2.03z" clipRule="evenodd" opacity={.4} />
        <path d="M7 15.75c.69 0 1.25.56 1.25 1.25S7.69 18.25 7 18.25 5.75 17.69 5.75 17s.56-1.25 1.25-1.25" />
        <path fillRule="evenodd" d="M9 2.25c1.52 0 2.75 1.23 2.75 2.75v12c0 2.62-2.13 4.75-4.75 4.75S2.25 19.62 2.25 17V5c0-1.52 1.23-2.75 2.75-2.75zm-4 1.5c-.69 0-1.25.56-1.25 1.25v12c0 1.8 1.46 3.25 3.25 3.25 1.8 0 3.25-1.46 3.25-3.25V5c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

SwatchBookRegularDuotone.displayName = 'SwatchBookRegularDuotone';

// Triple export pattern
export { SwatchBookRegularDuotone, SwatchBookRegularDuotone as SwatchBookRegularDuotoneIcon, SwatchBookRegularDuotone as SiSwatchBookRegularDuotone };
export default SwatchBookRegularDuotone;
export type { SwatchBookRegularDuotoneProps };
