import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentWorkflowRegularProps = Omit<IconBaseProps, 'children'>;

const AgentWorkflowRegular = memo(
  forwardRef<SVGSVGElement, AgentWorkflowRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 11.25c.41 0 .75.34.75.75s-.34.75-.75.75c-1.24 0-2.25 1-2.25 2.25v.25c0 1.38 1.12 2.5 2.5 2.5h10.94l-1.22-1.22c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l2.5 2.5q.22.21.22.53 0 .2-.1.37l-.12.16-2.5 2.5c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l1.22-1.22H7.25c-2.2 0-4-1.8-4-4V15c0-2.07 1.68-3.75 3.75-3.75" />
        <path d="M11.86 8.9c.05-.13.23-.13.28 0l.21.6c.35 1 1.14 1.8 2.15 2.15l.6.2c.13.06.13.24 0 .3l-.6.2c-1 .35-1.8 1.14-2.15 2.15l-.2.6c-.06.13-.24.13-.3 0l-.2-.6c-.35-1-1.14-1.8-2.15-2.15l-.6-.2c-.13-.06-.13-.24 0-.3l.6-.2c1-.35 1.8-1.14 2.15-2.15z" />
        <path fillRule="evenodd" d="M6.5 2.25c1.54 0 2.82 1.07 3.16 2.5h7.09c2.2 0 4 1.8 4 4V9c0 2.07-1.68 3.75-3.75 3.75-.41 0-.75-.34-.75-.75s.34-.75.75-.75c1.24 0 2.25-1 2.25-2.25v-.25c0-1.38-1.12-2.5-2.5-2.5H9.66c-.34 1.43-1.62 2.5-3.16 2.5-1.8 0-3.25-1.46-3.25-3.25 0-1.8 1.46-3.25 3.25-3.25m0 1.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75" clipRule="evenodd" />
    </IconBase>
  ))
);

AgentWorkflowRegular.displayName = 'AgentWorkflowRegular';

// Triple export pattern
export { AgentWorkflowRegular, AgentWorkflowRegular as AgentWorkflowRegularIcon, AgentWorkflowRegular as SiAgentWorkflowRegular };
export default AgentWorkflowRegular;
export type { AgentWorkflowRegularProps };
