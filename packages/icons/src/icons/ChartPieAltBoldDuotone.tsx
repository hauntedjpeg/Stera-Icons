import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartPieAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartPieAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartPieAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.11 2.79c.5-.22 1.1.02 1.31.53.22.5-.02 1.1-.53 1.3C6.01 5.85 4 8.7 4 12c0 4.42 3.58 8 8 8q1.61 0 3-.58c.52-.21 1.1.03 1.31.55.2.5-.04 1.1-.55 1.3q-1.75.72-3.76.73C6.48 22 2 17.52 2 12c0-4.14 2.52-7.7 6.11-9.21" opacity={.4} />
        <path fillRule="evenodd" d="M12 2c4.17 0 7.74 2.55 9.24 6.17Q22 9.96 22 12c0 2.76-1.12 5.26-2.93 7.07-.39.4-1.02.4-1.41 0l-6.37-6.36q-.28-.3-.29-.71V3c0-.55.45-1 1-1m1.76 10.35 4.56 4.55C19.37 15.55 20 13.85 20 12q0-1.1-.29-2.11zM13 10.5l5.95-2.46C17.73 5.9 15.55 4.38 13 4.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartPieAltBoldDuotone.displayName = 'ChartPieAltBoldDuotone';

// Triple export pattern
export { ChartPieAltBoldDuotone, ChartPieAltBoldDuotone as ChartPieAltBoldDuotoneIcon, ChartPieAltBoldDuotone as SiChartPieAltBoldDuotone };
export default ChartPieAltBoldDuotone;
export type { ChartPieAltBoldDuotoneProps };
