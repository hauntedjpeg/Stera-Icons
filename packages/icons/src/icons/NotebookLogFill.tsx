import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NotebookLogFillProps = Omit<IconBaseProps, 'children'>;

const NotebookLogFill = memo(
  forwardRef<SVGSVGElement, NotebookLogFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.2 2.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v8.4q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5l-.04-.87H5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-.87v-2.76H5c.48 0 .88-.39.88-.87s-.4-.87-.88-.87h-.87V8.37H5c.48 0 .88-.39.88-.87s-.4-.87-.88-.87h-.87q0-.48.04-.87c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zm-4.7 10c-.48 0-.87.39-.87.87s.39.88.87.88H12c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zm0-4c-.48 0-.87.39-.87.87s.39.88.87.88h5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" />
        <path d="M4.13 17.38h-1c-.49 0-.88-.4-.88-.88s.4-.87.88-.87h1zM4.13 12.88h-1c-.49 0-.88-.4-.88-.88s.4-.87.88-.87h1zM4.13 8.38h-1c-.49 0-.88-.4-.88-.88s.4-.87.88-.87h1z" />
    </IconBase>
  ))
);

NotebookLogFill.displayName = 'NotebookLogFill';

// Triple export pattern
export { NotebookLogFill, NotebookLogFill as NotebookLogFillIcon, NotebookLogFill as SiNotebookLogFill };
export default NotebookLogFill;
export type { NotebookLogFillProps };
