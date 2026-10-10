import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyboardFillProps = Omit<IconBaseProps, 'children'>;

const KeyboardFill = memo(
  forwardRef<SVGSVGElement, KeyboardFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20 5.5c1.38 0 2.5 1.12 2.5 2.5v8c0 1.38-1.12 2.5-2.5 2.5H4c-1.3 0-2.36-.98-2.49-2.24L1.5 16V8c0-1.38 1.12-2.5 2.5-2.5zM6 13c-.55 0-1 .45-1 1s.45 1 1 1h.5c.55 0 1-.45 1-1s-.45-1-1-1zm3.75 0c-.55 0-1 .45-1 1s.45 1 1 1h4.5c.55 0 1-.45 1-1s-.45-1-1-1zm7.75 0c-.55 0-1 .45-1 1s.45 1 1 1h.6c.5-.06.9-.48.9-1s-.4-.94-.9-1h-.6M6 9c-.55 0-1 .45-1 1s.45 1 1 1h.5c.55 0 1-.45 1-1s-.45-1-1-1zm3.75 0c-.55 0-1 .45-1 1s.45 1 1 1h.5c.55 0 1-.45 1-1s-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1h.5c.55 0 1-.45 1-1s-.45-1-1-1zm3.75 0c-.55 0-1 .45-1 1s.45 1 1 1h.5c.55 0 1-.45 1-1s-.45-1-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

KeyboardFill.displayName = 'KeyboardFill';

// Triple export pattern
export { KeyboardFill, KeyboardFill as KeyboardFillIcon, KeyboardFill as SiKeyboardFill };
export default KeyboardFill;
export type { KeyboardFillProps };
