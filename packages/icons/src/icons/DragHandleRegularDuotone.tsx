import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DragHandleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DragHandleRegularDuotone = memo(
  forwardRef<SVGSVGElement, DragHandleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 5c0 .83-.67 1.5-1.5 1.5S14 5.83 14 5s.67-1.5 1.5-1.5S17 4.17 17 5M17 12c0 .83-.67 1.5-1.5 1.5S14 12.83 14 12s.67-1.5 1.5-1.5 1.5.67 1.5 1.5M17 19c0 .83-.67 1.5-1.5 1.5S14 19.83 14 19s.67-1.5 1.5-1.5 1.5.67 1.5 1.5" opacity={0.4} />
        <path d="M10 5c0 .83-.67 1.5-1.5 1.5S7 5.83 7 5s.67-1.5 1.5-1.5S10 4.17 10 5M10 12c0 .83-.67 1.5-1.5 1.5S7 12.83 7 12s.67-1.5 1.5-1.5 1.5.67 1.5 1.5M10 19c0 .83-.67 1.5-1.5 1.5S7 19.83 7 19s.67-1.5 1.5-1.5 1.5.67 1.5 1.5" />
    </IconBase>
  ))
);

DragHandleRegularDuotone.displayName = 'DragHandleRegularDuotone';

// Triple export pattern
export { DragHandleRegularDuotone, DragHandleRegularDuotone as DragHandleRegularDuotoneIcon, DragHandleRegularDuotone as SiDragHandleRegularDuotone };
export default DragHandleRegularDuotone;
export type { DragHandleRegularDuotoneProps };
