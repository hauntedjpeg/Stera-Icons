import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentCircleFillProps = Omit<IconBaseProps, 'children'>;

const AgentCircleFill = memo(
  forwardRef<SVGSVGElement, AgentCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75M9 7.5c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V9c0-.83-.67-1.5-1.5-1.5m6 0c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V9c0-.83-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

AgentCircleFill.displayName = 'AgentCircleFill';

// Triple export pattern
export { AgentCircleFill, AgentCircleFill as AgentCircleFillIcon, AgentCircleFill as SiAgentCircleFill };
export default AgentCircleFill;
export type { AgentCircleFillProps };
