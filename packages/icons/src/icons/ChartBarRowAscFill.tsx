import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowAscFillProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowAscFill = memo(
  forwardRef<SVGSVGElement, ChartBarRowAscFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-asc-fill" {...props}>
      <path d="M5 2.13c.48 0 .88.39.88.87v.5h4.87c.69 0 1.25.56 1.25 1.25v2C12 7.44 11.44 8 10.75 8H5.88v1.75h8.87c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25H5.88V16h11.87c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25H5.88v.5a.88.88 0 0 1-1.75 0V3c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

ChartBarRowAscFill.displayName = 'ChartBarRowAscFill';

// Triple export pattern (lucide-react style)
export { ChartBarRowAscFill, ChartBarRowAscFill as ChartBarRowAscFillIcon, ChartBarRowAscFill as SiChartBarRowAscFill };
export default ChartBarRowAscFill;
export type { ChartBarRowAscFillProps };
