import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MilestoneRegular } from './MilestoneRegular.js';
import { MilestoneRegularDuotone } from './MilestoneRegularDuotone.js';
import { MilestoneBold } from './MilestoneBold.js';
import { MilestoneBoldDuotone } from './MilestoneBoldDuotone.js';
import { MilestoneFill } from './MilestoneFill.js';
import { MilestoneFillDuotone } from './MilestoneFillDuotone.js';

export interface MilestoneProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Milestone - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MilestoneRegular } from 'stera-icons/icons/MilestoneRegular';
 */
const Milestone = memo(forwardRef<SVGSVGElement, MilestoneProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MilestoneBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MilestoneBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MilestoneFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MilestoneFill ref={ref} {...rest} />;
  if (duotone) return <MilestoneRegularDuotone ref={ref} {...rest} />;
  return <MilestoneRegular ref={ref} {...rest} />;
}));

Milestone.displayName = 'Milestone';

// Triple export pattern (lucide-react style)
export { Milestone, Milestone as MilestoneIcon, Milestone as SiMilestone };
export default Milestone;
