import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartCandleAltFillProps = Omit<IconBaseProps, 'children'>;

const ChartCandleAltFill = memo(
  forwardRef<SVGSVGElement, ChartCandleAltFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 5.13c.48 0 .88.39.88.87v3.25H5c.97 0 1.75.78 1.75 1.75v6c0 .97-.78 1.75-1.75 1.75h-.12V20a.88.88 0 0 1-1.75 0v-1.25H3c-.97 0-1.75-.78-1.75-1.75v-6c0-.97.78-1.75 1.75-1.75h.13V6c0-.48.39-.87.87-.87M20 3.13c.48 0 .88.39.88.87v1.25H21c.97 0 1.75.78 1.75 1.75v9c0 .97-.78 1.75-1.75 1.75h-.12V19a.88.88 0 0 1-1.75 0v-1.25H19c-.97 0-1.75-.78-1.75-1.75V7c0-.97.78-1.75 1.75-1.75h.13V4c0-.48.39-.87.87-.87M12 5.13c.48 0 .88.39.88.87v1.25H13c.97 0 1.75.78 1.75 1.75v4c0 .97-.78 1.75-1.75 1.75h-.12V18a.88.88 0 0 1-1.76 0v-3.25H11c-.97 0-1.75-.78-1.75-1.75V9c0-.97.78-1.75 1.75-1.75h.13V6c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

ChartCandleAltFill.displayName = 'ChartCandleAltFill';

// Triple export pattern (lucide-react style)
export { ChartCandleAltFill, ChartCandleAltFill as ChartCandleAltFillIcon, ChartCandleAltFill as SiChartCandleAltFill };
export default ChartCandleAltFill;
export type { ChartCandleAltFillProps };
