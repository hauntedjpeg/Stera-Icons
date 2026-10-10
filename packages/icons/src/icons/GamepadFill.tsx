import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GamepadFillProps = Omit<IconBaseProps, 'children'>;

const GamepadFill = memo(
  forwardRef<SVGSVGElement, GamepadFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16 5.13c3.8 0 6.88 3.07 6.88 6.87S19.8 18.88 16 18.88H8c-3.8 0-6.87-3.08-6.87-6.88S4.2 5.13 8 5.13zm-8.5 4c-.48 0-.87.4-.87.87v1.13H5.5c-.48 0-.87.39-.87.87s.39.88.87.88h1.13V14c0 .49.4.88.87.88.49 0 .88-.4.88-.88v-1.12H9.5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87H8.38V10c0-.48-.4-.87-.88-.87m8.38 3.49c-.48-.5-1.28-.5-1.76 0-.5.48-.5 1.28 0 1.76v.01c.5.49 1.28.49 1.77 0s.49-1.28 0-1.77m3-3c-.48-.5-1.28-.5-1.76 0-.5.48-.5 1.28 0 1.76v.01c.5.49 1.28.49 1.77 0s.49-1.28 0-1.77" clipRule="evenodd" />
    </IconBase>
  ))
);

GamepadFill.displayName = 'GamepadFill';

// Triple export pattern
export { GamepadFill, GamepadFill as GamepadFillIcon, GamepadFill as SiGamepadFill };
export default GamepadFill;
export type { GamepadFillProps };
