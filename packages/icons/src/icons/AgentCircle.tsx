import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AgentCircleRegular } from './AgentCircleRegular.js';
import { AgentCircleRegularDuotone } from './AgentCircleRegularDuotone.js';
import { AgentCircleBold } from './AgentCircleBold.js';
import { AgentCircleBoldDuotone } from './AgentCircleBoldDuotone.js';
import { AgentCircleFill } from './AgentCircleFill.js';
import { AgentCircleFillDuotone } from './AgentCircleFillDuotone.js';

export interface AgentCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AgentCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AgentCircleRegular } from 'stera-icons/icons/AgentCircleRegular';
 */
const AgentCircle = memo(forwardRef<SVGSVGElement, AgentCircleProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <AgentCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AgentCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AgentCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AgentCircleFill ref={ref} {...rest} />;
  if (duotone) return <AgentCircleRegularDuotone ref={ref} {...rest} />;
  return <AgentCircleRegular ref={ref} {...rest} />;
}));

AgentCircle.displayName = 'AgentCircle';

// Triple export pattern
export { AgentCircle, AgentCircle as AgentCircleIcon, AgentCircle as SiAgentCircle };
export default AgentCircle;
