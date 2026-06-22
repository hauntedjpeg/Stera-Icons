import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendUpFillProps = Omit<IconBaseProps, 'children'>;

const TrendUpFill = memo(
  forwardRef<SVGSVGElement, TrendUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.5 4.88a1 1 0 0 1 .62.26l.06.06a1 1 0 0 1 .16.32q.03.11.04.23v5a.88.88 0 0 1-1.5.62l-1.9-1.9-5.46 5.38a.9.9 0 0 1-1.23 0l-2.55-2.51-6.63 6.53a.88.88 0 0 1-1.22-1.24l7.23-7.15.07-.06a.9.9 0 0 1 1.16.06L12.9 13l4.84-4.77-1.86-1.86a.88.88 0 0 1 .62-1.5z" />
    </IconBase>
  ))
);

TrendUpFill.displayName = 'TrendUpFill';

// Triple export pattern (lucide-react style)
export { TrendUpFill, TrendUpFill as TrendUpFillIcon, TrendUpFill as SiTrendUpFill };
export default TrendUpFill;
export type { TrendUpFillProps };
