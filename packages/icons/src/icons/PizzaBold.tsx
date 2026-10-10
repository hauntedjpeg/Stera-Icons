import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PizzaBoldProps = Omit<IconBaseProps, 'children'>;

const PizzaBold = memo(
  forwardRef<SVGSVGElement, PizzaBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2a19 19 0 0 1 9.5 2.55 1 1 0 0 1 .37 1.36l-1.5 2.6-1.47 2.54-2.27 3.94-3.76 6.51a1 1 0 0 1-1.74 0l-2.58-4.47-.02-.03L3.7 8.63l-.07-.12-1.5-2.6a1 1 0 0 1 .37-1.36A19 19 0 0 1 12 2m0 5a14 14 0 0 0-6.12 1.4l1.7 2.95.04-.01q.14-.08.29-.13l.02-.01.3-.1h.03q.04-.02.1-.03l.07-.02A3 3 0 0 1 9 11a3 3 0 0 1 2.99 3.26l-.01.08a3 3 0 0 1-.68 1.58l-.03.04a3 3 0 0 1-.69.58L12 19l2.28-3.95a3.5 3.5 0 0 1-1.2-1.12l-.07-.12-.08-.13a4 4 0 0 1-.35-.93l-.01-.07-.06-.41v-.04L12.5 12a3.5 3.5 0 0 1 3.72-3.5l.12.02h.11l.11.03q.06 0 .11.02h.04l.14.03.03.01.13.04.31.11.09.04.1.05.1.04.11.07.06.03.33-.58A14 14 0 0 0 12 7m-3 6a1 1 0 0 0-.41.09l1 1.72.17-.16A1 1 0 0 0 9 13m7-2.5a1.5 1.5 0 0 0-1.38 2.09l.01.02q.2.46.65.7l1.5-2.59a1.5 1.5 0 0 0-.78-.22M12 4a17 17 0 0 0-7.62 1.8l.5.87a16 16 0 0 1 14.24 0l.5-.87A17 17 0 0 0 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

PizzaBold.displayName = 'PizzaBold';

// Triple export pattern
export { PizzaBold, PizzaBold as PizzaBoldIcon, PizzaBold as SiPizzaBold };
export default PizzaBold;
export type { PizzaBoldProps };
