import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NotebookLogFillProps = Omit<IconBaseProps, 'children'>;

const NotebookLogFill = memo(
  forwardRef<SVGSVGElement, NotebookLogFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.2 2.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v8.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5l-.04-.87H5a.88.88 0 0 0 0-1.75h-.87v-2.76H5a.88.88 0 0 0 0-1.74h-.87V8.37H5a.87.87 0 1 0 0-1.74h-.87q0-.48.04-.87c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zm-4.7 10a.88.88 0 0 0 0 1.74H12a.88.88 0 0 0 0-1.74zm0-4a.87.87 0 1 0 0 1.74h5a.88.88 0 0 0 0-1.74z" clipRule="evenodd" />
        <path d="M4.13 17.38h-1a.88.88 0 0 1 0-1.75h1zM4.13 12.88h-1a.88.88 0 0 1 0-1.76h1zM4.13 8.38h-1a.87.87 0 1 1 0-1.76h1z" />
    </IconBase>
  ))
);

NotebookLogFill.displayName = 'NotebookLogFill';

// Triple export pattern (lucide-react style)
export { NotebookLogFill, NotebookLogFill as NotebookLogFillIcon, NotebookLogFill as SiNotebookLogFill };
export default NotebookLogFill;
export type { NotebookLogFillProps };
