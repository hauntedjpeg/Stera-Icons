import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartPieRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartPieRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartPieRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.79 2.8c.39-.14.82.06.95.45.14.4-.07.82-.46.96C6.06 5.33 3.75 8.4 3.75 12c0 4.56 3.7 8.25 8.25 8.25 3.6 0 6.67-2.31 7.8-5.53.13-.4.56-.6.95-.46s.6.56.46.95c-1.33 3.8-4.95 6.54-9.21 6.54-5.38 0-9.75-4.37-9.75-9.75 0-4.26 2.73-7.88 6.54-9.2" opacity={.4} />
        <path fillRule="evenodd" d="M13.08 2.31q1.37.15 2.65.68 1.79.75 3.16 2.12t2.12 3.16q.53 1.28.68 2.65c.12 1.05-.75 1.83-1.69 1.83h-7c-.97 0-1.75-.78-1.75-1.75V4c0-.94.78-1.8 1.83-1.69m-.17 1.5q-.04-.01-.1.03-.05.05-.06.16v7q.02.23.25.25h7q.11 0 .16-.06.04-.06.04-.1-.13-1.16-.58-2.25-.62-1.5-1.79-2.67-1.16-1.16-2.67-1.8-1.09-.44-2.25-.57" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartPieRegularDuotone.displayName = 'ChartPieRegularDuotone';

// Triple export pattern
export { ChartPieRegularDuotone, ChartPieRegularDuotone as ChartPieRegularDuotoneIcon, ChartPieRegularDuotone as SiChartPieRegularDuotone };
export default ChartPieRegularDuotone;
export type { ChartPieRegularDuotoneProps };
