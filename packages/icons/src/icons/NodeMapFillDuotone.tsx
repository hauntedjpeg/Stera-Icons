import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NodeMapFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const NodeMapFillDuotone = memo(
  forwardRef<SVGSVGElement, NodeMapFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.11 13.2q.36.84 1.1 1.36l-3.08 2.49a3.12 3.12 0 0 1-2.88 4.32 3.12 3.12 0 1 1 1.78-5.68zM16.52 14.65q.76-.51 1.73-.53A3.12 3.12 0 1 1 15.39 16l-1.66-1.4q.76-.5 1.13-1.33zM19.25 6.63a3.12 3.12 0 1 1-2.6 4.84l-1.53.48a3 3 0 0 0-.52-1.68l1.53-.47v-.05c0-1.73 1.4-3.12 3.12-3.12M7.25 2.13A3.12 3.12 0 0 1 9.69 7.2l1.3 1.84q-.87.31-1.43 1.01l-1.3-1.84a3.12 3.12 0 1 1-1.01-6.09" opacity={0.4} />
        <path d="M12 8.88a3.12 3.12 0 1 1 0 6.24 3.12 3.12 0 0 1 0-6.24" />
    </IconBase>
  ))
);

NodeMapFillDuotone.displayName = 'NodeMapFillDuotone';

// Triple export pattern (lucide-react style)
export { NodeMapFillDuotone, NodeMapFillDuotone as NodeMapFillDuotoneIcon, NodeMapFillDuotone as SiNodeMapFillDuotone };
export default NodeMapFillDuotone;
export type { NodeMapFillDuotoneProps };
