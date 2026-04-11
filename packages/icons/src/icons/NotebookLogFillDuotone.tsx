import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NotebookLogFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const NotebookLogFillDuotone = memo(
  forwardRef<SVGSVGElement, NotebookLogFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.2 2.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v8.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5l-.04-.87H5.5a.88.88 0 0 0 0-1.75H4.13v-2.76H5.5a.88.88 0 0 0 0-1.74H4.13V8.37H5.5a.87.87 0 1 0 0-1.74H4.13q0-.48.04-.87c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zm-4.2 10a.88.88 0 0 0 0 1.74h3a.88.88 0 0 0 0-1.74zm0-4a.87.87 0 1 0 0 1.74h5.5a.88.88 0 0 0 0-1.74z" clipRule="evenodd" opacity={.4} />
        <path d="M5.5 15.63a.88.88 0 0 1 0 1.74h-2a.88.88 0 0 1 0-1.75zM13 12.13a.88.88 0 0 1 0 1.74h-3a.88.88 0 0 1 0-1.74zM5.5 11.13a.88.88 0 0 1 0 1.74h-2a.88.88 0 0 1 0-1.74zM15.5 8.13a.88.88 0 0 1 0 1.74H10a.87.87 0 1 1 0-1.74zM5.5 6.63a.87.87 0 1 1 0 1.75h-2a.87.87 0 1 1 0-1.76z" />
    </IconBase>
  ))
);

NotebookLogFillDuotone.displayName = 'NotebookLogFillDuotone';

// Triple export pattern (lucide-react style)
export { NotebookLogFillDuotone, NotebookLogFillDuotone as NotebookLogFillDuotoneIcon, NotebookLogFillDuotone as SiNotebookLogFillDuotone };
export default NotebookLogFillDuotone;
export type { NotebookLogFillDuotoneProps };
