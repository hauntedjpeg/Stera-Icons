import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartPieAltRegularProps = Omit<IconBaseProps, 'children'>;

const ChartPieAltRegular = memo(
  forwardRef<SVGSVGElement, ChartPieAltRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.2 3.02c.39-.17.83.01.99.4.16.38-.02.82-.4.98C5.83 5.65 3.75 8.58 3.75 12c0 4.56 3.7 8.25 8.25 8.25q1.66 0 3.1-.6c.39-.16.82.03.98.41.15.38-.03.82-.41.98q-1.71.7-3.67.71c-5.38 0-9.75-4.37-9.75-9.75 0-4.04 2.46-7.5 5.96-8.98" />
        <path fillRule="evenodd" d="M12 2.25c4.06 0 7.55 2.49 9.01 6.02q.73 1.73.74 3.73c0 2.7-1.1 5.13-2.86 6.9-.29.29-.76.29-1.06 0l-6.36-6.37q-.21-.22-.22-.53V3c0-.41.34-.75.75-.75m1.32 10.01 5.02 5.02c1.2-1.43 1.91-3.27 1.91-5.28q0-1.3-.37-2.45zm-.57-1.38 6.55-2.72c-1.27-2.41-3.7-4.12-6.55-4.37z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartPieAltRegular.displayName = 'ChartPieAltRegular';

// Triple export pattern
export { ChartPieAltRegular, ChartPieAltRegular as ChartPieAltRegularIcon, ChartPieAltRegular as SiChartPieAltRegular };
export default ChartPieAltRegular;
export type { ChartPieAltRegularProps };
