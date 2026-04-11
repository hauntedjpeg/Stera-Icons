import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BasketballFillProps = Omit<IconBaseProps, 'children'>;

const BasketballFill = memo(
  forwardRef<SVGSVGElement, BasketballFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.34 10.93a25 25 0 0 0 3.88 8.34q.86 1.18 1.85 2.12a10 10 0 0 1-6.88-.28 9 9 0 0 1-.22-3.59c.16-1.4.52-3.05.4-4.75a5 5 0 0 0-.23-1.25q.58-.32 1.2-.59M12.81 9.98c.37.9.94 1.66 1.58 2.34.82.85 1.8 1.63 2.7 2.36 1.23.98 2.3 1.91 3 3a10 10 0 0 1-3.25 2.93q-1.14-.92-2.21-2.38A22.5 22.5 0 0 1 11 10.36q.89-.25 1.81-.38M6.59 12.54l.04.34c.1 1.5-.21 2.8-.4 4.45-.1.84-.14 1.72-.04 2.66a10 10 0 0 1-2.83-3.2c.67-1.7 1.79-3.13 3.23-4.25M14.68 9.83c2.38-.04 4.85.47 7.18 1.6l.02.57q-.01 2.15-.85 4a18 18 0 0 0-2.83-2.68c-.95-.77-1.82-1.45-2.54-2.2q-.6-.64-.98-1.29M2.78 8.47a6.4 6.4 0 0 1 3.12 2.4 12 12 0 0 0-3.43 3.74 10 10 0 0 1 .3-6.14M9.16 2.54c-.33 1.1-.48 2.3-.48 3.51q0 1.54.29 3.15-.83.32-1.59.74a8.18 8.18 0 0 0-3.83-3.05 10 10 0 0 1 5.61-4.35M17.77 3.99a10 10 0 0 1 3.75 5.38 17 17 0 0 0-7.39-1.27q-.05-.76.18-1.33.31-.82 1.14-1.48a9 9 0 0 1 2.32-1.3M12 2.13q2.09.01 3.89.8-.85.42-1.56 1a5.4 5.4 0 0 0-1.65 2.2 5 5 0 0 0-.29 2.14q-.88.15-1.74.37-.22-1.33-.22-2.58 0-2.25.74-3.9z" />
    </IconBase>
  ))
);

BasketballFill.displayName = 'BasketballFill';

// Triple export pattern (lucide-react style)
export { BasketballFill, BasketballFill as BasketballFillIcon, BasketballFill as SiBasketballFill };
export default BasketballFill;
export type { BasketballFillProps };
