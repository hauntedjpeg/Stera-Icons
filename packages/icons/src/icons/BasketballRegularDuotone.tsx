import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BasketballRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BasketballRegularDuotone = memo(
  forwardRef<SVGSVGElement, BasketballRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.39 0 9.75 4.37 9.75 9.75S17.4 21.75 12 21.75 2.25 17.4 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M10.5 3.89c-.28 1.46-.25 3.15.04 4.9q.97-.26 1.99-.41c-.12-1.07.1-2 .56-2.83q.5-.83 1.26-1.46.84.26 1.6.67-1.04.67-1.56 1.54c-.3.53-.46 1.16-.37 1.93 1.84-.1 3.74.1 5.6.62q.35.83.5 1.73c-1.86-.65-3.79-.93-5.65-.87.65 1.26 1.9 2.28 3.36 3.46.63.52 1.3 1.06 1.93 1.65q-.28.75-.68 1.43-1-.97-2.2-1.9c-1.52-1.23-3.24-2.6-3.99-4.5q-1.05.14-2.04.42c.84 3.48 2.59 6.94 4.63 9.21q-.72.34-1.52.53c-2.03-2.43-3.69-5.84-4.54-9.25q-.74.3-1.43.7.21.63.26 1.31c.08 1.26-.09 2.43-.24 3.51-.14.97-.27 1.87-.25 2.8q-.8-.48-1.46-1.12.09-.99.22-1.89c.16-1.1.3-2.12.23-3.2q-.01-.27-.08-.56-1.43 1.08-2.42 2.53-.33-.9-.44-1.9 1-1.15 2.26-2.04c-.45-.7-1.08-1.33-1.79-1.81q.27-.72.66-1.36c.94.6 1.8 1.41 2.4 2.37q.85-.47 1.77-.82c-.3-1.7-.4-3.38-.2-4.93q.75-.3 1.6-.46" />
    </IconBase>
  ))
);

BasketballRegularDuotone.displayName = 'BasketballRegularDuotone';

// Triple export pattern
export { BasketballRegularDuotone, BasketballRegularDuotone as BasketballRegularDuotoneIcon, BasketballRegularDuotone as SiBasketballRegularDuotone };
export default BasketballRegularDuotone;
export type { BasketballRegularDuotoneProps };
