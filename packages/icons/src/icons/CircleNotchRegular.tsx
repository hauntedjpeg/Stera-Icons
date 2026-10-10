import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleNotchRegularProps = Omit<IconBaseProps, 'children'>;

const CircleNotchRegular = memo(
  forwardRef<SVGSVGElement, CircleNotchRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.83 5.1c.3-.29.77-.29 1.06 0 1.37 1.37 2.3 3.1 2.67 5 .38 1.89.19 3.85-.55 5.63s-1.99 3.3-3.6 4.38c-1.6 1.07-3.48 1.64-5.41 1.64s-3.81-.57-5.42-1.64S3.73 17.5 3 15.73 2.06 12 2.44 10.1c.37-1.9 1.3-3.63 2.67-5 .29-.29.76-.29 1.06 0 .29.3.29.77 0 1.07C5 7.32 4.23 8.79 3.9 10.39s-.16 3.26.47 4.77c.62 1.5 1.68 2.8 3.04 3.7 1.35.9 2.95 1.39 4.58 1.39s3.23-.48 4.58-1.39c1.36-.9 2.42-2.2 3.04-3.7.63-1.51.79-3.17.47-4.77S19 7.32 17.83 6.17c-.29-.3-.29-.77 0-1.06" />
    </IconBase>
  ))
);

CircleNotchRegular.displayName = 'CircleNotchRegular';

// Triple export pattern
export { CircleNotchRegular, CircleNotchRegular as CircleNotchRegularIcon, CircleNotchRegular as SiCircleNotchRegular };
export default CircleNotchRegular;
export type { CircleNotchRegularProps };
