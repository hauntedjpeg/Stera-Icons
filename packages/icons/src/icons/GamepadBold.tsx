import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GamepadBoldProps = Omit<IconBaseProps, 'children'>;

const GamepadBold = memo(
  forwardRef<SVGSVGElement, GamepadBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 9c.56 0 1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1H9v1c0 .56-.44 1-1 1-.55 0-1-.44-1-1v-1H6c-.55 0-1-.45-1-1s.45-1 1-1h1v-1c0-.55.45-1 1-1M13.62 12.62c.48-.5 1.28-.5 1.76 0h.01c.49.5.49 1.28 0 1.77s-1.28.49-1.77 0c-.5-.5-.5-1.29 0-1.77M16.62 9.62c.48-.5 1.28-.5 1.76 0h.01c.49.5.49 1.28 0 1.77s-1.28.49-1.77 0c-.5-.5-.5-1.29 0-1.77" />
        <path fillRule="evenodd" d="M16 5c3.87 0 7 3.13 7 7s-3.13 7-7 7H8c-3.87 0-7-3.13-7-7s3.13-7 7-7zM8 7c-2.76 0-5 2.24-5 5s2.24 5 5 5h8c2.76 0 5-2.24 5-5s-2.24-5-5-5z" clipRule="evenodd" />
    </IconBase>
  ))
);

GamepadBold.displayName = 'GamepadBold';

// Triple export pattern
export { GamepadBold, GamepadBold as GamepadBoldIcon, GamepadBold as SiGamepadBold };
export default GamepadBold;
export type { GamepadBoldProps };
