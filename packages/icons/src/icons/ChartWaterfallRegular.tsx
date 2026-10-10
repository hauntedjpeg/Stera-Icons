import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartWaterfallRegularProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallRegular = memo(
  forwardRef<SVGSVGElement, ChartWaterfallRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M4.75 11.25c1.1 0 2 .9 2 2v5.5c0 1.1-.9 2-2 2h-1.5c-1.1 0-2-.9-2-2v-5.5c0-1.1.9-2 2-2zm-1.5 1.5c-.28 0-.5.22-.5.5v5.5c0 .28.22.5.5.5h1.5c.28 0 .5-.22.5-.5v-5.5c0-.28-.22-.5-.5-.5zM20.75 3.25c1.1 0 2 .9 2 2v9.5c0 1.1-.9 2-2 2h-1.5c-1.1 0-2-.9-2-2v-9.5c0-1.1.9-2 2-2zm-1.5 1.5c-.28 0-.5.22-.5.5v9.5c0 .28.22.5.5.5h1.5c.28 0 .5-.22.5-.5v-9.5c0-.28-.22-.5-.5-.5zM12.75 8.25c1.1 0 2 .9 2 2v3.5c0 1.1-.9 2-2 2h-1.5c-1.1 0-2-.9-2-2v-3.5c0-1.1.9-2 2-2zm-1.5 1.5c-.28 0-.5.22-.5.5v3.5c0 .28.22.5.5.5h1.5c.28 0 .5-.22.5-.5v-3.5c0-.28-.22-.5-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartWaterfallRegular.displayName = 'ChartWaterfallRegular';

// Triple export pattern
export { ChartWaterfallRegular, ChartWaterfallRegular as ChartWaterfallRegularIcon, ChartWaterfallRegular as SiChartWaterfallRegular };
export default ChartWaterfallRegular;
export type { ChartWaterfallRegularProps };
