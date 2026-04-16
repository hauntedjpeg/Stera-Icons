import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ExternalLinkRegular } from './ExternalLinkRegular.js';
import { ExternalLinkRegularDuotone } from './ExternalLinkRegularDuotone.js';
import { ExternalLinkBold } from './ExternalLinkBold.js';
import { ExternalLinkBoldDuotone } from './ExternalLinkBoldDuotone.js';
import { ExternalLinkFill } from './ExternalLinkFill.js';
import { ExternalLinkFillDuotone } from './ExternalLinkFillDuotone.js';

export interface ExternalLinkProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ExternalLink - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ExternalLinkRegular } from 'stera-icons/icons/ExternalLinkRegular';
 */
const ExternalLink = memo(forwardRef<SVGSVGElement, ExternalLinkProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ExternalLinkBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ExternalLinkBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ExternalLinkFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ExternalLinkFill ref={ref} {...rest} />;
  if (duotone) return <ExternalLinkRegularDuotone ref={ref} {...rest} />;
  return <ExternalLinkRegular ref={ref} {...rest} />;
}));

ExternalLink.displayName = 'ExternalLink';

// Triple export pattern (lucide-react style)
export { ExternalLink, ExternalLink as ExternalLinkIcon, ExternalLink as SiExternalLink };
export default ExternalLink;
