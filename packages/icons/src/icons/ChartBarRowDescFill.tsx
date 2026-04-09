import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowDescFillProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowDescFill = memo(
  forwardRef<SVGSVGElement, ChartBarRowDescFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-desc-fill" {...props}>
      <path d="M5 2.13c.48 0 .88.39.88.87v.5h11.87c.69 0 1.25.56 1.25 1.25v2C19 7.44 18.44 8 17.75 8H5.88v1.75h8.87c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25H5.88V16h4.87c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25H5.88v.5a.88.88 0 0 1-1.75 0V3c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

ChartBarRowDescFill.displayName = 'ChartBarRowDescFill';

// Triple export pattern (lucide-react style)
export { ChartBarRowDescFill, ChartBarRowDescFill as ChartBarRowDescFillIcon, ChartBarRowDescFill as SiChartBarRowDescFill };
export default ChartBarRowDescFill;
export type { ChartBarRowDescFillProps };
