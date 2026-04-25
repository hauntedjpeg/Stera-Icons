import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BinaryBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BinaryBoldDuotone = memo(
  forwardRef<SVGSVGElement, BinaryBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.5 13a3.5 3.5 0 0 1 3.5 3.5v2a3.5 3.5 0 1 1-7 0v-2a3.5 3.5 0 0 1 3.5-3.5m0 2c-.83 0-1.5.67-1.5 1.5v2a1.5 1.5 0 0 0 3 0v-2c0-.83-.67-1.5-1.5-1.5M7.5 2A3.5 3.5 0 0 1 11 5.5v2a3.5 3.5 0 1 1-7 0v-2A3.5 3.5 0 0 1 7.5 2m0 2C6.67 4 6 4.67 6 5.5v2a1.5 1.5 0 1 0 3 0v-2C9 4.67 8.33 4 7.5 4" opacity={0.4} />
        <path d="M7.5 13a1 1 0 0 1 1 1v6H10a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h1.5v-5H5a1 1 0 1 1 0-2zM16.5 2a1 1 0 0 1 1 1v6H19a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2h1.5V4H14a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

BinaryBoldDuotone.displayName = 'BinaryBoldDuotone';

// Triple export pattern (lucide-react style)
export { BinaryBoldDuotone, BinaryBoldDuotone as BinaryBoldDuotoneIcon, BinaryBoldDuotone as SiBinaryBoldDuotone };
export default BinaryBoldDuotone;
export type { BinaryBoldDuotoneProps };
