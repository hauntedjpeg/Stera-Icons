import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineDotsRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineDotsRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineDotsRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.2 11.35q.23.3.55.52.32.21.7.31L5.8 16.15q-.23-.3-.55-.52-.32-.21-.7-.31zM13.65 12.2q-.3.23-.52.55-.21.32-.31.7l-2.47-1.65q.3-.23.52-.55.21-.32.31-.7zM18.2 7.85q.23.3.55.52.32.21.7.31l-2.65 3.97q-.23-.3-.55-.52-.32-.21-.7-.31z" opacity={0.4} />
        <path fillRule="evenodd" d="M4 15.25q.7.01 1.25.38c.6.4 1 1.09 1 1.87 0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25 0-1.24 1-2.25 2.25-2.25m0 1.5c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75q-.02-.4-.33-.62-.19-.12-.42-.13M15 11.75q.7.01 1.25.38c.6.4 1 1.09 1 1.87 0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25q.01-.7.38-1.25c.4-.6 1.09-1 1.87-1m0 1.5q-.4.02-.62.33-.12.19-.13.42c0 .41.34.75.75.75s.75-.34.75-.75q-.02-.4-.33-.62-.19-.12-.42-.13M9 7.75c1.24 0 2.25 1 2.25 2.25q-.01.7-.38 1.25c-.4.6-1.09 1-1.87 1q-.7-.01-1.25-.38c-.6-.4-1-1.09-1-1.87 0-1.24 1-2.25 2.25-2.25m0 1.5c-.41 0-.75.34-.75.75q.02.4.33.63.19.11.42.12.4-.02.63-.33.11-.19.12-.42c0-.41-.34-.75-.75-.75M20 4.25c1.24 0 2.25 1 2.25 2.25 0 1.24-1 2.25-2.25 2.25q-.7-.01-1.25-.38c-.6-.4-1-1.09-1-1.87 0-1.24 1-2.25 2.25-2.25m0 1.5c-.41 0-.75.34-.75.75q.02.4.33.63.19.11.42.12c.41 0 .75-.34.75-.75s-.34-.75-.75-.75" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartLineDotsRegularDuotone.displayName = 'ChartLineDotsRegularDuotone';

// Triple export pattern
export { ChartLineDotsRegularDuotone, ChartLineDotsRegularDuotone as ChartLineDotsRegularDuotoneIcon, ChartLineDotsRegularDuotone as SiChartLineDotsRegularDuotone };
export default ChartLineDotsRegularDuotone;
export type { ChartLineDotsRegularDuotoneProps };
