import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GamepadRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GamepadRegularDuotone = memo(
  forwardRef<SVGSVGElement, GamepadRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16 5.25c3.73 0 6.75 3.02 6.75 6.75s-3.02 6.75-6.75 6.75H8c-3.73 0-6.75-3.02-6.75-6.75S4.27 5.25 8 5.25zm-8 1.5C5.1 6.75 2.75 9.1 2.75 12S5.1 17.25 8 17.25h8c2.9 0 5.25-2.35 5.25-5.25S18.9 6.75 16 6.75z" clipRule="evenodd" opacity={.4} />
        <path d="M8 9.25c.42 0 .75.34.75.75v1.25H10c.41 0 .75.34.75.75s-.34.75-.75.75H8.75V14c0 .42-.33.75-.75.75-.4 0-.75-.33-.75-.75v-1.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25V10c0-.4.34-.75.75-.75M13.8 12.8c.38-.4 1.02-.4 1.4 0h.01c.4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0-.4-.4-.4-1.03 0-1.42M16.8 9.8c.38-.4 1.02-.4 1.4 0h.01c.4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0-.4-.4-.4-1.03 0-1.42" />
    </IconBase>
  ))
);

GamepadRegularDuotone.displayName = 'GamepadRegularDuotone';

// Triple export pattern
export { GamepadRegularDuotone, GamepadRegularDuotone as GamepadRegularDuotoneIcon, GamepadRegularDuotone as SiGamepadRegularDuotone };
export default GamepadRegularDuotone;
export type { GamepadRegularDuotoneProps };
