import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentFlowerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AgentFlowerBoldDuotone = memo(
  forwardRef<SVGSVGElement, AgentFlowerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.75 1.93C11 .7 13.01.7 14.25 1.93l1.01 1.01q.34.35.84.35h1.43c1.76 0 3.18 1.42 3.18 3.18V7.9q0 .5.35.84l1 1.01c1.25 1.24 1.25 3.26 0 4.5l-1 1.01q-.35.35-.35.84v1.43c0 1.76-1.42 3.18-3.18 3.18H16.1q-.5 0-.84.35l-1.01 1c-1.24 1.25-3.26 1.25-4.5 0l-1.01-1q-.34-.35-.84-.35H6.47c-1.76 0-3.18-1.42-3.18-3.18V16.1q0-.5-.35-.84l-1-1.01c-1.25-1.24-1.25-3.26 0-4.5l1-1.01q.35-.34.35-.84V6.47c0-1.76 1.42-3.18 3.18-3.18H7.9q.5 0 .84-.35zm3.08 1.42c-.46-.47-1.2-.47-1.67 0l-1 1c-.6.6-1.41.94-2.26.94H6.47c-.65 0-1.18.53-1.18 1.18V7.9c0 .85-.34 1.66-.93 2.25l-1.01 1.01c-.47.47-.47 1.21 0 1.67l1 1.02c.6.6.94 1.4.94 2.25v1.43c0 .65.53 1.18 1.18 1.18H7.9c.85 0 1.66.34 2.25.93l1.01 1.01c.47.47 1.21.47 1.67 0l1.02-1c.6-.6 1.4-.94 2.25-.94h1.43c.65 0 1.18-.53 1.18-1.18V16.1c0-.85.34-1.66.93-2.25l1.01-1.02c.47-.46.47-1.2 0-1.67l-1-1c-.6-.6-.94-1.41-.94-2.26V6.47c0-.65-.53-1.18-1.18-1.18H16.1c-.85 0-1.66-.34-2.25-.93z" clipRule="evenodd" opacity={.4} />
        <path d="M9 7.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V9c0-.83.67-1.5 1.5-1.5M15 7.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V9c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

AgentFlowerBoldDuotone.displayName = 'AgentFlowerBoldDuotone';

// Triple export pattern
export { AgentFlowerBoldDuotone, AgentFlowerBoldDuotone as AgentFlowerBoldDuotoneIcon, AgentFlowerBoldDuotone as SiAgentFlowerBoldDuotone };
export default AgentFlowerBoldDuotone;
export type { AgentFlowerBoldDuotoneProps };
