import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DragHandleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DragHandleFillDuotone = memo(
  forwardRef<SVGSVGElement, DragHandleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.5 1.5c2.2 0 4 1.8 4 4v13c0 2.2-1.8 4-4 4h-7c-2.2 0-4-1.8-4-4v-13c0-2.2 1.8-4 4-4zM9 16.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m-6-6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m-6-6c-.83 0-1.5.67-1.5 1.5S8.17 7.5 9 7.5s1.5-.67 1.5-1.5S9.83 4.5 9 4.5m6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" opacity={.4} />
        <path d="M10.5 6c0 .83-.67 1.5-1.5 1.5S7.5 6.83 7.5 6 8.17 4.5 9 4.5s1.5.67 1.5 1.5M16.5 6c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M10.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M16.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M10.5 18c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M16.5 18c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5" />
    </IconBase>
  ))
);

DragHandleFillDuotone.displayName = 'DragHandleFillDuotone';

// Triple export pattern
export { DragHandleFillDuotone, DragHandleFillDuotone as DragHandleFillDuotoneIcon, DragHandleFillDuotone as SiDragHandleFillDuotone };
export default DragHandleFillDuotone;
export type { DragHandleFillDuotoneProps };
