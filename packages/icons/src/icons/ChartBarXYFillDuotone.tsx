import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarXYFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarXYFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarXYFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 3.75c.69 0 1.25.56 1.25 1.25v12l.01.72v.01h.02c.15.02.35.02.72.02h16a1.25 1.25 0 1 1 0 2.5H5q-.5 0-.92-.02a3 3 0 0 1-.96-.25 2.5 2.5 0 0 1-1.1-1.1 3 3 0 0 1-.25-.96q-.03-.42-.02-.92V5c0-.69.56-1.25 1.25-1.25" opacity={.4} />
        <path d="M7 11.75c.69 0 1.25.56 1.25 1.25v2.25a1.25 1.25 0 1 1-2.5 0V13c0-.69.56-1.25 1.25-1.25M11 4.75c.69 0 1.25.56 1.25 1.25v9.25a1.25 1.25 0 1 1-2.5 0V6c0-.69.56-1.25 1.25-1.25M15 9.75c.69 0 1.25.56 1.25 1.25v4.25a1.25 1.25 0 1 1-2.5 0V11c0-.69.56-1.25 1.25-1.25M19 6.75c.69 0 1.25.56 1.25 1.25v7.25a1.25 1.25 0 1 1-2.5 0V8c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

ChartBarXYFillDuotone.displayName = 'ChartBarXYFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarXYFillDuotone, ChartBarXYFillDuotone as ChartBarXYFillDuotoneIcon, ChartBarXYFillDuotone as SiChartBarXYFillDuotone };
export default ChartBarXYFillDuotone;
export type { ChartBarXYFillDuotoneProps };
