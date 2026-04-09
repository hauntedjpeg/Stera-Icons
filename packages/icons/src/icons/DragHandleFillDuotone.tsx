import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DragHandleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DragHandleFillDuotone = memo(
  forwardRef<SVGSVGElement, DragHandleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="drag-handle-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M15.5 1.5a4 4 0 0 1 4 4v13a4 4 0 0 1-4 4h-7a4 4 0 0 1-4-4v-13a4 4 0 0 1 4-4zM9 16.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-6-6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-6-6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path d="M10.5 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16.5 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M10.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M10.5 18a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16.5 18a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    </IconBase>
  ))
);

DragHandleFillDuotone.displayName = 'DragHandleFillDuotone';

// Triple export pattern (lucide-react style)
export { DragHandleFillDuotone, DragHandleFillDuotone as DragHandleFillDuotoneIcon, DragHandleFillDuotone as SiDragHandleFillDuotone };
export default DragHandleFillDuotone;
export type { DragHandleFillDuotoneProps };
