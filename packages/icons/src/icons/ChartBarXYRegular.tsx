import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarXYRegularProps = Omit<IconBaseProps, 'children'>;

const ChartBarXYRegular = memo(
  forwardRef<SVGSVGElement, ChartBarXYRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 4.25c.41 0 .75.34.75.75v12l.01.76.04.22q.08.15.22.22l.22.04.76.01h16c.41 0 .75.34.75.75s-.34.75-.75.75H5q-.51 0-.88-.02-.39-.02-.78-.2-.57-.3-.87-.87-.18-.39-.2-.78-.02-.36-.02-.88V5c0-.41.34-.75.75-.75" />
        <path d="M7 12.25c.41 0 .75.34.75.75v3c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75M11 5.25c.41 0 .75.34.75.75v10c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6c0-.41.34-.75.75-.75M15 10.25c.41 0 .75.34.75.75v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75M19 7.25c.41 0 .75.34.75.75v8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ChartBarXYRegular.displayName = 'ChartBarXYRegular';

// Triple export pattern
export { ChartBarXYRegular, ChartBarXYRegular as ChartBarXYRegularIcon, ChartBarXYRegular as SiChartBarXYRegular };
export default ChartBarXYRegular;
export type { ChartBarXYRegularProps };
