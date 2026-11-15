import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentCloverFillProps = Omit<IconBaseProps, 'children'>;

const AgentCloverFill = memo(
  forwardRef<SVGSVGElement, AgentCloverFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.53 3.38c1.44-2.84 5.5-2.84 6.94 0 .43.85 1.31 1.36 2.26 1.3 3.18-.17 5.2 3.35 3.47 6.01-.52.8-.52 1.82 0 2.62 1.74 2.66-.29 6.18-3.47 6-.95-.05-1.83.47-2.26 1.3-1.44 2.85-5.5 2.85-6.94 0-.43-.84-1.32-1.35-2.26-1.3-3.18.18-5.2-3.34-3.47-6 .52-.8.52-1.82 0-2.62-1.74-2.66.29-6.18 3.47-6 .94.05 1.83-.46 2.26-1.3M9 7.5c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V9c0-.83-.67-1.5-1.5-1.5m6 0c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V9c0-.83-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

AgentCloverFill.displayName = 'AgentCloverFill';

// Triple export pattern
export { AgentCloverFill, AgentCloverFill as AgentCloverFillIcon, AgentCloverFill as SiAgentCloverFill };
export default AgentCloverFill;
export type { AgentCloverFillProps };
