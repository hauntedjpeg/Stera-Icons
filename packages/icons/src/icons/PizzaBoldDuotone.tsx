import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PizzaBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PizzaBoldDuotone = memo(
  forwardRef<SVGSVGElement, PizzaBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.12 8.4q.45.22.88.48l.87.5-7 12.12a1 1 0 0 1-1.74 0l-2.88-5-4.12-7.12.87-.5.88-.47 1.7 2.94Q8.23 11.01 9 11a3 3 0 0 1 1.58 5.54L12 19l2.28-3.95a3.5 3.5 0 1 1 3.5-6.06zM9 13a1 1 0 0 0-.41.09l1 1.72A1 1 0 0 0 9 13m7-2.5a1.5 1.5 0 0 0-.72 2.82l1.5-2.6q-.35-.22-.78-.22" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 2a19 19 0 0 1 9.5 2.55 1 1 0 0 1 .37 1.36l-2 3.47-.87-.5a14 14 0 0 0-14 0l-.87.5-2-3.47a1 1 0 0 1 .37-1.36A19 19 0 0 1 12 2m0 2a17 17 0 0 0-7.62 1.8l.5.87a16 16 0 0 1 14.24 0l.5-.87A17 17 0 0 0 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

PizzaBoldDuotone.displayName = 'PizzaBoldDuotone';

// Triple export pattern (lucide-react style)
export { PizzaBoldDuotone, PizzaBoldDuotone as PizzaBoldDuotoneIcon, PizzaBoldDuotone as SiPizzaBoldDuotone };
export default PizzaBoldDuotone;
export type { PizzaBoldDuotoneProps };
