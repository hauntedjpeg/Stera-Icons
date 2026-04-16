import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentWorkflowRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AgentWorkflowRegularDuotone = memo(
  forwardRef<SVGSVGElement, AgentWorkflowRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 11.25a.75.75 0 0 1 0 1.5c-1.24 0-2.25 1-2.25 2.25v.25a2.5 2.5 0 0 0 2.5 2.5h10.94l-1.22-1.22a.75.75 0 1 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H7.25a4 4 0 0 1-4-4V15A3.75 3.75 0 0 1 7 11.25" opacity={0.4} />
        <path fillRule="evenodd" d="M6.5 2.25a3.25 3.25 0 0 1 3.16 2.5h7.09a4 4 0 0 1 4 4V9A3.75 3.75 0 0 1 17 12.75a.75.75 0 0 1 0-1.5c1.24 0 2.25-1 2.25-2.25v-.25a2.5 2.5 0 0 0-2.5-2.5H9.66a3.25 3.25 0 1 1-3.16-4m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" opacity={0.4} />
        <path d="M11.86 8.9a.15.15 0 0 1 .28 0l.2.6a3.5 3.5 0 0 0 2.16 2.15l.6.2c.13.06.13.24 0 .3l-.6.2a3.5 3.5 0 0 0-2.15 2.15l-.2.6a.15.15 0 0 1-.3 0l-.2-.6a3.5 3.5 0 0 0-2.15-2.15l-.6-.2a.15.15 0 0 1 0-.3l.6-.2a3.5 3.5 0 0 0 2.15-2.15z" />
    </IconBase>
  ))
);

AgentWorkflowRegularDuotone.displayName = 'AgentWorkflowRegularDuotone';

// Triple export pattern (lucide-react style)
export { AgentWorkflowRegularDuotone, AgentWorkflowRegularDuotone as AgentWorkflowRegularDuotoneIcon, AgentWorkflowRegularDuotone as SiAgentWorkflowRegularDuotone };
export default AgentWorkflowRegularDuotone;
export type { AgentWorkflowRegularDuotoneProps };
