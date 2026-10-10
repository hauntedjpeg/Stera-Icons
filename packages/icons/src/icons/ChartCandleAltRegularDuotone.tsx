import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartCandleAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartCandleAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartCandleAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.75 20c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.25h1.5zM20.75 19c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.25h1.5zM12.75 18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.25h1.5zM4 5.25c.41 0 .75.34.75.75v3.25h-1.5V6c0-.41.34-.75.75-.75M12 5.25c.41 0 .75.34.75.75v1.25h-1.5V6c0-.41.34-.75.75-.75M20 3.25c.41 0 .75.34.75.75v1.25h-1.5V4c0-.41.34-.75.75-.75" opacity={0.4} />
        <path fillRule="evenodd" d="M4.75 9.25c1.1 0 2 .9 2 2v5.5c0 1.1-.9 2-2 2h-1.5c-1.1 0-2-.9-2-2v-5.5c0-1.1.9-2 2-2zm-1.5 1.5c-.28 0-.5.22-.5.5v5.5c0 .28.22.5.5.5h1.5c.28 0 .5-.22.5-.5v-5.5c0-.28-.22-.5-.5-.5zM20.75 5.25c1.1 0 2 .9 2 2v8.5c0 1.1-.9 2-2 2h-1.5c-1.1 0-2-.9-2-2v-8.5c0-1.1.9-2 2-2zm-1.5 1.5c-.28 0-.5.22-.5.5v8.5c0 .28.22.5.5.5h1.5c.28 0 .5-.22.5-.5v-8.5c0-.28-.22-.5-.5-.5zM12.75 7.25c1.1 0 2 .9 2 2v3.5c0 1.1-.9 2-2 2h-1.5c-1.1 0-2-.9-2-2v-3.5c0-1.1.9-2 2-2zm-1.5 1.5c-.28 0-.5.22-.5.5v3.5c0 .28.22.5.5.5h1.5c.28 0 .5-.22.5-.5v-3.5c0-.28-.22-.5-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartCandleAltRegularDuotone.displayName = 'ChartCandleAltRegularDuotone';

// Triple export pattern
export { ChartCandleAltRegularDuotone, ChartCandleAltRegularDuotone as ChartCandleAltRegularDuotoneIcon, ChartCandleAltRegularDuotone as SiChartCandleAltRegularDuotone };
export default ChartCandleAltRegularDuotone;
export type { ChartCandleAltRegularDuotoneProps };
