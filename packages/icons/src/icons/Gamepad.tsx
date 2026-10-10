import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { GamepadRegular } from './GamepadRegular.js';
import { GamepadRegularDuotone } from './GamepadRegularDuotone.js';
import { GamepadBold } from './GamepadBold.js';
import { GamepadBoldDuotone } from './GamepadBoldDuotone.js';
import { GamepadFill } from './GamepadFill.js';
import { GamepadFillDuotone } from './GamepadFillDuotone.js';

export interface GamepadProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Gamepad - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GamepadRegular } from 'stera-icons/icons/GamepadRegular';
 */
const Gamepad = memo(forwardRef<SVGSVGElement, GamepadProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <GamepadBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GamepadBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GamepadFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GamepadFill ref={ref} {...rest} />;
  if (duotone) return <GamepadRegularDuotone ref={ref} {...rest} />;
  return <GamepadRegular ref={ref} {...rest} />;
}));

Gamepad.displayName = 'Gamepad';

// Triple export pattern
export { Gamepad, Gamepad as GamepadIcon, Gamepad as SiGamepad };
export default Gamepad;
