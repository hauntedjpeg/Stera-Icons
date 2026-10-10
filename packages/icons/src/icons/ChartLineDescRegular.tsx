import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineDescRegularProps = Omit<IconBaseProps, 'children'>;

const ChartLineDescRegular = memo(
  forwardRef<SVGSVGElement, ChartLineDescRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 18.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM3.52 4.42c.32-.26.8-.22 1.06.1l4.96 5.96 4.82-2.16c.26-.12.56-.08.78.1l.09.08 5.33 6c.28.31.25.79-.06 1.06-.31.28-.79.25-1.06-.06l-4.97-5.6-4.83 2.18c-.3.14-.67.06-.88-.2l-5.34-6.4c-.26-.32-.22-.8.1-1.06" />
    </IconBase>
  ))
);

ChartLineDescRegular.displayName = 'ChartLineDescRegular';

// Triple export pattern
export { ChartLineDescRegular, ChartLineDescRegular as ChartLineDescRegularIcon, ChartLineDescRegular as SiChartLineDescRegular };
export default ChartLineDescRegular;
export type { ChartLineDescRegularProps };
