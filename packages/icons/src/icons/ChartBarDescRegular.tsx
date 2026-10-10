import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarDescRegularProps = Omit<IconBaseProps, 'children'>;

const ChartBarDescRegular = memo(
  forwardRef<SVGSVGElement, ChartBarDescRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.08 4.25c1.1 0 2 .9 2 2v1.57q.24-.07.5-.07h2.84c1.1 0 2 .9 2 2v1.57q.23-.07.5-.07h2.83c1.1 0 2 .9 2 2v5H21c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.25v-12c0-1.1.9-2 2-2zm-2.83 1.5c-.28 0-.5.22-.5.5v12h3.83v-12c0-.28-.22-.5-.5-.5zm5.33 3.5c-.27 0-.5.22-.5.5v8.5h3.84v-8.5c0-.28-.23-.5-.5-.5zm5.34 3.5c-.28 0-.5.22-.5.5v5h3.83v-5c0-.28-.22-.5-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartBarDescRegular.displayName = 'ChartBarDescRegular';

// Triple export pattern
export { ChartBarDescRegular, ChartBarDescRegular as ChartBarDescRegularIcon, ChartBarDescRegular as SiChartBarDescRegular };
export default ChartBarDescRegular;
export type { ChartBarDescRegularProps };
