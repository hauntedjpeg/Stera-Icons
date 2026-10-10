import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NotebookLogFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const NotebookLogFillDuotone = memo(
  forwardRef<SVGSVGElement, NotebookLogFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.2 2.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v8.4q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5l-.04-.87H5.5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87H4.13v-2.76H5.5c.48 0 .88-.39.88-.87s-.4-.87-.88-.87H4.13V8.37H5.5c.48 0 .88-.39.88-.87s-.4-.87-.88-.87H4.13q0-.48.04-.87c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zm-4.2 10c-.48 0-.87.39-.87.87s.39.88.87.88h3c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zm0-4c-.48 0-.87.39-.87.87s.39.88.87.88h5.5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" opacity={.4} />
        <path d="M5.5 15.63c.48 0 .88.39.88.87s-.4.88-.88.88h-2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM13 12.13c.48 0 .88.39.88.87s-.4.88-.88.88h-3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM5.5 11.13c.48 0 .88.39.88.87s-.4.88-.88.88h-2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM15.5 8.13c.48 0 .88.39.88.87s-.4.88-.88.88H10c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM5.5 6.63c.48 0 .88.39.88.87s-.4.88-.88.88h-2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

NotebookLogFillDuotone.displayName = 'NotebookLogFillDuotone';

// Triple export pattern
export { NotebookLogFillDuotone, NotebookLogFillDuotone as NotebookLogFillDuotoneIcon, NotebookLogFillDuotone as SiNotebookLogFillDuotone };
export default NotebookLogFillDuotone;
export type { NotebookLogFillDuotoneProps };
