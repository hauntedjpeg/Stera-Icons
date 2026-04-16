import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclePlaceholderRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderRegularDuotone = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.53 20.1a8 8 0 0 1-2 .13l-7.76-7.77a8 8 0 0 1 .12-1.99zM17.04 18.53a8 8 0 0 1-1.3.82L4.65 8.25a8 8 0 0 1 .83-1.3zM19.35 15.75a8 8 0 0 1-.82 1.3L6.96 5.46a8 8 0 0 1 1.3-.82zM10.83 3.83a8 8 0 0 1 1.63-.06l7.77 7.77a8 8 0 0 1-.12 1.99l-9.64-9.64z" opacity={0.4} />
        <path fillRule="evenodd" d="M10.62 2.35a9.74 9.74 0 0 1 6.76 17.79A9.74 9.74 0 1 1 6.62 3.87a10 10 0 0 1 4-1.52m7.21 3.82a8.24 8.24 0 0 0-14 4.66 8.24 8.24 0 0 0 15.05 5.72 8.24 8.24 0 0 0-1.05-10.38" clipRule="evenodd" />
    </IconBase>
  ))
);

CirclePlaceholderRegularDuotone.displayName = 'CirclePlaceholderRegularDuotone';

// Triple export pattern (lucide-react style)
export { CirclePlaceholderRegularDuotone, CirclePlaceholderRegularDuotone as CirclePlaceholderRegularDuotoneIcon, CirclePlaceholderRegularDuotone as SiCirclePlaceholderRegularDuotone };
export default CirclePlaceholderRegularDuotone;
export type { CirclePlaceholderRegularDuotoneProps };
