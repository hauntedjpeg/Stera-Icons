import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarAscFillProps = Omit<IconBaseProps, 'children'>;

const ChartBarAscFill = memo(
  forwardRef<SVGSVGElement, ChartBarAscFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.25 5c.69 0 1.25.56 1.25 1.25v11.88h.5c.48 0 .88.39.88.87s-.4.88-.88.88H3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h.5v-4.88c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v4.88h1.75V9.24C9.75 8.56 10.31 8 11 8h2c.69 0 1.25.56 1.25 1.25v8.88H16V6.24c0-.69.56-1.25 1.25-1.25z" />
    </IconBase>
  ))
);

ChartBarAscFill.displayName = 'ChartBarAscFill';

// Triple export pattern
export { ChartBarAscFill, ChartBarAscFill as ChartBarAscFillIcon, ChartBarAscFill as SiChartBarAscFill };
export default ChartBarAscFill;
export type { ChartBarAscFillProps };
