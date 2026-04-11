import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentCursorFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AgentCursorFillDuotone = memo(
  forwardRef<SVGSVGElement, AgentCursorFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v.81a.88.88 0 0 1-1.75 0V9.9c0-1.13 0-1.93-.05-2.56a3 3 0 0 0-.29-1.26 3 3 0 0 0-1.36-1.36 3 3 0 0 0-1.26-.3 35 35 0 0 0-2.56-.04H9.9c-1.13 0-1.93 0-2.56.05-.6.05-.98.14-1.26.29q-.9.46-1.36 1.36c-.15.28-.24.65-.3 1.26a35 35 0 0 0-.04 2.56v4.2c0 1.13 0 1.93.05 2.56.05.6.14.98.29 1.26q.46.9 1.36 1.36c.28.15.65.24 1.26.3.63.04 1.43.05 2.56.05h.8a.88.88 0 0 1 0 1.75h-.8q-1.64.02-2.7-.06a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06z" opacity={.4} />
        <path d="M11.25 13.07a1.44 1.44 0 0 1 1.72-1.86l.1.04 7.82 2.6a1.44 1.44 0 0 1-.05 2.75l-3.27.97-.96 3.27a1.44 1.44 0 0 1-2.76.05zM8.44 14.41a.88.88 0 0 1 1.24 1.24L8.62 16.7a.87.87 0 0 1-1.23-1.23zM6.15 10.47a.9.9 0 0 1 1.08-.62l1.44.39a.87.87 0 0 1-.45 1.69l-1.45-.4a.87.87 0 0 1-.62-1.06M15.47 7.39a.88.88 0 0 1 1.23 1.23l-1.05 1.06a.88.88 0 0 1-1.24-1.24zM10.47 6.15a.9.9 0 0 1 1.07.62l.39 1.45a.88.88 0 0 1-1.7.45l-.38-1.44a.9.9 0 0 1 .62-1.08" />
    </IconBase>
  ))
);

AgentCursorFillDuotone.displayName = 'AgentCursorFillDuotone';

// Triple export pattern (lucide-react style)
export { AgentCursorFillDuotone, AgentCursorFillDuotone as AgentCursorFillDuotoneIcon, AgentCursorFillDuotone as SiAgentCursorFillDuotone };
export default AgentCursorFillDuotone;
export type { AgentCursorFillDuotoneProps };
