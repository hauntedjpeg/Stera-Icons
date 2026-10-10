import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VolleyballRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const VolleyballRegularDuotone = memo(
  forwardRef<SVGSVGElement, VolleyballRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.1 11.79q.39 0 .82.03c.52 4.08 2.37 6.6 4.67 8.42l-.22-.01q-1.43-.12-2.68-.68c-1.65-1.88-2.88-4.34-3.27-7.7q.31-.06.68-.06M19.22 8q.66 1.21.91 2.6c-.82 2.47-2.72 4.87-5.99 6.85q-.22-.3-.4-.62-.2-.34-.35-.68c4.1-2.49 5.66-5.58 5.73-8.31zM6.87 5.54c1.33-.28 2.66-.21 3.87.06 1.73.39 3.27 1.19 4.32 2l-.44.7-.4.54c-.87-.68-2.24-1.43-3.8-1.78-1.85-.4-3.88-.27-5.7 1.04l.08-.14q.8-1.41 2.07-2.42" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.25c1.71 0 3.32.44 4.72 1.22 1.6.89 2.92 2.2 3.81 3.8.78 1.4 1.22 3.02 1.22 4.73 0 3.64-2 6.81-4.95 8.49-1.42.8-3.06 1.26-4.8 1.26q-.37 0-.75-.03c-4.93-.37-8.83-4.41-9-9.4V12c0-1.73.45-3.36 1.25-4.77C5.17 4.26 8.35 2.25 12 2.25m-5.9 9.54c-1.08.02-1.8.34-2.33.8.3 4.07 3.53 7.33 7.6 7.64l.63.02q1.35 0 2.56-.4c-.95-.6-1.63-1.41-2.13-2.28-.68-1.18-1.02-2.49-1.2-3.5v.01l-.06-.41-.08-.64c-2.22-.94-3.82-1.27-4.99-1.24m11.2-6.11c-.11 1.18-.69 2.37-1.45 3.47l-.36.5c-.81 1.08-1.83 2.15-2.91 3.17.09.91.34 2.59 1.15 4 .57 1 1.38 1.82 2.6 2.2 2.35-1.45 3.92-4.05 3.92-7.02 0-1.45-.37-2.81-1.03-4q-.76-1.34-1.92-2.32M12 3.75c-3.09 0-5.78 1.7-7.2 4.21q-.72 1.29-.96 2.82.93-.46 2.23-.5c1.45-.02 3.26.38 5.57 1.36 1.18-1.12 2.22-2.25 2.98-3.34q1.5-2.18 1.12-3.66c-1.12-.57-2.4-.89-3.74-.89" clipRule="evenodd" />
    </IconBase>
  ))
);

VolleyballRegularDuotone.displayName = 'VolleyballRegularDuotone';

// Triple export pattern
export { VolleyballRegularDuotone, VolleyballRegularDuotone as VolleyballRegularDuotoneIcon, VolleyballRegularDuotone as SiVolleyballRegularDuotone };
export default VolleyballRegularDuotone;
export type { VolleyballRegularDuotoneProps };
