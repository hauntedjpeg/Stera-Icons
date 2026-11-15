import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineDotsFillProps = Omit<IconBaseProps, 'children'>;

const ChartLineDotsFill = memo(
  forwardRef<SVGSVGElement, ChartLineDotsFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20 4.25c1.24 0 2.25 1 2.25 2.25 0 1.24-1 2.25-2.25 2.25q-.29 0-.55-.07l-2.65 3.97q.43.58.45 1.35c0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25q0-.3.07-.55l-2.47-1.65q-.58.43-1.35.45-.29 0-.55-.07L5.8 16.15q.44.58.45 1.35c0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25 0-1.24 1-2.25 2.25-2.25q.28 0 .55.07l2.65-3.97q-.44-.58-.45-1.35c0-1.24 1-2.25 2.25-2.25 1.24 0 2.25 1 2.25 2.25q0 .28-.07.55l2.47 1.65q.58-.43 1.35-.45.28 0 .55.07l2.65-3.97q-.43-.58-.45-1.35c0-1.24 1-2.25 2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartLineDotsFill.displayName = 'ChartLineDotsFill';

// Triple export pattern
export { ChartLineDotsFill, ChartLineDotsFill as ChartLineDotsFillIcon, ChartLineDotsFill as SiChartLineDotsFill };
export default ChartLineDotsFill;
export type { ChartLineDotsFillProps };
