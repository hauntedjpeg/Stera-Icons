import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-fill-duotone" {...props}>
      <path d="M14.75 16c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25H5.88V16zM10.75 9.75c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25H5.88v-4.5zM17.75 3.5c.69 0 1.25.56 1.25 1.25v2C19 7.44 18.44 8 17.75 8H5.88V3.5z" opacity={0.4} />
        <path d="M5 2.13c.48 0 .88.39.88.87v18a.88.88 0 0 1-1.75 0V3c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

ChartBarRowFillDuotone.displayName = 'ChartBarRowFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarRowFillDuotone, ChartBarRowFillDuotone as ChartBarRowFillDuotoneIcon, ChartBarRowFillDuotone as SiChartBarRowFillDuotone };
export default ChartBarRowFillDuotone;
export type { ChartBarRowFillDuotoneProps };
