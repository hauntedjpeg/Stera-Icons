import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentCloverRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AgentCloverRegularDuotone = memo(
  forwardRef<SVGSVGElement, AgentCloverRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.53 3.38c1.44-2.84 5.5-2.84 6.94 0 .43.84 1.31 1.36 2.26 1.3 3.18-.17 5.2 3.35 3.47 6.01-.52.8-.52 1.82 0 2.62 1.74 2.66-.29 6.18-3.47 6-.95-.05-1.83.46-2.26 1.3-1.44 2.85-5.5 2.85-6.94 0-.43-.84-1.32-1.35-2.26-1.3-3.18.18-5.2-3.34-3.47-6 .52-.8.52-1.82 0-2.62-1.74-2.66.29-6.18 3.47-6 .94.05 1.83-.46 2.26-1.3m5.6.68c-.88-1.75-3.38-1.75-4.26 0-.7 1.37-2.14 2.2-3.68 2.12-1.96-.1-3.2 2.06-2.13 3.7.84 1.29.84 2.95 0 4.24-1.07 1.64.17 3.8 2.13 3.7 1.54-.09 2.98.75 3.68 2.12.88 1.75 3.38 1.75 4.26 0 .7-1.37 2.14-2.2 3.68-2.12 1.95.1 3.2-2.06 2.13-3.7-.84-1.29-.84-2.95 0-4.25 1.07-1.63-.18-3.8-2.13-3.69-1.54.09-2.98-.75-3.68-2.12" clipRule="evenodd" opacity={.4} />
        <path d="M9 7.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V9c0-.83.67-1.5 1.5-1.5M15 7.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V9c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

AgentCloverRegularDuotone.displayName = 'AgentCloverRegularDuotone';

// Triple export pattern
export { AgentCloverRegularDuotone, AgentCloverRegularDuotone as AgentCloverRegularDuotoneIcon, AgentCloverRegularDuotone as SiAgentCloverRegularDuotone };
export default AgentCloverRegularDuotone;
export type { AgentCloverRegularDuotoneProps };
