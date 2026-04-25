import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BinaryRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BinaryRegularDuotone = memo(
  forwardRef<SVGSVGElement, BinaryRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.5 13.25c1.8 0 3.25 1.46 3.25 3.25v2a3.25 3.25 0 0 1-6.5 0v-2c0-1.8 1.46-3.25 3.25-3.25m0 1.5c-.97 0-1.75.78-1.75 1.75v2a1.75 1.75 0 1 0 3.5 0v-2c0-.97-.78-1.75-1.75-1.75M7.5 2.25c1.8 0 3.25 1.46 3.25 3.25v2a3.25 3.25 0 1 1-6.5 0v-2c0-1.8 1.46-3.25 3.25-3.25m0 1.5c-.97 0-1.75.78-1.75 1.75v2a1.75 1.75 0 1 0 3.5 0v-2c0-.97-.78-1.75-1.75-1.75" opacity={0.4} />
        <path d="M7.5 13.25c.41 0 .75.34.75.75v6.25H10a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5h1.75v-5.5H5a.75.75 0 0 1 0-1.5zM16.5 2.25c.41 0 .75.34.75.75v6.25H19a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5h1.75v-5.5H14a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

BinaryRegularDuotone.displayName = 'BinaryRegularDuotone';

// Triple export pattern (lucide-react style)
export { BinaryRegularDuotone, BinaryRegularDuotone as BinaryRegularDuotoneIcon, BinaryRegularDuotone as SiBinaryRegularDuotone };
export default BinaryRegularDuotone;
export type { BinaryRegularDuotoneProps };
