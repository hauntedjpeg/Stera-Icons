import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DragHandleBoldProps = Omit<IconBaseProps, 'children'>;

const DragHandleBold = memo(
  forwardRef<SVGSVGElement, DragHandleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.5 17c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M15.5 17c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M8.5 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M15.5 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M8.5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M15.5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2" />
    </IconBase>
  ))
);

DragHandleBold.displayName = 'DragHandleBold';

// Triple export pattern
export { DragHandleBold, DragHandleBold as DragHandleBoldIcon, DragHandleBold as SiDragHandleBold };
export default DragHandleBold;
export type { DragHandleBoldProps };
