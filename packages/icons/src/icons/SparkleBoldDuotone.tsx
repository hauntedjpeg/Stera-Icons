import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparkleBoldDuotone = memo(
  forwardRef<SVGSVGElement, SparkleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.8 22.6c.18-.25.25-.58.16-.9L12 18.58l.14-.45c.87-2.87 3.12-5.11 5.99-5.99l.44-.13-.45-.13c-2.86-.88-5.11-3.12-5.98-6L12 5.44l.96-3.14c.1-.32.02-.65-.17-.9q.1.15.17.32l1.09 3.58c.68 2.24 2.43 3.98 4.66 4.66l3.58 1.1c.42.12.71.51.71.95s-.29.83-.7.96l-3.6 1.09c-2.22.68-3.97 2.42-4.65 4.66l-1.1 3.58q-.04.18-.15.3" opacity={.4} />
        <path d="M11.04 1.71c.16-.53.72-.83 1.25-.67s.83.72.67 1.25l-1.1 3.59c-.87 2.87-3.11 5.11-5.98 5.99l-.45.13.45.14c2.87.87 5.11 3.11 5.99 5.98l1.09 3.59c.16.53-.14 1.09-.67 1.25s-1.09-.14-1.25-.67l-1.09-3.58c-.68-2.24-2.42-3.98-4.66-4.66l-3.58-1.1C1.29 12.84 1 12.45 1 12s.29-.83.7-.96l3.6-1.09c2.23-.68 3.97-2.42 4.65-4.66z" />
    </IconBase>
  ))
);

SparkleBoldDuotone.displayName = 'SparkleBoldDuotone';

// Triple export pattern
export { SparkleBoldDuotone, SparkleBoldDuotone as SparkleBoldDuotoneIcon, SparkleBoldDuotone as SiSparkleBoldDuotone };
export default SparkleBoldDuotone;
export type { SparkleBoldDuotoneProps };
