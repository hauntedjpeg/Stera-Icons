import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ConnectionKnotRegular } from './ConnectionKnotRegular.js';
import { ConnectionKnotRegularDuotone } from './ConnectionKnotRegularDuotone.js';
import { ConnectionKnotBold } from './ConnectionKnotBold.js';
import { ConnectionKnotBoldDuotone } from './ConnectionKnotBoldDuotone.js';
import { ConnectionKnotFill } from './ConnectionKnotFill.js';
import { ConnectionKnotFillDuotone } from './ConnectionKnotFillDuotone.js';

export interface ConnectionKnotProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ConnectionKnot - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ConnectionKnotRegular } from 'stera-icons/icons/ConnectionKnotRegular';
 */
const ConnectionKnot = memo(forwardRef<SVGSVGElement, ConnectionKnotProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ConnectionKnotBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ConnectionKnotBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ConnectionKnotFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ConnectionKnotFill ref={ref} {...rest} />;
  if (duotone) return <ConnectionKnotRegularDuotone ref={ref} {...rest} />;
  return <ConnectionKnotRegular ref={ref} {...rest} />;
}));

ConnectionKnot.displayName = 'ConnectionKnot';

// Triple export pattern
export { ConnectionKnot, ConnectionKnot as ConnectionKnotIcon, ConnectionKnot as SiConnectionKnot };
export default ConnectionKnot;
