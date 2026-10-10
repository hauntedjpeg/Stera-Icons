import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ConsoleHandheldRegular } from './ConsoleHandheldRegular.js';
import { ConsoleHandheldRegularDuotone } from './ConsoleHandheldRegularDuotone.js';
import { ConsoleHandheldBold } from './ConsoleHandheldBold.js';
import { ConsoleHandheldBoldDuotone } from './ConsoleHandheldBoldDuotone.js';
import { ConsoleHandheldFill } from './ConsoleHandheldFill.js';
import { ConsoleHandheldFillDuotone } from './ConsoleHandheldFillDuotone.js';

export interface ConsoleHandheldProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ConsoleHandheld - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ConsoleHandheldRegular } from 'stera-icons/icons/ConsoleHandheldRegular';
 */
const ConsoleHandheld = memo(forwardRef<SVGSVGElement, ConsoleHandheldProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <ConsoleHandheldBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ConsoleHandheldBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ConsoleHandheldFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ConsoleHandheldFill ref={ref} {...rest} />;
  if (duotone) return <ConsoleHandheldRegularDuotone ref={ref} {...rest} />;
  return <ConsoleHandheldRegular ref={ref} {...rest} />;
}));

ConsoleHandheld.displayName = 'ConsoleHandheld';

// Triple export pattern
export { ConsoleHandheld, ConsoleHandheld as ConsoleHandheldIcon, ConsoleHandheld as SiConsoleHandheld };
export default ConsoleHandheld;
