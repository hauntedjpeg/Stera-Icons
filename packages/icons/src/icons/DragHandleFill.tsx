import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DragHandleFillProps = Omit<IconBaseProps, 'children'>;

const DragHandleFill = memo(
  forwardRef<SVGSVGElement, DragHandleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="drag-handle-fill" {...props}>
      <path fillRule="evenodd" d="M15.5 1.5a4 4 0 0 1 4 4v13a4 4 0 0 1-4 4h-7a4 4 0 0 1-4-4v-13a4 4 0 0 1 4-4zM9 16.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-6-6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-6-6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

DragHandleFill.displayName = 'DragHandleFill';

// Triple export pattern (lucide-react style)
export { DragHandleFill, DragHandleFill as DragHandleFillIcon, DragHandleFill as SiDragHandleFill };
export default DragHandleFill;
export type { DragHandleFillProps };
