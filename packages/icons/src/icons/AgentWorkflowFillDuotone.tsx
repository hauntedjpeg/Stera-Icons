import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentWorkflowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AgentWorkflowFillDuotone = memo(
  forwardRef<SVGSVGElement, AgentWorkflowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 11.13c.48 0 .88.39.88.87s-.4.88-.88.88c-1.17 0-2.12.95-2.12 2.12v.25c0 1.31 1.06 2.38 2.37 2.38h9.38V16c0-.35.2-.67.54-.8.32-.14.7-.07.95.18l2.5 2.5q.24.27.25.62 0 .35-.25.62l-2.5 2.5c-.25.25-.63.32-.96.19-.32-.14-.54-.46-.54-.81v-1.62H7.26c-2.28 0-4.12-1.85-4.12-4.13V15c0-2.14 1.73-3.87 3.87-3.87M6.5 2.25c1.5 0 2.75 1 3.13 2.38h7.12c2.28 0 4.13 1.84 4.13 4.12V9c0 2.14-1.74 3.88-3.88 3.88-.48 0-.87-.4-.87-.88s.39-.87.87-.87c1.17 0 2.12-.96 2.13-2.13v-.25c0-1.31-1.07-2.37-2.38-2.37H9.63C9.25 7.74 7.99 8.75 6.5 8.75c-1.8 0-3.25-1.46-3.25-3.25 0-1.8 1.46-3.25 3.25-3.25" opacity={0.4} />
        <path d="M11.86 8.9c.05-.13.23-.13.28 0l.2.6c.36 1 1.15 1.8 2.16 2.15l.6.2c.13.06.13.24 0 .3l-.6.2c-1 .35-1.8 1.14-2.15 2.15l-.2.6c-.06.13-.24.13-.3 0l-.2-.6c-.35-1-1.14-1.8-2.15-2.15l-.6-.2c-.13-.06-.13-.24 0-.3l.6-.2c1-.35 1.8-1.14 2.15-2.15z" />
    </IconBase>
  ))
);

AgentWorkflowFillDuotone.displayName = 'AgentWorkflowFillDuotone';

// Triple export pattern
export { AgentWorkflowFillDuotone, AgentWorkflowFillDuotone as AgentWorkflowFillDuotoneIcon, AgentWorkflowFillDuotone as SiAgentWorkflowFillDuotone };
export default AgentWorkflowFillDuotone;
export type { AgentWorkflowFillDuotoneProps };
