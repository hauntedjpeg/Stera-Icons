import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentCloverBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AgentCloverBoldDuotone = memo(
  forwardRef<SVGSVGElement, AgentCloverBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.3 3.27c1.54-3.03 5.86-3.03 7.4 0 .38.75 1.17 1.21 2.02 1.17 3.38-.19 5.54 3.55 3.69 6.4-.46.7-.46 1.62 0 2.33 1.8 2.75-.18 6.34-3.38 6.4h-.47c-.79 0-1.5.45-1.87 1.16-1.53 3.03-5.85 3.03-7.38 0-.39-.75-1.18-1.21-2.03-1.17-3.38.19-5.54-3.55-3.69-6.4.46-.7.46-1.62 0-2.33C.74 8 2.9 4.25 6.3 4.43c.84.05 1.63-.4 2.02-1.16m5.6.9c-.79-1.56-3.02-1.56-3.8 0-.75 1.47-2.29 2.35-3.93 2.26-1.75-.1-2.86 1.84-1.9 3.3.9 1.38.9 3.16 0 4.53-.96 1.47.16 3.4 1.9 3.3 1.64-.08 3.18.8 3.92 2.27.8 1.56 3.02 1.56 3.82 0 .74-1.46 2.28-2.35 3.91-2.26 1.75.1 2.87-1.84 1.91-3.3-.9-1.38-.9-3.16 0-4.53.96-1.47-.16-3.4-1.9-3.3-1.64.08-3.18-.8-3.92-2.27" clipRule="evenodd" opacity={.4} />
        <path d="M9 7.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V9c0-.83.67-1.5 1.5-1.5M15 7.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V9c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

AgentCloverBoldDuotone.displayName = 'AgentCloverBoldDuotone';

// Triple export pattern
export { AgentCloverBoldDuotone, AgentCloverBoldDuotone as AgentCloverBoldDuotoneIcon, AgentCloverBoldDuotone as SiAgentCloverBoldDuotone };
export default AgentCloverBoldDuotone;
export type { AgentCloverBoldDuotoneProps };
