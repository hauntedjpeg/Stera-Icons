import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartDonutBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartDonutBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartDonutBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2c-.55 0-1 .45-1 1v1.06q-1.46.2-2.77.88c-1.16.62-2.15 1.52-2.88 2.62-.73 1.09-1.18 2.35-1.31 3.66-.13 1.3.07 2.63.57 3.84.5 1.22 1.3 2.29 2.31 3.12 1.02.84 2.23 1.41 3.52 1.67 1.29.25 2.62.19 3.88-.2q1.42-.43 2.58-1.33l-2.43-2.44q-.54.33-1.14.52-1.1.33-2.23.11t-2.02-.95-1.33-1.8q-.44-1.07-.33-2.21c.08-.75.33-1.48.75-2.1q.65-.96 1.66-1.5.55-.3 1.17-.44v.89c0 .55.45 1 1 1h-.16q-.56.04-1.07.3-.57.31-.93.86-.37.54-.43 1.19T9.6 13t.75 1.01q.5.41 1.14.54.64.12 1.26-.06.55-.17.97-.54l.12-.11c-.37.36-.4.94-.07 1.34l.07.07 3.82 3.82c.36.37.94.39 1.34.07l.07-.07c-1.16 1.16-2.6 2.02-4.17 2.5s-3.24.56-4.85.24-3.12-1.04-4.4-2.08c-1.27-1.04-2.26-2.38-2.89-3.9s-.87-3.17-.71-4.81.72-3.2 1.64-4.58c.9-1.36 2.15-2.48 3.6-3.26S10.36 2 12 2" />
        <path fillRule="evenodd" d="M12 2c1.98 0 3.91.59 5.56 1.69s2.92 2.66 3.68 4.48.95 3.84.57 5.78c-.39 1.94-1.34 3.72-2.74 5.12-.39.4-1.02.4-1.41 0l-3.82-3.82-.07-.07c-.32-.4-.3-.98.07-1.34q.55-.56.71-1.33c.1-.5.05-1.03-.15-1.5q-.3-.73-.96-1.17c-.42-.29-.93-.44-1.44-.44-.55 0-1-.45-1-1V3c0-.55.45-1 1-1m4.53 9.2q.16.85-.02 1.7t-.63 1.57l2.44 2.44c.76-.98 1.28-2.13 1.53-3.35.24-1.22.2-2.48-.14-3.67zM13 7.52q.83.19 1.56.66l.24.18.06.05.22.18.04.04.16.16.08.08.17.19.07.1.09.1.08.1 3.18-1.31q-.46-.8-1.08-1.47-.16-.19-.36-.36-.3-.3-.66-.57l-.4-.3C15.4 4.67 14.22 4.23 13 4.07z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

ChartDonutBoldDuotone.displayName = 'ChartDonutBoldDuotone';

// Triple export pattern
export { ChartDonutBoldDuotone, ChartDonutBoldDuotone as ChartDonutBoldDuotoneIcon, ChartDonutBoldDuotone as SiChartDonutBoldDuotone };
export default ChartDonutBoldDuotone;
export type { ChartDonutBoldDuotoneProps };
