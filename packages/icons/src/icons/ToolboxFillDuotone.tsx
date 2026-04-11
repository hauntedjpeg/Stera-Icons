import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToolboxFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToolboxFillDuotone = memo(
  forwardRef<SVGSVGElement, ToolboxFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.13 13.88v.62a.88.88 0 0 0 1.75 0v-.62h6.24v.62a.88.88 0 0 0 1.76 0v-.62h5v1.32q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05v-1.32zM16.2 6.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v.32h-5v-.62a.88.88 0 0 0-1.75 0v.63H8.87v-.63a.88.88 0 0 0-1.74 0v.63h-5v-.33q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04z" opacity={0.4} />
        <path d="M14.42 2.63c1.05 0 1.95.77 2.1 1.82l.24 1.68H15l-.21-1.43a.4.4 0 0 0-.37-.33H9.58a.4.4 0 0 0-.37.33l-.2 1.42H7.24l.24-1.67a2.1 2.1 0 0 1 2.1-1.83zM16 10.63c.48 0 .88.39.88.87v.63h5v1.74h-5v.63a.88.88 0 0 1-1.75 0v-.62H8.87v.62a.88.88 0 0 1-1.74 0v-.62h-5v-1.76h5v-.62a.88.88 0 0 1 1.75 0v.63h6.24v-.63c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

ToolboxFillDuotone.displayName = 'ToolboxFillDuotone';

// Triple export pattern (lucide-react style)
export { ToolboxFillDuotone, ToolboxFillDuotone as ToolboxFillDuotoneIcon, ToolboxFillDuotone as SiToolboxFillDuotone };
export default ToolboxFillDuotone;
export type { ToolboxFillDuotoneProps };
