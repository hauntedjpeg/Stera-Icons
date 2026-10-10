import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarDescFillProps = Omit<IconBaseProps, 'children'>;

const ChartBarDescFill = memo(
  forwardRef<SVGSVGElement, ChartBarDescFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.75 5C7.44 5 8 5.56 8 6.25v11.88h1.75V9.24C9.75 8.56 10.31 8 11 8h2c.69 0 1.25.56 1.25 1.25v8.88H16v-4.88c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v4.88h.5c.48 0 .88.39.88.87s-.4.88-.88.88H3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h.5V6.24C3.5 5.56 4.06 5 4.75 5z" />
    </IconBase>
  ))
);

ChartBarDescFill.displayName = 'ChartBarDescFill';

// Triple export pattern
export { ChartBarDescFill, ChartBarDescFill as ChartBarDescFillIcon, ChartBarDescFill as SiChartBarDescFill };
export default ChartBarDescFill;
export type { ChartBarDescFillProps };
