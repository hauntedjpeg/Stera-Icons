import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclePlaceholderBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderBoldDuotone = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.61 19.83a8 8 0 0 1-2.74.09l-6.79-6.79a8 8 0 0 1 .08-2.74zM17.06 18.2a8 8 0 0 1-1.74 1.08L4.72 8.68A8 8 0 0 1 5.8 6.94zM19.28 15.32a8 8 0 0 1-1.09 1.74L6.94 5.81a8 8 0 0 1 1.74-1.09zM10.87 4.08q1.13-.15 2.26 0l6.79 6.79a8 8 0 0 1-.09 2.74L10.4 4.16z" opacity={0.4} />
        <path fillRule="evenodd" d="M10.59 2.1a9.99 9.99 0 0 1 6.93 18.24 9.96 9.96 0 0 1-12.6-1.27A9.99 9.99 0 0 1 10.6 2.1m7.07 4.24A7.99 7.99 0 1 0 6.34 17.66a7.99 7.99 0 0 0 13.58-4.53 8 8 0 0 0-2.26-6.79" clipRule="evenodd" />
    </IconBase>
  ))
);

CirclePlaceholderBoldDuotone.displayName = 'CirclePlaceholderBoldDuotone';

// Triple export pattern (lucide-react style)
export { CirclePlaceholderBoldDuotone, CirclePlaceholderBoldDuotone as CirclePlaceholderBoldDuotoneIcon, CirclePlaceholderBoldDuotone as SiCirclePlaceholderBoldDuotone };
export default CirclePlaceholderBoldDuotone;
export type { CirclePlaceholderBoldDuotoneProps };
