import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartCandleBoldProps = Omit<IconBaseProps, 'children'>;

const ChartCandleBold = memo(
  forwardRef<SVGSVGElement, ChartCandleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M7 1c.55 0 1 .45 1 1v2h.5C9.88 4 11 5.12 11 6.5v11c0 1.38-1.12 2.5-2.5 2.5H8v2c0 .55-.45 1-1 1s-1-.45-1-1v-2h-.5C4.12 20 3 18.88 3 17.5v-11C3 5.12 4.12 4 5.5 4H6V2c0-.55.45-1 1-1M5.5 6c-.28 0-.5.22-.5.5v11c0 .28.22.5.5.5h3c.28 0 .5-.22.5-.5v-11c0-.28-.22-.5-.5-.5zM17 3c.55 0 1 .45 1 1v2h.5C19.88 6 21 7.12 21 8.5v7c0 1.38-1.12 2.5-2.5 2.5H18v2c0 .55-.45 1-1 1s-1-.45-1-1v-2h-.5c-1.38 0-2.5-1.12-2.5-2.5v-7C13 7.12 14.12 6 15.5 6h.5V4c0-.55.45-1 1-1m-1.5 5c-.28 0-.5.22-.5.5v7c0 .28.22.5.5.5h3c.28 0 .5-.22.5-.5v-7c0-.28-.22-.5-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartCandleBold.displayName = 'ChartCandleBold';

// Triple export pattern
export { ChartCandleBold, ChartCandleBold as ChartCandleBoldIcon, ChartCandleBold as SiChartCandleBold };
export default ChartCandleBold;
export type { ChartCandleBoldProps };
