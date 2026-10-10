import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentWorkflowBoldProps = Omit<IconBaseProps, 'children'>;

const AgentWorkflowBold = memo(
  forwardRef<SVGSVGElement, AgentWorkflowBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 11c.55 0 1 .45 1 1s-.45 1-1 1c-1.1 0-2 .9-2 2v.25c0 1.24 1 2.25 2.25 2.25h10.34l-.8-.8c-.39-.38-.39-1.02 0-1.4.4-.4 1.03-.4 1.42 0l2.5 2.5q.28.27.29.7 0 .34-.19.58l-.1.13-2.5 2.5c-.4.39-1.03.39-1.42 0-.39-.4-.39-1.03 0-1.42l.8-.79H7.25C4.9 19.5 3 17.6 3 15.25V15c0-2.2 1.8-4 4-4" />
        <path d="M11.86 8.9c.05-.13.23-.13.28 0l.21.6c.35 1 1.14 1.8 2.15 2.15l.6.2c.13.06.13.24 0 .3l-.6.2c-1 .35-1.8 1.14-2.15 2.15l-.2.6c-.06.13-.24.13-.3 0l-.2-.6c-.35-1-1.14-1.8-2.15-2.15l-.6-.2c-.13-.06-.13-.24 0-.3l.6-.2c1-.35 1.8-1.14 2.15-2.15z" />
        <path fillRule="evenodd" d="M6.5 2c1.59 0 2.92 1.05 3.35 2.5h6.9C19.1 4.5 21 6.4 21 8.75V9c0 2.2-1.8 4-4 4-.55 0-1-.45-1-1s.45-1 1-1c1.1 0 2-.9 2-2v-.25c0-1.24-1-2.25-2.25-2.25h-6.9C9.42 7.95 8.1 9 6.5 9 4.57 9 3 7.43 3 5.5S4.57 2 6.5 2m0 2C5.67 4 5 4.67 5 5.5S5.67 7 6.5 7 8 6.33 8 5.5 7.33 4 6.5 4" clipRule="evenodd" />
    </IconBase>
  ))
);

AgentWorkflowBold.displayName = 'AgentWorkflowBold';

// Triple export pattern
export { AgentWorkflowBold, AgentWorkflowBold as AgentWorkflowBoldIcon, AgentWorkflowBold as SiAgentWorkflowBold };
export default AgentWorkflowBold;
export type { AgentWorkflowBoldProps };
