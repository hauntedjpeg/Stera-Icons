import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OverlappingCirclesDashFillProps = Omit<IconBaseProps, 'children'>;

const OverlappingCirclesDashFill = memo(
  forwardRef<SVGSVGElement, OverlappingCirclesDashFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.5 4.63c1.46 0 2.82.42 3.97 1.16a.87.87 0 0 1 0 1.47 5.62 5.62 0 0 0 0 9.48.88.88 0 0 1 0 1.47A7.38 7.38 0 1 1 8.5 4.62M16.24 17.58a.88.88 0 0 1 .22 1.73 7 7 0 0 1-1.92 0 .88.88 0 1 1 .22-1.73 6 6 0 0 0 1.48 0M19.96 15.42a.88.88 0 0 1 1.4 1.07q-.6.77-1.37 1.36a.87.87 0 1 1-1.07-1.39q.6-.45 1.04-1.04M21.83 10.28c.48-.06.92.28.98.76a7 7 0 0 1 0 1.92.88.88 0 1 1-1.73-.22 6 6 0 0 0 0-1.48.9.9 0 0 1 .75-.98M18.76 6.31A.87.87 0 0 1 20 6.15q.77.6 1.36 1.36a.87.87 0 1 1-1.39 1.07q-.45-.6-1.04-1.04a.9.9 0 0 1-.16-1.23M15.5 4.63q.5 0 .96.06a.88.88 0 1 1-.22 1.73 6 6 0 0 0-1.48 0 .88.88 0 0 1-.22-1.73q.46-.07.96-.07" />
    </IconBase>
  ))
);

OverlappingCirclesDashFill.displayName = 'OverlappingCirclesDashFill';

// Triple export pattern (lucide-react style)
export { OverlappingCirclesDashFill, OverlappingCirclesDashFill as OverlappingCirclesDashFillIcon, OverlappingCirclesDashFill as SiOverlappingCirclesDashFill };
export default OverlappingCirclesDashFill;
export type { OverlappingCirclesDashFillProps };
