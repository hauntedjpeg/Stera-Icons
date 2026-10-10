import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BinaryBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BinaryBoldDuotone = memo(
  forwardRef<SVGSVGElement, BinaryBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.5 13c1.93 0 3.5 1.57 3.5 3.5v2c0 1.93-1.57 3.5-3.5 3.5S13 20.43 13 18.5v-2c0-1.93 1.57-3.5 3.5-3.5m0 2c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5M7.5 2C9.43 2 11 3.57 11 5.5v2C11 9.43 9.43 11 7.5 11S4 9.43 4 7.5v-2C4 3.57 5.57 2 7.5 2m0 2C6.67 4 6 4.67 6 5.5v2C6 8.33 6.67 9 7.5 9S9 8.33 9 7.5v-2C9 4.67 8.33 4 7.5 4" opacity={0.4} />
        <path d="M7.5 13c.55 0 1 .45 1 1v6H10c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1h1.5v-5H5c-.55 0-1-.45-1-1s.45-1 1-1zM16.5 2c.55 0 1 .45 1 1v6H19c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1h1.5V4H14c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

BinaryBoldDuotone.displayName = 'BinaryBoldDuotone';

// Triple export pattern
export { BinaryBoldDuotone, BinaryBoldDuotone as BinaryBoldDuotoneIcon, BinaryBoldDuotone as SiBinaryBoldDuotone };
export default BinaryBoldDuotone;
export type { BinaryBoldDuotoneProps };
