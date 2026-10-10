import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NodeMapFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const NodeMapFillDuotone = memo(
  forwardRef<SVGSVGElement, NodeMapFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.11 13.2q.36.84 1.1 1.36l-3.08 2.49q.25.56.25 1.2c0 1.73-1.4 3.13-3.13 3.13s-3.12-1.4-3.12-3.13 1.4-3.12 3.12-3.12q1.01.01 1.78.56zM16.52 14.65q.76-.51 1.73-.53c1.73 0 3.13 1.4 3.13 3.13s-1.4 3.13-3.13 3.13-3.12-1.4-3.12-3.13q0-.67.26-1.26l-1.66-1.4q.76-.5 1.13-1.33zM19.25 6.63c1.73 0 3.13 1.4 3.13 3.12s-1.4 3.13-3.13 3.13c-1.09 0-2.04-.56-2.6-1.4l-1.53.47c0-.62-.2-1.2-.52-1.68l1.53-.47v-.05c0-1.73 1.4-3.12 3.12-3.12M7.25 2.13c1.73 0 3.13 1.4 3.13 3.12 0 .74-.26 1.41-.69 1.95l1.3 1.84q-.87.31-1.43 1.01l-1.3-1.84q-.48.16-1.01.16c-1.73 0-3.12-1.4-3.12-3.12s1.4-3.12 3.12-3.12" opacity={0.4} />
        <path d="M12 8.88c1.73 0 3.13 1.4 3.13 3.12s-1.4 3.13-3.13 3.13-3.12-1.4-3.12-3.13 1.4-3.12 3.12-3.12" />
    </IconBase>
  ))
);

NodeMapFillDuotone.displayName = 'NodeMapFillDuotone';

// Triple export pattern
export { NodeMapFillDuotone, NodeMapFillDuotone as NodeMapFillDuotoneIcon, NodeMapFillDuotone as SiNodeMapFillDuotone };
export default NodeMapFillDuotone;
export type { NodeMapFillDuotoneProps };
