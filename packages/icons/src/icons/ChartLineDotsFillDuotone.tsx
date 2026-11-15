import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineDotsFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineDotsFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineDotsFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.2 11.35q.23.3.55.52.32.21.7.31L5.8 16.15q-.23-.3-.55-.52-.32-.21-.7-.31zM13.65 12.2q-.3.23-.52.55-.21.32-.31.7l-2.47-1.65q.3-.23.52-.55.21-.32.31-.7zM18.2 7.85q.23.3.55.52.32.21.7.31l-2.65 3.97q-.23-.3-.55-.52-.32-.21-.7-.31z" opacity={0.4} />
        <path d="M4 15.25q.7.01 1.25.38c.6.4 1 1.09 1 1.87 0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25 0-1.24 1-2.25 2.25-2.25M15 11.75q.7.01 1.25.38c.6.4 1 1.09 1 1.87 0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25q.01-.7.38-1.25c.4-.6 1.09-1 1.87-1M9 7.75c1.24 0 2.25 1 2.25 2.25q-.01.7-.38 1.25c-.4.6-1.09 1-1.87 1q-.7-.01-1.25-.38c-.6-.4-1-1.09-1-1.87 0-1.24 1-2.25 2.25-2.25M20 4.25c1.24 0 2.25 1 2.25 2.25 0 1.24-1 2.25-2.25 2.25q-.7-.01-1.25-.38c-.6-.4-1-1.09-1-1.87 0-1.24 1-2.25 2.25-2.25" />
    </IconBase>
  ))
);

ChartLineDotsFillDuotone.displayName = 'ChartLineDotsFillDuotone';

// Triple export pattern
export { ChartLineDotsFillDuotone, ChartLineDotsFillDuotone as ChartLineDotsFillDuotoneIcon, ChartLineDotsFillDuotone as SiChartLineDotsFillDuotone };
export default ChartLineDotsFillDuotone;
export type { ChartLineDotsFillDuotoneProps };
