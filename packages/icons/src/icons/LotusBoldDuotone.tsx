import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LotusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LotusBoldDuotone = memo(
  forwardRef<SVGSVGElement, LotusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.82 4.6c.28-.14.61-.13.89.02l2.8 1.5q-.67.77-1.14 1.65l-1.43-.76-.44 2.12Q4.76 9 4 9h-.52l.78-3.7.03-.12q.14-.4.53-.59M18.4 4.57q.4-.15.79.02c.28.14.49.4.55.7L20.52 9H20q-.77 0-1.5.13L18.06 7l-1.43.76q-.46-.87-1.14-1.66l2.8-1.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M11.37 3.22c.4-.32.97-.3 1.34.07l2.34 2.35c1.1 1.09 1.84 2.4 2.26 3.77Q18.59 9.01 20 9h2q.42 0 .7.3.3.29.3.7v2c0 4.97-4.03 9-9 9h-4c-4.97 0-9-4.03-9-9v-2c0-.26.1-.52.3-.7Q1.57 9 2 9h2q1.41.01 2.7.41c.4-1.38 1.16-2.68 2.25-3.77l2.34-2.35zM20 11q-1.23 0-2.34.4c.17 2.5-.7 5.05-2.61 6.96l-.63.63C18.1 18.77 21 15.73 21 12v-1zM3 12c0 3.72 2.9 6.76 6.57 6.99l-.62-.63c-1.91-1.9-2.78-4.46-2.61-6.96Q5.24 11 4 11H3zm7.36-4.95C9.27 8.15 8.62 9.5 8.4 10.92c-.34 2.13.32 4.39 1.96 6.03L12 18.59l1.64-1.64c1.64-1.64 2.3-3.9 1.96-6.04-.22-1.41-.87-2.77-1.96-3.86L12 5.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

LotusBoldDuotone.displayName = 'LotusBoldDuotone';

// Triple export pattern
export { LotusBoldDuotone, LotusBoldDuotone as LotusBoldDuotoneIcon, LotusBoldDuotone as SiLotusBoldDuotone };
export default LotusBoldDuotone;
export type { LotusBoldDuotoneProps };
