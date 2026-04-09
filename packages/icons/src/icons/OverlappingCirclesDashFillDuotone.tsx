import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OverlappingCirclesDashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const OverlappingCirclesDashFillDuotone = memo(
  forwardRef<SVGSVGElement, OverlappingCirclesDashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="overlapping-circles-dash-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M8.5 4.63a7.38 7.38 0 1 1 0 14.75 7.38 7.38 0 0 1 0-14.75m2.54 10.8a.88.88 0 0 0-1.4 1.06q.6.77 1.37 1.36a.87.87 0 1 0 1.07-1.39q-.6-.45-1.04-1.04m-1.87-5.15a.9.9 0 0 0-.98.76 7 7 0 0 0 0 1.92.88.88 0 1 0 1.73-.22 6 6 0 0 1 0-1.48.9.9 0 0 0-.75-.98m3.07-3.97A.87.87 0 0 0 11 6.15q-.77.6-1.36 1.36a.87.87 0 1 0 1.39 1.07q.45-.6 1.04-1.04c.38-.3.45-.85.16-1.23" clipRule="evenodd" opacity={.4} />
        <path d="M16.24 17.58a.88.88 0 0 1 .22 1.73 7 7 0 0 1-1.92 0 .88.88 0 1 1 .22-1.73 6 6 0 0 0 1.48 0M9.81 15.26a.9.9 0 0 1 1.23.16q.45.6 1.04 1.04a.88.88 0 0 1-1.07 1.4q-.77-.6-1.36-1.37a.87.87 0 0 1 .16-1.23M19.96 15.42a.88.88 0 0 1 1.4 1.07q-.6.77-1.37 1.36a.87.87 0 1 1-1.07-1.39q.6-.45 1.04-1.04M9.17 10.28c.48.07.82.5.75.98a6 6 0 0 0 0 1.48.88.88 0 0 1-1.73.22 7 7 0 0 1 0-1.92c.06-.48.5-.82.98-.76M21.83 10.28c.48-.06.92.28.98.76a7 7 0 0 1 0 1.92.88.88 0 1 1-1.73-.22 6 6 0 0 0 0-1.48.9.9 0 0 1 .75-.98M11.01 6.15a.87.87 0 1 1 1.07 1.39q-.6.45-1.04 1.04a.88.88 0 0 1-1.4-1.07q.6-.77 1.37-1.36M18.76 6.31A.87.87 0 0 1 20 6.15q.77.6 1.36 1.36a.87.87 0 1 1-1.39 1.07q-.45-.6-1.04-1.04a.9.9 0 0 1-.16-1.23M15.5 4.63q.5 0 .96.06a.88.88 0 1 1-.22 1.73 6 6 0 0 0-1.48 0 .88.88 0 0 1-.22-1.73q.46-.07.96-.07" />
    </IconBase>
  ))
);

OverlappingCirclesDashFillDuotone.displayName = 'OverlappingCirclesDashFillDuotone';

// Triple export pattern (lucide-react style)
export { OverlappingCirclesDashFillDuotone, OverlappingCirclesDashFillDuotone as OverlappingCirclesDashFillDuotoneIcon, OverlappingCirclesDashFillDuotone as SiOverlappingCirclesDashFillDuotone };
export default OverlappingCirclesDashFillDuotone;
export type { OverlappingCirclesDashFillDuotoneProps };
