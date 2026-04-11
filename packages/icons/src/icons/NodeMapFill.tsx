import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NodeMapFillProps = Omit<IconBaseProps, 'children'>;

const NodeMapFill = memo(
  forwardRef<SVGSVGElement, NodeMapFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.25 2.13A3.12 3.12 0 0 1 9.69 7.2l1.3 1.84a3.1 3.1 0 0 1 3.61 1.23l1.53-.47v-.05a3.12 3.12 0 1 1 .52 1.72l-1.53.48V12q-.01.67-.26 1.26l1.66 1.39q.76-.51 1.73-.53A3.12 3.12 0 1 1 15.39 16l-1.66-1.4a3.1 3.1 0 0 1-3.52-.03l-3.08 2.49a3.12 3.12 0 0 1-2.88 4.32 3.12 3.12 0 1 1 1.78-5.68l3.08-2.49a3.1 3.1 0 0 1 .45-3.15l-1.3-1.84a3.12 3.12 0 1 1-1.01-6.09" />
    </IconBase>
  ))
);

NodeMapFill.displayName = 'NodeMapFill';

// Triple export pattern (lucide-react style)
export { NodeMapFill, NodeMapFill as NodeMapFillIcon, NodeMapFill as SiNodeMapFill };
export default NodeMapFill;
export type { NodeMapFillProps };
