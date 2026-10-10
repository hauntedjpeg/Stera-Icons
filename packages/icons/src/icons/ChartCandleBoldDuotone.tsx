import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartCandleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartCandleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartCandleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 22c0 .55-.45 1-1 1s-1-.45-1-1v-2h2zM18 20c0 .55-.45 1-1 1s-1-.45-1-1v-2h2zM17 3c.55 0 1 .45 1 1v2h-2V4c0-.55.45-1 1-1M7 1c.55 0 1 .45 1 1v2H6V2c0-.55.45-1 1-1" opacity={0.4} />
        <path fillRule="evenodd" d="M8.5 4C9.88 4 11 5.12 11 6.5v11c0 1.38-1.12 2.5-2.5 2.5h-3C4.12 20 3 18.88 3 17.5v-11C3 5.12 4.12 4 5.5 4zm-3 2c-.28 0-.5.22-.5.5v11c0 .28.22.5.5.5h3c.28 0 .5-.22.5-.5v-11c0-.28-.22-.5-.5-.5zM18.5 6C19.88 6 21 7.12 21 8.5v7c0 1.38-1.12 2.5-2.5 2.5h-3c-1.38 0-2.5-1.12-2.5-2.5v-7C13 7.12 14.12 6 15.5 6zm-3 2c-.28 0-.5.22-.5.5v7c0 .28.22.5.5.5h3c.28 0 .5-.22.5-.5v-7c0-.28-.22-.5-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartCandleBoldDuotone.displayName = 'ChartCandleBoldDuotone';

// Triple export pattern
export { ChartCandleBoldDuotone, ChartCandleBoldDuotone as ChartCandleBoldDuotoneIcon, ChartCandleBoldDuotone as SiChartCandleBoldDuotone };
export default ChartCandleBoldDuotone;
export type { ChartCandleBoldDuotoneProps };
