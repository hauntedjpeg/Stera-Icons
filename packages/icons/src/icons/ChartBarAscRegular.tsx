import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarAscRegularProps = Omit<IconBaseProps, 'children'>;

const ChartBarAscRegular = memo(
  forwardRef<SVGSVGElement, ChartBarAscRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.75 4.25c1.1 0 2 .9 2 2v12H21c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.25v-5c0-1.1.9-2 2-2h2.83q.26 0 .5.07V9.75c0-1.1.9-2 2-2h2.84q.26 0 .5.07V6.25c0-1.1.9-2 2-2zm-13.5 8.5c-.28 0-.5.22-.5.5v5h3.83v-5c0-.28-.22-.5-.5-.5zm5.33-3.5c-.27 0-.5.22-.5.5v8.5h3.84v-8.5c0-.28-.23-.5-.5-.5zm5.34-3.5c-.28 0-.5.22-.5.5v12h3.83v-12c0-.28-.22-.5-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartBarAscRegular.displayName = 'ChartBarAscRegular';

// Triple export pattern
export { ChartBarAscRegular, ChartBarAscRegular as ChartBarAscRegularIcon, ChartBarAscRegular as SiChartBarAscRegular };
export default ChartBarAscRegular;
export type { ChartBarAscRegularProps };
