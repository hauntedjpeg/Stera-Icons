import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendUpFillProps = Omit<IconBaseProps, 'children'>;

const TrendUpFill = memo(
  forwardRef<SVGSVGElement, TrendUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.5 4.88h.09q.32.03.53.26l.06.06.07.1q.06.1.09.2v.02q.04.11.04.23v5c0 .35-.22.67-.54.8-.33.14-.7.07-.96-.18l-1.9-1.9-5.46 5.38c-.34.34-.89.34-1.23 0l-2.55-2.51-6.63 6.53c-.34.34-.9.34-1.23 0-.34-.35-.34-.9 0-1.24l7.24-7.15.07-.06c.34-.27.84-.25 1.16.06L12.9 13l4.84-4.77-1.86-1.86c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.81-.54z" />
    </IconBase>
  ))
);

TrendUpFill.displayName = 'TrendUpFill';

// Triple export pattern
export { TrendUpFill, TrendUpFill as TrendUpFillIcon, TrendUpFill as SiTrendUpFill };
export default TrendUpFill;
export type { TrendUpFillProps };
