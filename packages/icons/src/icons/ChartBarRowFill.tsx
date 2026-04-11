import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowFillProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowFill = memo(
  forwardRef<SVGSVGElement, ChartBarRowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 2.13c.48 0 .88.39.88.87v.5h11.87c.69 0 1.25.56 1.25 1.25v2C19 7.44 18.44 8 17.75 8H5.88v1.75h4.87c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25H5.88V16h8.87c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25H5.88v.5a.88.88 0 0 1-1.75 0V3c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

ChartBarRowFill.displayName = 'ChartBarRowFill';

// Triple export pattern (lucide-react style)
export { ChartBarRowFill, ChartBarRowFill as ChartBarRowFillIcon, ChartBarRowFill as SiChartBarRowFill };
export default ChartBarRowFill;
export type { ChartBarRowFillProps };
