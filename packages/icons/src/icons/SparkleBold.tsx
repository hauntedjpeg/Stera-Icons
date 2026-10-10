import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleBoldProps = Omit<IconBaseProps, 'children'>;

const SparkleBold = memo(
  forwardRef<SVGSVGElement, SparkleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1c.44 0 .83.29.96.7l1.09 3.6c.68 2.23 2.42 3.97 4.66 4.65l3.58 1.1c.42.12.71.51.71.95s-.29.83-.7.96l-3.6 1.09c-2.23.68-3.97 2.42-4.65 4.66l-1.1 3.58c-.12.42-.51.71-.95.71s-.83-.29-.96-.7l-1.09-3.6c-.68-2.23-2.42-3.97-4.66-4.65l-3.58-1.1C1.29 12.84 1 12.45 1 12s.29-.83.7-.96l3.6-1.09c2.23-.68 3.97-2.42 4.65-4.66l1.1-3.58c.12-.42.51-.71.95-.71m-.13 4.88c-.88 2.87-3.12 5.11-6 5.99l-.44.13.45.13c2.87.88 5.11 3.12 5.99 6l.13.44.13-.45c.88-2.87 3.12-5.11 6-5.99l.44-.13-.45-.13c-2.87-.88-5.11-3.12-5.99-6L12 5.44z" clipRule="evenodd" />
    </IconBase>
  ))
);

SparkleBold.displayName = 'SparkleBold';

// Triple export pattern
export { SparkleBold, SparkleBold as SparkleBoldIcon, SparkleBold as SiSparkleBold };
export default SparkleBold;
export type { SparkleBoldProps };
