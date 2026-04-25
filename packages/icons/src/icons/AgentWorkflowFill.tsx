import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentWorkflowFillProps = Omit<IconBaseProps, 'children'>;

const AgentWorkflowFill = memo(
  forwardRef<SVGSVGElement, AgentWorkflowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 11.13a.88.88 0 0 1 0 1.74c-1.17 0-2.12.96-2.12 2.13v.25a2.37 2.37 0 0 0 2.37 2.38h9.38V16a.88.88 0 0 1 1.49-.62l2.5 2.5a.9.9 0 0 1 0 1.24l-2.5 2.5a.88.88 0 0 1-1.5-.62v-1.62H7.26a4.1 4.1 0 0 1-4.12-4.13V15A3.9 3.9 0 0 1 7 11.13" />
        <path d="M11.86 8.9a.15.15 0 0 1 .28 0l.21.6a3.5 3.5 0 0 0 2.15 2.15l.6.2c.13.06.13.24 0 .3l-.6.2a3.5 3.5 0 0 0-2.15 2.15l-.2.6a.15.15 0 0 1-.3 0l-.2-.6a3.5 3.5 0 0 0-2.15-2.15l-.6-.2a.15.15 0 0 1 0-.3l.6-.2a3.5 3.5 0 0 0 2.15-2.15z" />
        <path d="M6.5 2.25c1.5 0 2.75 1 3.13 2.38h7.12a4.1 4.1 0 0 1 4.13 4.12V9A3.9 3.9 0 0 1 17 12.88a.88.88 0 0 1 0-1.76c1.17 0 2.12-.95 2.13-2.12v-.25a2.37 2.37 0 0 0-2.38-2.37H9.63A3.25 3.25 0 1 1 6.5 2.25" />
    </IconBase>
  ))
);

AgentWorkflowFill.displayName = 'AgentWorkflowFill';

// Triple export pattern (lucide-react style)
export { AgentWorkflowFill, AgentWorkflowFill as AgentWorkflowFillIcon, AgentWorkflowFill as SiAgentWorkflowFill };
export default AgentWorkflowFill;
export type { AgentWorkflowFillProps };
