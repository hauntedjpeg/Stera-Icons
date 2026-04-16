import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentWorkflowBoldProps = Omit<IconBaseProps, 'children'>;

const AgentWorkflowBold = memo(
  forwardRef<SVGSVGElement, AgentWorkflowBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 11a1 1 0 1 1 0 2 2 2 0 0 0-2 2v.25c0 1.24 1 2.25 2.25 2.25h10.34l-.8-.8a1 1 0 1 1 1.42-1.4l2.5 2.5a1 1 0 0 1 0 1.4l-2.5 2.5a1 1 0 1 1-1.42-1.4l.8-.8H7.25A4.25 4.25 0 0 1 3 15.25V15a4 4 0 0 1 4-4" opacity={0.4} />
        <path d="M11.86 8.9a.15.15 0 0 1 .28 0l.21.6a3.5 3.5 0 0 0 2.15 2.15l.6.2c.13.06.13.24 0 .3l-.6.2a3.5 3.5 0 0 0-2.15 2.15l-.2.6a.15.15 0 0 1-.3 0l-.2-.6a3.5 3.5 0 0 0-2.15-2.15l-.6-.2a.15.15 0 0 1 0-.3l.6-.2a3.5 3.5 0 0 0 2.15-2.15z" opacity={0.4} />
        <path fillRule="evenodd" d="M6.5 2a3.5 3.5 0 0 1 3.35 2.5h6.9C19.1 4.5 21 6.4 21 8.75V9a4 4 0 0 1-4 4 1 1 0 1 1 0-2 2 2 0 0 0 2-2v-.25c0-1.24-1-2.25-2.25-2.25h-6.9A3.5 3.5 0 1 1 6.5 2m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={0.4} />
    </IconBase>
  ))
);

AgentWorkflowBold.displayName = 'AgentWorkflowBold';

// Triple export pattern (lucide-react style)
export { AgentWorkflowBold, AgentWorkflowBold as AgentWorkflowBoldIcon, AgentWorkflowBold as SiAgentWorkflowBold };
export default AgentWorkflowBold;
export type { AgentWorkflowBoldProps };
