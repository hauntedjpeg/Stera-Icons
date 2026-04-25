import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CloudCliRegular } from './CloudCliRegular.js';
import { CloudCliRegularDuotone } from './CloudCliRegularDuotone.js';
import { CloudCliBold } from './CloudCliBold.js';
import { CloudCliBoldDuotone } from './CloudCliBoldDuotone.js';
import { CloudCliFill } from './CloudCliFill.js';
import { CloudCliFillDuotone } from './CloudCliFillDuotone.js';

export interface CloudCliProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CloudCli - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CloudCliRegular } from 'stera-icons/icons/CloudCliRegular';
 */
const CloudCli = memo(forwardRef<SVGSVGElement, CloudCliProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CloudCliBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CloudCliBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CloudCliFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CloudCliFill ref={ref} {...rest} />;
  if (duotone) return <CloudCliRegularDuotone ref={ref} {...rest} />;
  return <CloudCliRegular ref={ref} {...rest} />;
}));

CloudCli.displayName = 'CloudCli';

// Triple export pattern (lucide-react style)
export { CloudCli, CloudCli as CloudCliIcon, CloudCli as SiCloudCli };
export default CloudCli;
