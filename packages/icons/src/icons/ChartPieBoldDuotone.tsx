import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartPieBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartPieBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartPieBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.7 2.56c.53-.19 1.1.09 1.28.61s-.1 1.1-.62 1.27C6.24 5.54 4 8.51 4 12c0 4.42 3.58 8 8 8 3.5 0 6.47-2.24 7.56-5.36.18-.53.75-.8 1.27-.62s.8.75.61 1.27C20.08 19.2 16.37 22 12 22 6.48 22 2 17.52 2 12c0-4.37 2.8-8.08 6.7-9.44" opacity={.4} />
        <path fillRule="evenodd" d="m13.1 2.06.36.05q1.22.18 2.37.65 1.83.76 3.24 2.17 1.4 1.41 2.17 3.24.54 1.31.7 2.72C22.07 12.11 21.07 13 20 13h-7c-1.1 0-2-.9-2-2V4c0-1 .78-1.95 1.88-1.95zM13 11h6.94q-.15-1.06-.55-2.06-.61-1.46-1.73-2.6-1.14-1.12-2.6-1.73-1-.41-2.06-.55z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartPieBoldDuotone.displayName = 'ChartPieBoldDuotone';

// Triple export pattern
export { ChartPieBoldDuotone, ChartPieBoldDuotone as ChartPieBoldDuotoneIcon, ChartPieBoldDuotone as SiChartPieBoldDuotone };
export default ChartPieBoldDuotone;
export type { ChartPieBoldDuotoneProps };
