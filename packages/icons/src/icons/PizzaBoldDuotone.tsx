import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PizzaBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PizzaBoldDuotone = memo(
  forwardRef<SVGSVGElement, PizzaBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.12 8.4q.45.22.88.48l.87.5-7 12.12c-.18.3-.51.5-.87.5s-.69-.2-.87-.5l-2.88-5-4.12-7.12.87-.5q.43-.26.88-.47l1.7 2.94Q8.23 11.01 9 11c1.66 0 3 1.34 3 3 0 1.08-.57 2.02-1.42 2.54L12 19l2.28-3.95c-1.06-.6-1.78-1.74-1.78-3.05 0-1.93 1.57-3.5 3.5-3.5q.99.01 1.78.49zM9 13q-.23 0-.41.09l1 1.72c.24-.18.41-.48.41-.81 0-.55-.45-1-1-1m7-2.5c-.83 0-1.5.67-1.5 1.5 0 .57.32 1.06.78 1.32l1.5-2.6q-.35-.22-.78-.22" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 2c3.34 0 6.61.88 9.5 2.55.48.27.64.88.37 1.36l-2 3.47-.87-.5C16.87 7.65 14.46 7 12 7s-4.87.65-7 1.88l-.87.5-2-3.47q-.2-.36-.1-.76.11-.39.47-.6C5.39 2.88 8.66 2 12 2m0 2c-2.65 0-5.26.62-7.62 1.8l.5.87C7.1 5.57 9.53 5 12 5s4.91.57 7.12 1.67l.5-.87C17.26 4.62 14.65 4 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

PizzaBoldDuotone.displayName = 'PizzaBoldDuotone';

// Triple export pattern
export { PizzaBoldDuotone, PizzaBoldDuotone as PizzaBoldDuotoneIcon, PizzaBoldDuotone as SiPizzaBoldDuotone };
export default PizzaBoldDuotone;
export type { PizzaBoldDuotoneProps };
