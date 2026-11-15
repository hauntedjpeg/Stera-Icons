import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AgentCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, AgentCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M9 7.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V9c0-.83.67-1.5 1.5-1.5M15 7.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V9c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

AgentCircleRegularDuotone.displayName = 'AgentCircleRegularDuotone';

// Triple export pattern
export { AgentCircleRegularDuotone, AgentCircleRegularDuotone as AgentCircleRegularDuotoneIcon, AgentCircleRegularDuotone as SiAgentCircleRegularDuotone };
export default AgentCircleRegularDuotone;
export type { AgentCircleRegularDuotoneProps };
