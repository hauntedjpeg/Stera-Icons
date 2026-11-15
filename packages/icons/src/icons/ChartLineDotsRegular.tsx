import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineDotsRegularProps = Omit<IconBaseProps, 'children'>;

const ChartLineDotsRegular = memo(
  forwardRef<SVGSVGElement, ChartLineDotsRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20 4.25c1.24 0 2.25 1 2.25 2.25 0 1.24-1 2.25-2.25 2.25q-.3 0-.55-.07l-2.65 3.97q.43.58.45 1.35c0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25q0-.3.07-.55l-2.47-1.65q-.58.43-1.35.45-.3 0-.55-.07L5.8 16.15q.44.58.45 1.35c0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25 0-1.24 1-2.25 2.25-2.25q.28 0 .55.07l2.65-3.97q-.44-.58-.45-1.35c0-1.24 1-2.25 2.25-2.25 1.24 0 2.25 1 2.25 2.25q0 .28-.07.55l2.47 1.65q.58-.44 1.35-.45.28 0 .55.07l2.65-3.97q-.44-.58-.45-1.35c0-1.24 1-2.25 2.25-2.25M4 16.75c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75q-.02-.4-.33-.62H4.4q-.18-.13-.41-.13m11-3.5q-.4.02-.62.33-.13.2-.13.42c0 .41.34.75.75.75s.75-.34.75-.75q-.02-.4-.33-.62h-.01q-.18-.13-.41-.13m-6-4c-.41 0-.75.34-.75.75q.02.4.33.62.2.13.42.13.4-.02.62-.33v-.01q.13-.18.13-.41c0-.41-.34-.75-.75-.75m11-3.5c-.41 0-.75.34-.75.75q.02.4.33.62.2.13.42.13c.41 0 .75-.34.75-.75s-.34-.75-.75-.75" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartLineDotsRegular.displayName = 'ChartLineDotsRegular';

// Triple export pattern
export { ChartLineDotsRegular, ChartLineDotsRegular as ChartLineDotsRegularIcon, ChartLineDotsRegular as SiChartLineDotsRegular };
export default ChartLineDotsRegular;
export type { ChartLineDotsRegularProps };
