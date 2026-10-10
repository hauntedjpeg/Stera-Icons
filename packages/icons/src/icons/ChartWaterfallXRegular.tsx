import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartWaterfallXRegularProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallXRegular = memo(
  forwardRef<SVGSVGElement, ChartWaterfallXRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 19.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M6.08 7.75c1.1 0 2 .9 2 2v5.5c0 1.1-.9 2-2 2h-.83c-1.1 0-2-.9-2-2v-5.5c0-1.1.9-2 2-2zm-.83 1.5c-.28 0-.5.22-.5.5v5.5c0 .28.22.5.5.5h.83c.28 0 .5-.22.5-.5v-5.5c0-.28-.22-.5-.5-.5zM18.75 3.25c1.1 0 2 .9 2 2v7.5c0 1.1-.9 2-2 2h-.83c-1.1 0-2-.9-2-2v-7.5c0-1.1.9-2 2-2zm-.83 1.5c-.28 0-.5.22-.5.5v7.5c0 .28.22.5.5.5h.83c.28 0 .5-.22.5-.5v-7.5c0-.28-.22-.5-.5-.5zM12.42 6.25c1.1 0 2 .9 2 2v3.5c0 1.1-.9 2-2 2h-.84c-1.1 0-2-.9-2-2v-3.5c0-1.1.9-2 2-2zm-.84 1.5c-.28 0-.5.22-.5.5v3.5c0 .28.22.5.5.5h.84c.28 0 .5-.22.5-.5v-3.5c0-.28-.22-.5-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartWaterfallXRegular.displayName = 'ChartWaterfallXRegular';

// Triple export pattern
export { ChartWaterfallXRegular, ChartWaterfallXRegular as ChartWaterfallXRegularIcon, ChartWaterfallXRegular as SiChartWaterfallXRegular };
export default ChartWaterfallXRegular;
export type { ChartWaterfallXRegularProps };
