import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarXYBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarXYBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarXYBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 4c.55 0 1 .45 1 1v12l.01.74.02.13q.04.06.1.1l.13.02L5 18h16c.55 0 1 .45 1 1s-.45 1-1 1H5q-.5 0-.9-.02-.41-.01-.87-.23-.65-.33-.98-.98c-.16-.3-.2-.6-.23-.87Q2 17.5 2 17V5c0-.55.45-1 1-1" opacity={.4} />
        <path d="M7 12c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1M11 5c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1M15 10c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1M19 7c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

ChartBarXYBoldDuotone.displayName = 'ChartBarXYBoldDuotone';

// Triple export pattern
export { ChartBarXYBoldDuotone, ChartBarXYBoldDuotone as ChartBarXYBoldDuotoneIcon, ChartBarXYBoldDuotone as SiChartBarXYBoldDuotone };
export default ChartBarXYBoldDuotone;
export type { ChartBarXYBoldDuotoneProps };
