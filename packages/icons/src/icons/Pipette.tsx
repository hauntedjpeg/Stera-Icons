import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PipetteRegular } from './PipetteRegular.js';
import { PipetteRegularDuotone } from './PipetteRegularDuotone.js';
import { PipetteBold } from './PipetteBold.js';
import { PipetteBoldDuotone } from './PipetteBoldDuotone.js';
import { PipetteFill } from './PipetteFill.js';
import { PipetteFillDuotone } from './PipetteFillDuotone.js';

export interface PipetteProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Pipette - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PipetteRegular } from 'stera-icons/icons/PipetteRegular';
 */
const Pipette = memo(forwardRef<SVGSVGElement, PipetteProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PipetteBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PipetteBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PipetteFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PipetteFill ref={ref} {...rest} />;
  if (duotone) return <PipetteRegularDuotone ref={ref} {...rest} />;
  return <PipetteRegular ref={ref} {...rest} />;
}));

Pipette.displayName = 'Pipette';

// Triple export pattern (lucide-react style)
export { Pipette, Pipette as PipetteIcon, Pipette as SiPipette };
export default Pipette;
