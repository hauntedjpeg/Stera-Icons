import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToolboxFillProps = Omit<IconBaseProps, 'children'>;

const ToolboxFill = memo(
  forwardRef<SVGSVGElement, ToolboxFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.13 14.5c0 .48.39.88.87.88s.88-.4.88-.88v-.62h6.24v.62c0 .48.4.88.88.88s.88-.4.88-.88v-.62h5v1.32q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05v-1.32h5z" />
        <path fillRule="evenodd" d="M14.42 2.63c1.05 0 1.95.77 2.1 1.82l.24 1.68q.87-.01 1.48.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v.32h-5v-.62c0-.48-.4-.87-.88-.87s-.87.39-.87.87v.63H8.87v-.63c0-.48-.39-.87-.87-.87s-.87.39-.87.87v.63h-5v-.33q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.63-.04 1.49-.04l.24-1.68c.15-1.05 1.05-1.82 2.1-1.83zM9.58 4.38c-.18 0-.34.13-.37.32l-.2 1.42h5.98l-.2-1.42c-.03-.19-.19-.32-.37-.33z" clipRule="evenodd" />
    </IconBase>
  ))
);

ToolboxFill.displayName = 'ToolboxFill';

// Triple export pattern
export { ToolboxFill, ToolboxFill as ToolboxFillIcon, ToolboxFill as SiToolboxFill };
export default ToolboxFill;
export type { ToolboxFillProps };
