import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartCandleAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartCandleAltFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartCandleAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.88 20a.88.88 0 0 1-1.75 0v-1.25h1.75zM20.88 19a.88.88 0 0 1-1.75 0v-1.25h1.75zM12.88 18a.88.88 0 0 1-1.76 0v-3.25h1.76zM4 5.13c.48 0 .88.39.88.87v3.25H3.13V6c0-.48.39-.87.87-.87M12 5.13c.48 0 .88.39.88.87v1.25h-1.76V6c0-.48.4-.87.88-.87M20 3.13c.48 0 .88.39.88.87v1.25h-1.75V4c0-.48.39-.87.87-.87" opacity={0.4} />
        <path d="M5 9.25c.97 0 1.75.78 1.75 1.75v6c0 .97-.78 1.75-1.75 1.75H3c-.97 0-1.75-.78-1.75-1.75v-6c0-.97.78-1.75 1.75-1.75zM21 5.25c.97 0 1.75.78 1.75 1.75v9c0 .97-.78 1.75-1.75 1.75h-2c-.97 0-1.75-.78-1.75-1.75V7c0-.97.78-1.75 1.75-1.75zM13 7.25c.97 0 1.75.78 1.75 1.75v4c0 .97-.78 1.75-1.75 1.75h-2c-.97 0-1.75-.78-1.75-1.75V9c0-.97.78-1.75 1.75-1.75z" />
    </IconBase>
  ))
);

ChartCandleAltFillDuotone.displayName = 'ChartCandleAltFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartCandleAltFillDuotone, ChartCandleAltFillDuotone as ChartCandleAltFillDuotoneIcon, ChartCandleAltFillDuotone as SiChartCandleAltFillDuotone };
export default ChartCandleAltFillDuotone;
export type { ChartCandleAltFillDuotoneProps };
