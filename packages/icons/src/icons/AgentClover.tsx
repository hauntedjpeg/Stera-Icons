import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AgentCloverRegular } from './AgentCloverRegular.js';
import { AgentCloverRegularDuotone } from './AgentCloverRegularDuotone.js';
import { AgentCloverBold } from './AgentCloverBold.js';
import { AgentCloverBoldDuotone } from './AgentCloverBoldDuotone.js';
import { AgentCloverFill } from './AgentCloverFill.js';
import { AgentCloverFillDuotone } from './AgentCloverFillDuotone.js';

export interface AgentCloverProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AgentClover - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AgentCloverRegular } from 'stera-icons/icons/AgentCloverRegular';
 */
const AgentClover = memo(forwardRef<SVGSVGElement, AgentCloverProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <AgentCloverBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AgentCloverBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AgentCloverFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AgentCloverFill ref={ref} {...rest} />;
  if (duotone) return <AgentCloverRegularDuotone ref={ref} {...rest} />;
  return <AgentCloverRegular ref={ref} {...rest} />;
}));

AgentClover.displayName = 'AgentClover';

// Triple export pattern
export { AgentClover, AgentClover as AgentCloverIcon, AgentClover as SiAgentClover };
export default AgentClover;
