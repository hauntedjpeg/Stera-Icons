import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyboardBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyboardBoldDuotone = memo(
  forwardRef<SVGSVGElement, KeyboardBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20 5c1.66 0 3 1.34 3 3v8c0 1.66-1.34 3-3 3H4c-1.6 0-2.92-1.26-3-2.85V8c0-1.66 1.34-3 3-3zM4 7c-.55 0-1 .45-1 1v8.1c.06.5.48.9 1 .9h16c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1z" clipRule="evenodd" opacity={.4} />
        <path d="M6.5 13c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1zM14.25 13c.55 0 1 .45 1 1s-.45 1-1 1h-4.5c-.55 0-1-.45-1-1s.45-1 1-1zM18.1 13c.5.06.9.48.9 1s-.4.94-.9 1h-.6c-.55 0-1-.45-1-1s.45-1 1-1h.6M6.5 9c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1zM10.25 9c.55 0 1 .45 1 1s-.45 1-1 1h-.5c-.55 0-1-.45-1-1s.45-1 1-1zM14.25 9c.55 0 1 .45 1 1s-.45 1-1 1h-.5c-.55 0-1-.45-1-1s.45-1 1-1zM18 9c.55 0 1 .45 1 1s-.45 1-1 1h-.5c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

KeyboardBoldDuotone.displayName = 'KeyboardBoldDuotone';

// Triple export pattern
export { KeyboardBoldDuotone, KeyboardBoldDuotone as KeyboardBoldDuotoneIcon, KeyboardBoldDuotone as SiKeyboardBoldDuotone };
export default KeyboardBoldDuotone;
export type { KeyboardBoldDuotoneProps };
