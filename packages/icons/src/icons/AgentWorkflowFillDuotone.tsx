import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentWorkflowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AgentWorkflowFillDuotone = memo(
  forwardRef<SVGSVGElement, AgentWorkflowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="agent-workflow-fill-duotone" {...props}>
      <path d="M7 11.13a.88.88 0 0 1 0 1.74c-1.17 0-2.12.96-2.12 2.13v.25a2.37 2.37 0 0 0 2.37 2.38h9.38V16a.88.88 0 0 1 1.49-.62l2.5 2.5a.9.9 0 0 1 0 1.24l-2.5 2.5a.88.88 0 0 1-1.5-.62v-1.62H7.26a4.1 4.1 0 0 1-4.12-4.13V15A3.9 3.9 0 0 1 7 11.13M6.5 2.25c1.5 0 2.75 1 3.13 2.38h7.12a4.1 4.1 0 0 1 4.13 4.12V9A3.9 3.9 0 0 1 17 12.88a.88.88 0 0 1 0-1.76c1.17 0 2.12-.95 2.13-2.12v-.25a2.37 2.37 0 0 0-2.38-2.37H9.63A3.25 3.25 0 1 1 6.5 2.25" opacity={0.4} />
        <path d="M11.56 9.26a.47.47 0 0 1 .88 0 3.7 3.7 0 0 0 2.3 2.3c.41.14.41.74 0 .88a3.7 3.7 0 0 0-2.3 2.3.47.47 0 0 1-.88 0 3.7 3.7 0 0 0-2.3-2.3.47.47 0 0 1 0-.88 3.7 3.7 0 0 0 2.3-2.3" />
    </IconBase>
  ))
);

AgentWorkflowFillDuotone.displayName = 'AgentWorkflowFillDuotone';

// Triple export pattern (lucide-react style)
export { AgentWorkflowFillDuotone, AgentWorkflowFillDuotone as AgentWorkflowFillDuotoneIcon, AgentWorkflowFillDuotone as SiAgentWorkflowFillDuotone };
export default AgentWorkflowFillDuotone;
export type { AgentWorkflowFillDuotoneProps };
