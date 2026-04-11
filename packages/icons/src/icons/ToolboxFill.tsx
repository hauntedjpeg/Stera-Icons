import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToolboxFillProps = Omit<IconBaseProps, 'children'>;

const ToolboxFill = memo(
  forwardRef<SVGSVGElement, ToolboxFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.13 14.5a.88.88 0 0 0 1.75 0v-.62h6.24v.62a.88.88 0 0 0 1.76 0v-.62h5v1.32q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05v-1.32h5z" />
        <path fillRule="evenodd" d="M14.42 2.63c1.05 0 1.95.77 2.1 1.82l.24 1.68q.87-.01 1.48.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v.32h-5v-.62a.88.88 0 0 0-1.75 0v.63H8.87v-.63a.88.88 0 0 0-1.74 0v.63h-5v-.33q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.63-.04 1.49-.04l.24-1.68a2.1 2.1 0 0 1 2.1-1.83zM9.58 4.38a.4.4 0 0 0-.37.32l-.2 1.42h5.98l-.2-1.42a.4.4 0 0 0-.37-.33z" clipRule="evenodd" />
    </IconBase>
  ))
);

ToolboxFill.displayName = 'ToolboxFill';

// Triple export pattern (lucide-react style)
export { ToolboxFill, ToolboxFill as ToolboxFillIcon, ToolboxFill as SiToolboxFill };
export default ToolboxFill;
export type { ToolboxFillProps };
