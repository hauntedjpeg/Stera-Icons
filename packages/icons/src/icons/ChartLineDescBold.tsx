import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartLineDescBoldProps = Omit<IconBaseProps, 'children'>;

const ChartLineDescBold = memo(
  forwardRef<SVGSVGElement, ChartLineDescBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 18c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1zM3.36 4.23c.42-.35 1.05-.3 1.4.13l4.86 5.82 4.64-2.1c.34-.15.75-.1 1.04.14l.11.12 5.34 6c.36.4.33 1.04-.09 1.4-.4.37-1.04.34-1.4-.08l-4.85-5.45-4.67 2.1c-.4.19-.89.07-1.17-.27l-5.34-6.4c-.35-.42-.3-1.06.13-1.4" />
    </IconBase>
  ))
);

ChartLineDescBold.displayName = 'ChartLineDescBold';

// Triple export pattern
export { ChartLineDescBold, ChartLineDescBold as ChartLineDescBoldIcon, ChartLineDescBold as SiChartLineDescBold };
export default ChartLineDescBold;
export type { ChartLineDescBoldProps };
