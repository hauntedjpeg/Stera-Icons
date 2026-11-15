import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentCircleBoldProps = Omit<IconBaseProps, 'children'>;

const AgentCircleBold = memo(
  forwardRef<SVGSVGElement, AgentCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 7.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V9c0-.83.67-1.5 1.5-1.5M15 7.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V9c0-.83.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

AgentCircleBold.displayName = 'AgentCircleBold';

// Triple export pattern
export { AgentCircleBold, AgentCircleBold as AgentCircleBoldIcon, AgentCircleBold as SiAgentCircleBold };
export default AgentCircleBold;
export type { AgentCircleBoldProps };
