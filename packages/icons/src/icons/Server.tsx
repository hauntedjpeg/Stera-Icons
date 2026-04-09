import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ServerRegular } from './ServerRegular.js';
import { ServerRegularDuotone } from './ServerRegularDuotone.js';
import { ServerBold } from './ServerBold.js';
import { ServerBoldDuotone } from './ServerBoldDuotone.js';
import { ServerFill } from './ServerFill.js';
import { ServerFillDuotone } from './ServerFillDuotone.js';

export interface ServerProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Server - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ServerRegular } from 'stera-icons/icons/ServerRegular';
 */
const Server = memo(forwardRef<SVGSVGElement, ServerProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ServerBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ServerBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ServerFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ServerFill ref={ref} {...rest} />;
  if (duotone) return <ServerRegularDuotone ref={ref} {...rest} />;
  return <ServerRegular ref={ref} {...rest} />;
}));

Server.displayName = 'Server';

// Triple export pattern (lucide-react style)
export { Server, Server as ServerIcon, Server as SiServer };
export default Server;
