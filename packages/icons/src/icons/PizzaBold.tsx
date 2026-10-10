import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PizzaBoldProps = Omit<IconBaseProps, 'children'>;

const PizzaBold = memo(
  forwardRef<SVGSVGElement, PizzaBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c3.34 0 6.61.88 9.5 2.55.48.27.64.88.37 1.36l-1.5 2.6-1.47 2.54-2.27 3.94-3.76 6.51c-.18.3-.51.5-.87.5s-.69-.2-.87-.5l-2.58-4.47-.02-.03L3.7 8.63l-.07-.12-1.5-2.6c-.27-.48-.1-1.09.37-1.36C5.39 2.88 8.66 2 12 2m0 5c-2.12 0-4.21.48-6.12 1.4l1.7 2.95.04-.01q.14-.08.29-.13l.02-.01.3-.1h.03q.04-.02.1-.03l.07-.02.09-.01Q8.76 11 9 11c1.66 0 3 1.34 3 3l-.01.26-.01.08q-.03.24-.1.49l-.02.07-.06.18-.05.1-.07.16-.05.1-.07.12-.08.12-.09.12-.1.12-.02.04q-.3.34-.69.58L12 19l2.28-3.95q-.68-.39-1.13-1.02l-.06-.1-.08-.12-.08-.13-.1-.2-.06-.14q-.12-.29-.19-.59l-.01-.07q-.04-.2-.06-.41v-.04L12.5 12c0-1.93 1.57-3.5 3.5-3.5h.22l.12.02h.11l.11.03q.06 0 .11.02h.04l.14.03.03.01.13.04.1.03.08.03.13.05.09.04.1.05.1.04.11.07.06.03.33-.58C16.21 7.48 14.12 7 12 7m-3 6q-.23 0-.41.09l1 1.72.07-.06.1-.1q.1-.13.17-.29T10 14c0-.55-.45-1-1-1m7-2.5c-.83 0-1.5.67-1.5 1.5q0 .12.02.23.03.2.1.36l.01.02q.2.46.65.7l1.5-2.59q-.24-.15-.53-.2zM12 4c-2.65 0-5.26.62-7.62 1.8l.5.87C7.1 5.57 9.53 5 12 5s4.9.57 7.12 1.67l.5-.87C17.26 4.62 14.65 4 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

PizzaBold.displayName = 'PizzaBold';

// Triple export pattern
export { PizzaBold, PizzaBold as PizzaBoldIcon, PizzaBold as SiPizzaBold };
export default PizzaBold;
export type { PizzaBoldProps };
