import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DragHandleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DragHandleBoldDuotone = memo(
  forwardRef<SVGSVGElement, DragHandleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.5 17c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M15.5 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M15.5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2" opacity={0.4} />
        <path d="M8.5 17c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M8.5 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M8.5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2" />
    </IconBase>
  ))
);

DragHandleBoldDuotone.displayName = 'DragHandleBoldDuotone';

// Triple export pattern
export { DragHandleBoldDuotone, DragHandleBoldDuotone as DragHandleBoldDuotoneIcon, DragHandleBoldDuotone as SiDragHandleBoldDuotone };
export default DragHandleBoldDuotone;
export type { DragHandleBoldDuotoneProps };
