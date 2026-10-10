import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BinaryRegularProps = Omit<IconBaseProps, 'children'>;

const BinaryRegular = memo(
  forwardRef<SVGSVGElement, BinaryRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 13.25c.41 0 .75.34.75.75v6.25H10c.41 0 .75.34.75.75s-.34.75-.75.75H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75v-5.5H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M16.5 13.25c1.8 0 3.25 1.46 3.25 3.25v2c0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25v-2c0-1.8 1.46-3.25 3.25-3.25m0 1.5c-.97 0-1.75.78-1.75 1.75v2c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75v-2c0-.97-.78-1.75-1.75-1.75M7.5 2.25c1.8 0 3.25 1.46 3.25 3.25v2c0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25v-2c0-1.8 1.46-3.25 3.25-3.25m0 1.5c-.97 0-1.75.78-1.75 1.75v2c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75v-2c0-.97-.78-1.75-1.75-1.75" clipRule="evenodd" />
        <path d="M16.5 2.25c.41 0 .75.34.75.75v6.25H19c.41 0 .75.34.75.75s-.34.75-.75.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75v-5.5H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

BinaryRegular.displayName = 'BinaryRegular';

// Triple export pattern
export { BinaryRegular, BinaryRegular as BinaryRegularIcon, BinaryRegular as SiBinaryRegular };
export default BinaryRegular;
export type { BinaryRegularProps };
