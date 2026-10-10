import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowRegularProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowRegular = memo(
  forwardRef<SVGSVGElement, ChartBarRowRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5 2.25c.41 0 .75.34.75.75v.25h12c1.1 0 2 .9 2 2v2.83c0 1.1-.9 2-2 2h-5.07q.07.24.07.5v2.84q0 .26-.07.5h1.57c1.1 0 2 .9 2 2v2.83c0 1.1-.9 2-2 2h-8.5V21c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3c0-.41.34-.75.75-.75m.75 17h8.5c.28 0 .5-.22.5-.5v-2.83c0-.28-.22-.5-.5-.5h-8.5zm0-5.33h5c.28 0 .5-.23.5-.5v-2.84c0-.27-.22-.5-.5-.5h-5zm0-5.34h12c.28 0 .5-.22.5-.5V5.25c0-.28-.22-.5-.5-.5h-12z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartBarRowRegular.displayName = 'ChartBarRowRegular';

// Triple export pattern
export { ChartBarRowRegular, ChartBarRowRegular as ChartBarRowRegularIcon, ChartBarRowRegular as SiChartBarRowRegular };
export default ChartBarRowRegular;
export type { ChartBarRowRegularProps };
