import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheeseRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheeseRegularDuotone = memo(
  forwardRef<SVGSVGElement, CheeseRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.56 3.4a.8.8 0 0 1 .64-.12c1 .27 2.53.9 3.98 1.95a9.4 9.4 0 0 1 3.53 4.53.75.75 0 0 0-.8-.5l-.99.1a8.4 8.4 0 0 0-2.62-2.91 12 12 0 0 0-3.16-1.62l-8.41 6.11-2.81.31a1 1 0 0 0-.36.15z" opacity={.4} />
        <path fillRule="evenodd" d="M20.92 9.26a.75.75 0 0 1 .83.74v8c0 .38-.29.7-.67.75l-7 .77a.75.75 0 0 1-.83-.74V18a1.25 1.25 0 1 0-2.5 0v1.22c0 .38-.29.7-.67.75l-7 .78a.75.75 0 0 1-.83-.75v-2c0-.41.34-.75.75-.75a1.25 1.25 0 0 0 0-2.5.75.75 0 0 1-.75-.75v-2c0-.38.29-.7.67-.74l10-1.12a.75.75 0 0 1 .83.79A1.26 1.26 0 0 0 15 12.25c.69 0 1.25-.56 1.25-1.25v-.56c0-.38.29-.7.67-.74zm-3.18 1.86a2.75 2.75 0 0 1-5.4.6l-8.59.95v.69a2.75 2.75 0 0 1 0 5.28v.52l5.5-.61V18a2.75 2.75 0 0 1 5.5-.06l5.5-.61v-6.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CheeseRegularDuotone.displayName = 'CheeseRegularDuotone';

// Triple export pattern
export { CheeseRegularDuotone, CheeseRegularDuotone as CheeseRegularDuotoneIcon, CheeseRegularDuotone as SiCheeseRegularDuotone };
export default CheeseRegularDuotone;
export type { CheeseRegularDuotoneProps };
