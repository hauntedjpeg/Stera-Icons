import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineXYBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineXYBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineXYBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 4c.55 0 1 .45 1 1v10.8c0 .58 0 .95.02 1.23.03.27.06.37.09.42q.15.3.44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02H21c.55 0 1 .45 1 1s-.45 1-1 1H6.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3q-.87-.44-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4V5c0-.55.45-1 1-1" opacity={.4} />
        <path d="M19.2 5.4c.33-.44.96-.53 1.4-.2s.53.96.2 1.4l-4.33 5.76c-.3.4-.84.51-1.28.28l-3.31-1.78-4.12 4.8c-.36.41-1 .46-1.41.1-.42-.36-.47-1-.1-1.41l4.64-5.4.12-.12c.3-.26.74-.3 1.1-.11l3.27 1.75z" />
    </IconBase>
  ))
);

ChartLineXYBoldDuotone.displayName = 'ChartLineXYBoldDuotone';

// Triple export pattern
export { ChartLineXYBoldDuotone, ChartLineXYBoldDuotone as ChartLineXYBoldDuotoneIcon, ChartLineXYBoldDuotone as SiChartLineXYBoldDuotone };
export default ChartLineXYBoldDuotone;
export type { ChartLineXYBoldDuotoneProps };
