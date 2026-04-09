import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowAscFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowAscFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRowAscFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-asc-fill-duotone" {...props}>
      <path d="M17.75 16c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25H5.88V16zM14.75 9.75c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25H5.88v-4.5zM10.75 3.5c.69 0 1.25.56 1.25 1.25v2C12 7.44 11.44 8 10.75 8H5.88V3.5z" opacity={0.4} />
        <path d="M5 2.13c.48 0 .88.39.88.87v18a.88.88 0 0 1-1.75 0V3c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

ChartBarRowAscFillDuotone.displayName = 'ChartBarRowAscFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarRowAscFillDuotone, ChartBarRowAscFillDuotone as ChartBarRowAscFillDuotoneIcon, ChartBarRowAscFillDuotone as SiChartBarRowAscFillDuotone };
export default ChartBarRowAscFillDuotone;
export type { ChartBarRowAscFillDuotoneProps };
