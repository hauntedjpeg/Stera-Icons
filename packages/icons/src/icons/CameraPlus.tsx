import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CameraPlusRegular } from './CameraPlusRegular.js';
import { CameraPlusRegularDuotone } from './CameraPlusRegularDuotone.js';
import { CameraPlusBold } from './CameraPlusBold.js';
import { CameraPlusBoldDuotone } from './CameraPlusBoldDuotone.js';
import { CameraPlusFill } from './CameraPlusFill.js';
import { CameraPlusFillDuotone } from './CameraPlusFillDuotone.js';

export interface CameraPlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CameraPlus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CameraPlusRegular } from 'stera-icons/icons/CameraPlusRegular';
 */
const CameraPlus = memo(forwardRef<SVGSVGElement, CameraPlusProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <CameraPlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CameraPlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CameraPlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CameraPlusFill ref={ref} {...rest} />;
  if (duotone) return <CameraPlusRegularDuotone ref={ref} {...rest} />;
  return <CameraPlusRegular ref={ref} {...rest} />;
}));

CameraPlus.displayName = 'CameraPlus';

// Triple export pattern
export { CameraPlus, CameraPlus as CameraPlusIcon, CameraPlus as SiCameraPlus };
export default CameraPlus;
