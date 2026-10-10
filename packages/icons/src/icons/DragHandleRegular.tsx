import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DragHandleRegularProps = Omit<IconBaseProps, 'children'>;

const DragHandleRegular = memo(
  forwardRef<SVGSVGElement, DragHandleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.5 17.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S7 19.83 7 19s.67-1.5 1.5-1.5M15.5 17.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S14 19.83 14 19s.67-1.5 1.5-1.5M8.5 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S7 12.83 7 12s.67-1.5 1.5-1.5M15.5 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S14 12.83 14 12s.67-1.5 1.5-1.5M8.5 3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S7 5.83 7 5s.67-1.5 1.5-1.5M15.5 3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S14 5.83 14 5s.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

DragHandleRegular.displayName = 'DragHandleRegular';

// Triple export pattern
export { DragHandleRegular, DragHandleRegular as DragHandleRegularIcon, DragHandleRegular as SiDragHandleRegular };
export default DragHandleRegular;
export type { DragHandleRegularProps };
