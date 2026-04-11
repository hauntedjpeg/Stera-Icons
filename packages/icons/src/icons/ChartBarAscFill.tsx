import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarAscFillProps = Omit<IconBaseProps, 'children'>;

const ChartBarAscFill = memo(
  forwardRef<SVGSVGElement, ChartBarAscFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.25 5c.69 0 1.25.56 1.25 1.25v11.88h.5a.88.88 0 0 1 0 1.75H3a.88.88 0 0 1 0-1.75h.5v-4.88c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v4.88h1.75V9.24C9.75 8.56 10.31 8 11 8h2c.69 0 1.25.56 1.25 1.25v8.88H16V6.24c0-.69.56-1.25 1.25-1.25z" />
    </IconBase>
  ))
);

ChartBarAscFill.displayName = 'ChartBarAscFill';

// Triple export pattern (lucide-react style)
export { ChartBarAscFill, ChartBarAscFill as ChartBarAscFillIcon, ChartBarAscFill as SiChartBarAscFill };
export default ChartBarAscFill;
export type { ChartBarAscFillProps };
