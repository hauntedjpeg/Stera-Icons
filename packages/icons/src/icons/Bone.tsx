import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BoneRegular } from './BoneRegular.js';
import { BoneRegularDuotone } from './BoneRegularDuotone.js';
import { BoneBold } from './BoneBold.js';
import { BoneBoldDuotone } from './BoneBoldDuotone.js';
import { BoneFill } from './BoneFill.js';
import { BoneFillDuotone } from './BoneFillDuotone.js';

export interface BoneProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Bone - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BoneRegular } from 'stera-icons/icons/BoneRegular';
 */
const Bone = memo(forwardRef<SVGSVGElement, BoneProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BoneBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BoneBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BoneFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BoneFill ref={ref} {...rest} />;
  if (duotone) return <BoneRegularDuotone ref={ref} {...rest} />;
  return <BoneRegular ref={ref} {...rest} />;
}));

Bone.displayName = 'Bone';

// Triple export pattern (lucide-react style)
export { Bone, Bone as BoneIcon, Bone as SiBone };
export default Bone;
