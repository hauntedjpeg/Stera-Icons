import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BinaryFillProps = Omit<IconBaseProps, 'children'>;

const BinaryFill = memo(
  forwardRef<SVGSVGElement, BinaryFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 12.75c.69 0 1.25.56 1.25 1.25v5.75H10c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h1.25v-4.5H5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" />
        <path fillRule="evenodd" d="M16.5 12.75c2.07 0 3.75 1.68 3.75 3.75v2c0 2.07-1.68 3.75-3.75 3.75s-3.75-1.68-3.75-3.75v-2c0-2.07 1.68-3.75 3.75-3.75m0 2.5c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25M7.5 1.75c2.07 0 3.75 1.68 3.75 3.75v2c0 2.07-1.68 3.75-3.75 3.75S3.75 9.57 3.75 7.5v-2c0-2.07 1.68-3.75 3.75-3.75m0 2.5c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25" clipRule="evenodd" />
        <path d="M16.5 1.75c.69 0 1.25.56 1.25 1.25v5.75H19c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h1.25v-4.5H14c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" />
    </IconBase>
  ))
);

BinaryFill.displayName = 'BinaryFill';

// Triple export pattern
export { BinaryFill, BinaryFill as BinaryFillIcon, BinaryFill as SiBinaryFill };
export default BinaryFill;
export type { BinaryFillProps };
