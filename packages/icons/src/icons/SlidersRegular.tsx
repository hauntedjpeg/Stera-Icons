import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlidersRegularProps = Omit<IconBaseProps, 'children'>;

const SlidersRegular = memo(
  forwardRef<SVGSVGElement, SlidersRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15 13.25c1.81 0 3.33 1.29 3.67 3H22c.41 0 .75.34.75.75s-.34.75-.75.75h-3.33c-.34 1.71-1.86 3-3.67 3s-3.33-1.29-3.67-3H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.33c.34-1.71 1.86-3 3.67-3m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25M9 3.25c1.81 0 3.33 1.29 3.67 3H22c.41 0 .75.34.75.75s-.34.75-.75.75h-9.33c-.34 1.71-1.86 3-3.67 3s-3.33-1.29-3.67-3H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.33c.34-1.71 1.86-3 3.67-3m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

SlidersRegular.displayName = 'SlidersRegular';

// Triple export pattern
export { SlidersRegular, SlidersRegular as SlidersRegularIcon, SlidersRegular as SiSlidersRegular };
export default SlidersRegular;
export type { SlidersRegularProps };
