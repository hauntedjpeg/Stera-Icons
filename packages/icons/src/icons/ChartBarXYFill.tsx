import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarXYFillProps = Omit<IconBaseProps, 'children'>;

const ChartBarXYFill = memo(
  forwardRef<SVGSVGElement, ChartBarXYFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 3.75c.69 0 1.25.56 1.25 1.25v12l.01.72v.01h.02c.15.02.35.02.72.02h16c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H5q-.5 0-.92-.02-.45-.01-.96-.25-.73-.37-1.1-1.1-.24-.51-.25-.96-.03-.42-.02-.92V5c0-.69.56-1.25 1.25-1.25" />
        <path d="M7 11.75c.69 0 1.25.56 1.25 1.25v2.25c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25V13c0-.69.56-1.25 1.25-1.25M11 4.75c.69 0 1.25.56 1.25 1.25v9.25c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25V6c0-.69.56-1.25 1.25-1.25M15 9.75c.69 0 1.25.56 1.25 1.25v4.25c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25V11c0-.69.56-1.25 1.25-1.25M19 6.75c.69 0 1.25.56 1.25 1.25v7.25c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25V8c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

ChartBarXYFill.displayName = 'ChartBarXYFill';

// Triple export pattern
export { ChartBarXYFill, ChartBarXYFill as ChartBarXYFillIcon, ChartBarXYFill as SiChartBarXYFill };
export default ChartBarXYFill;
export type { ChartBarXYFillProps };
