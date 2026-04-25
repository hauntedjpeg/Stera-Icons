import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BinaryFillProps = Omit<IconBaseProps, 'children'>;

const BinaryFill = memo(
  forwardRef<SVGSVGElement, BinaryFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 12.75c.69 0 1.25.56 1.25 1.25v5.75H10a1.25 1.25 0 1 1 0 2.5H5a1.25 1.25 0 1 1 0-2.5h1.25v-4.5H5a1.25 1.25 0 1 1 0-2.5z" />
        <path fillRule="evenodd" d="M16.5 12.75a3.75 3.75 0 0 1 3.75 3.75v2a3.75 3.75 0 1 1-7.5 0v-2a3.75 3.75 0 0 1 3.75-3.75m0 2.5c-.69 0-1.25.56-1.25 1.25v2a1.25 1.25 0 1 0 2.5 0v-2c0-.69-.56-1.25-1.25-1.25M7.5 1.75a3.75 3.75 0 0 1 3.75 3.75v2a3.75 3.75 0 1 1-7.5 0v-2A3.75 3.75 0 0 1 7.5 1.75m0 2.5c-.69 0-1.25.56-1.25 1.25v2a1.25 1.25 0 1 0 2.5 0v-2c0-.69-.56-1.25-1.25-1.25" clipRule="evenodd" />
        <path d="M16.5 1.75c.69 0 1.25.56 1.25 1.25v5.75H19a1.25 1.25 0 1 1 0 2.5h-5a1.25 1.25 0 1 1 0-2.5h1.25v-4.5H14a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

BinaryFill.displayName = 'BinaryFill';

// Triple export pattern (lucide-react style)
export { BinaryFill, BinaryFill as BinaryFillIcon, BinaryFill as SiBinaryFill };
export default BinaryFill;
export type { BinaryFillProps };
