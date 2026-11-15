import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AgentFlowerRegular } from './AgentFlowerRegular.js';
import { AgentFlowerRegularDuotone } from './AgentFlowerRegularDuotone.js';
import { AgentFlowerBold } from './AgentFlowerBold.js';
import { AgentFlowerBoldDuotone } from './AgentFlowerBoldDuotone.js';
import { AgentFlowerFill } from './AgentFlowerFill.js';
import { AgentFlowerFillDuotone } from './AgentFlowerFillDuotone.js';

export interface AgentFlowerProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AgentFlower - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AgentFlowerRegular } from 'stera-icons/icons/AgentFlowerRegular';
 */
const AgentFlower = memo(forwardRef<SVGSVGElement, AgentFlowerProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <AgentFlowerBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AgentFlowerBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AgentFlowerFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AgentFlowerFill ref={ref} {...rest} />;
  if (duotone) return <AgentFlowerRegularDuotone ref={ref} {...rest} />;
  return <AgentFlowerRegular ref={ref} {...rest} />;
}));

AgentFlower.displayName = 'AgentFlower';

// Triple export pattern
export { AgentFlower, AgentFlower as AgentFlowerIcon, AgentFlower as SiAgentFlower };
export default AgentFlower;
