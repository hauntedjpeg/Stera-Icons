import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDashFillProps = Omit<IconBaseProps, 'children'>;

const CircleDashFill = memo(
  forwardRef<SVGSVGElement, CircleDashFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-dash-fill" {...props}>
      <path d="M13.59 19.97a.88.88 0 1 1 .34 1.72 10 10 0 0 1-3.86 0 .88.88 0 0 1 .34-1.72 8 8 0 0 0 3.18 0M4.03 16.27a.9.9 0 0 1 1.21.24q.9 1.34 2.25 2.25a.88.88 0 0 1-.98 1.45A10 10 0 0 1 3.8 17.5a.9.9 0 0 1 .24-1.22M18.76 16.51a.88.88 0 0 1 1.45.98 10 10 0 0 1-2.72 2.72.87.87 0 1 1-.98-1.45 8 8 0 0 0 2.25-2.25M12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12M2.31 10.07a.88.88 0 0 1 1.72.34 8 8 0 0 0 0 3.18.88.88 0 1 1-1.72.34 10 10 0 0 1 0-3.86M20.66 9.38c.47-.09.93.22 1.03.7a10 10 0 0 1 0 3.85.88.88 0 0 1-1.72-.34 8 8 0 0 0 0-3.18.9.9 0 0 1 .69-1.03M6.51 3.79a.87.87 0 1 1 .98 1.45A8 8 0 0 0 5.24 7.5.88.88 0 0 1 3.8 6.5Q4.89 4.9 6.5 3.8M16.27 4.03c.27-.4.82-.51 1.22-.24q1.62 1.1 2.72 2.72a.87.87 0 1 1-1.45.98 8 8 0 0 0-2.25-2.25.9.9 0 0 1-.24-1.21M12 2.13q.99 0 1.93.18a.88.88 0 0 1-.34 1.72 8 8 0 0 0-3.18 0 .88.88 0 1 1-.34-1.72A10 10 0 0 1 12 2.12" />
    </IconBase>
  ))
);

CircleDashFill.displayName = 'CircleDashFill';

// Triple export pattern (lucide-react style)
export { CircleDashFill, CircleDashFill as CircleDashFillIcon, CircleDashFill as SiCircleDashFill };
export default CircleDashFill;
export type { CircleDashFillProps };
