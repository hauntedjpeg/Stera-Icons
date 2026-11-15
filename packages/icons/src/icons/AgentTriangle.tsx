import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AgentTriangleRegular } from './AgentTriangleRegular.js';
import { AgentTriangleRegularDuotone } from './AgentTriangleRegularDuotone.js';
import { AgentTriangleBold } from './AgentTriangleBold.js';
import { AgentTriangleBoldDuotone } from './AgentTriangleBoldDuotone.js';
import { AgentTriangleFill } from './AgentTriangleFill.js';
import { AgentTriangleFillDuotone } from './AgentTriangleFillDuotone.js';

export interface AgentTriangleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AgentTriangle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AgentTriangleRegular } from 'stera-icons/icons/AgentTriangleRegular';
 */
const AgentTriangle = memo(forwardRef<SVGSVGElement, AgentTriangleProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <AgentTriangleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AgentTriangleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AgentTriangleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AgentTriangleFill ref={ref} {...rest} />;
  if (duotone) return <AgentTriangleRegularDuotone ref={ref} {...rest} />;
  return <AgentTriangleRegular ref={ref} {...rest} />;
}));

AgentTriangle.displayName = 'AgentTriangle';

// Triple export pattern
export { AgentTriangle, AgentTriangle as AgentTriangleIcon, AgentTriangle as SiAgentTriangle };
export default AgentTriangle;
