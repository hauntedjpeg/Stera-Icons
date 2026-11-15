import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartCandle3RegularProps = Omit<IconBaseProps, 'children'>;

const ChartCandle3Regular = memo(
  forwardRef<SVGSVGElement, ChartCandle3RegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M4 5.25c.41 0 .75.34.75.75v3.25c1.1 0 2 .9 2 2v5.5c0 1.1-.9 2-2 2V20c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.25c-1.1 0-2-.9-2-2v-5.5c0-1.1.9-2 2-2V6c0-.41.34-.75.75-.75m-.75 5.5c-.28 0-.5.22-.5.5v5.5c0 .28.22.5.5.5h1.5c.28 0 .5-.22.5-.5v-5.5c0-.28-.22-.5-.5-.5zM20 3.25c.41 0 .75.34.75.75v1.25c1.1 0 2 .9 2 2v8.5c0 1.1-.9 2-2 2V19c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.25c-1.1 0-2-.9-2-2v-8.5c0-1.1.9-2 2-2V4c0-.41.34-.75.75-.75m-.75 3.5c-.28 0-.5.22-.5.5v8.5c0 .28.22.5.5.5h1.5c.28 0 .5-.22.5-.5v-8.5c0-.28-.22-.5-.5-.5zM12 5.25c.41 0 .75.34.75.75v1.25c1.1 0 2 .9 2 2v3.5c0 1.1-.9 2-2 2V18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.25c-1.1 0-2-.9-2-2v-3.5c0-1.1.9-2 2-2V6c0-.41.34-.75.75-.75m-.75 3.5c-.28 0-.5.22-.5.5v3.5c0 .28.22.5.5.5h1.5c.28 0 .5-.22.5-.5v-3.5c0-.28-.22-.5-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartCandle3Regular.displayName = 'ChartCandle3Regular';

// Triple export pattern
export { ChartCandle3Regular, ChartCandle3Regular as ChartCandle3RegularIcon, ChartCandle3Regular as SiChartCandle3Regular };
export default ChartCandle3Regular;
export type { ChartCandle3RegularProps };
