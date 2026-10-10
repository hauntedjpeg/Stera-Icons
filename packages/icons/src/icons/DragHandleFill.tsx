import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DragHandleFillProps = Omit<IconBaseProps, 'children'>;

const DragHandleFill = memo(
  forwardRef<SVGSVGElement, DragHandleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.5 1.5c2.2 0 4 1.8 4 4v13c0 2.2-1.8 4-4 4h-7c-2.2 0-4-1.8-4-4v-13c0-2.2 1.8-4 4-4zM9 16.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m-6-6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m-6-6c-.83 0-1.5.67-1.5 1.5S8.17 7.5 9 7.5s1.5-.67 1.5-1.5S9.83 4.5 9 4.5m6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

DragHandleFill.displayName = 'DragHandleFill';

// Triple export pattern
export { DragHandleFill, DragHandleFill as DragHandleFillIcon, DragHandleFill as SiDragHandleFill };
export default DragHandleFill;
export type { DragHandleFillProps };
