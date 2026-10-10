import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NodeMapFillProps = Omit<IconBaseProps, 'children'>;

const NodeMapFill = memo(
  forwardRef<SVGSVGElement, NodeMapFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.25 2.13c1.73 0 3.13 1.4 3.13 3.12 0 .74-.26 1.41-.69 1.95l1.3 1.84q.48-.16 1.01-.16c1.09 0 2.04.55 2.6 1.4l1.53-.48v-.05c0-1.73 1.4-3.12 3.12-3.12s3.13 1.4 3.13 3.12-1.4 3.13-3.13 3.13c-1.09 0-2.04-.56-2.6-1.4l-1.53.47V12q-.01.67-.26 1.26l1.66 1.39q.76-.51 1.73-.53c1.73 0 3.13 1.4 3.13 3.13s-1.4 3.13-3.13 3.13-3.12-1.4-3.12-3.13q0-.67.26-1.26l-1.66-1.4q-.76.53-1.73.54-1-.02-1.79-.57l-3.08 2.49q.25.56.25 1.2c0 1.73-1.4 3.13-3.13 3.13s-3.12-1.4-3.12-3.13 1.4-3.12 3.12-3.12q1.01.01 1.78.56l3.08-2.49q-.23-.55-.23-1.2.02-1.12.68-1.95l-1.3-1.84q-.48.16-1.01.16c-1.73 0-3.12-1.4-3.12-3.12s1.4-3.12 3.12-3.12" />
    </IconBase>
  ))
);

NodeMapFill.displayName = 'NodeMapFill';

// Triple export pattern
export { NodeMapFill, NodeMapFill as NodeMapFillIcon, NodeMapFill as SiNodeMapFill };
export default NodeMapFill;
export type { NodeMapFillProps };
