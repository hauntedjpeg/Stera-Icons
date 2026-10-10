import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartPieAltFillProps = Omit<IconBaseProps, 'children'>;

const ChartPieAltFill = memo(
  forwardRef<SVGSVGElement, ChartPieAltFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.16 2.9c.44-.19.96.02 1.15.47s-.02.95-.47 1.14C5.92 5.75 3.88 8.63 3.88 12c0 4.49 3.63 8.13 8.12 8.13q1.63-.02 3.06-.6c.44-.18.95.04 1.14.48.18.45-.04.96-.49 1.14q-1.73.72-3.71.73c-5.45 0-9.87-4.43-9.87-9.88 0-4.1 2.49-7.6 6.03-9.1" />
        <path d="M20.54 9.68c.24-.1.52-.08.75.04q.37.21.44.62.14.82.14 1.66c0 2.73-1.1 5.2-2.89 6.98-.34.35-.9.35-1.23 0l-4.84-4.83c-.2-.2-.3-.5-.24-.8.06-.28.26-.52.53-.63zM12 2.13c3.33 0 6.27 1.64 8.05 4.16.16.21.2.49.13.75q-.12.4-.5.56l-7.34 3.04q-.44.17-.83-.08-.37-.26-.38-.73V3c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

ChartPieAltFill.displayName = 'ChartPieAltFill';

// Triple export pattern
export { ChartPieAltFill, ChartPieAltFill as ChartPieAltFillIcon, ChartPieAltFill as SiChartPieAltFill };
export default ChartPieAltFill;
export type { ChartPieAltFillProps };
