import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartDonutRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartDonutRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartDonutRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.92 2.25c-.38.04-.67.36-.67.75v.78q-1.66.15-3.14.94c-1.2.64-2.22 1.57-2.97 2.7S3.92 9.84 3.8 11.19s.07 2.71.59 3.97c.52 1.25 1.34 2.36 2.39 3.22s2.29 1.45 3.62 1.71c1.33.27 2.7.2 4-.2q1.6-.48 2.89-1.55l-2.78-2.78q-.58.4-1.24.6-1.03.32-2.1.1-1.08-.2-1.92-.9-.83-.69-1.26-1.7-.41-1-.3-2.09c.06-.7.3-1.4.7-1.99q.61-.9 1.57-1.42.61-.32 1.3-.44v.68c0 .41.34.75.75.75h-.17q-.62.04-1.17.34-.63.34-1.03.93t-.47 1.3.2 1.37q.29.66.83 1.11.56.45 1.25.6.7.13 1.39-.07.59-.18 1.06-.6l.13-.11c-.28.27-.3.7-.06 1l.06.06 3.81 3.81c.28.28.71.3 1 .06l.06-.06c-1.13 1.14-2.53 1.97-4.06 2.44s-3.16.55-4.73.23c-1.57-.31-3.05-1-4.29-2.02-1.23-1.02-2.2-2.33-2.82-3.8-.61-1.49-.85-3.1-.7-4.7S3 7.92 3.9 6.58 6 4.16 7.4 3.4c1.42-.75 3-1.15 4.6-1.15z" />
        <path fillRule="evenodd" d="M12 2.25h.36c1.8.07 3.55.64 5.06 1.64 1.6 1.07 2.85 2.6 3.59 4.38s.93 3.74.55 5.63c-.37 1.9-1.3 3.63-2.67 5-.29.29-.76.29-1.06 0l-3.81-3.82-.06-.06c-.24-.3-.22-.73.06-1q.61-.62.77-1.46.17-.86-.16-1.65-.33-.8-1.05-1.28-.72-.47-1.58-.48c-.41 0-.75-.34-.75-.75V3c0-.39.3-.7.67-.75zm4.24 8.8q.2.9.03 1.8-.19.9-.71 1.65l2.78 2.78c.88-1.06 1.48-2.32 1.75-3.67s.2-2.75-.21-4.06zm-3.49-3.33q.9.16 1.67.66l.22.16.08.06.14.13.09.07.12.12q.34.35.6.75l3.63-1.5q-.35-.68-.82-1.28l-.2-.24q-.3-.33-.6-.63-.5-.49-1.1-.88c-1.07-.72-2.3-1.17-3.57-1.33l-.26-.02z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

ChartDonutRegularDuotone.displayName = 'ChartDonutRegularDuotone';

// Triple export pattern
export { ChartDonutRegularDuotone, ChartDonutRegularDuotone as ChartDonutRegularDuotoneIcon, ChartDonutRegularDuotone as SiChartDonutRegularDuotone };
export default ChartDonutRegularDuotone;
export type { ChartDonutRegularDuotoneProps };
