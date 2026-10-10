import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BellOffFillDuotone = memo(
  forwardRef<SVGSVGElement, BellOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.14 18.38h-.85c-.4 2-2.17 3.5-4.29 3.5s-3.88-1.5-4.29-3.5H5.74c-2.3 0-3.67-2.56-2.4-4.47l.92-1.38c.57-.85.86-1.83.86-2.85V9.3q.01-1.33.44-2.5zm-7.61 0c.36 1.01 1.33 1.74 2.47 1.75 1.14 0 2.11-.74 2.47-1.75z" clipRule="evenodd" opacity={0.4} />
        <path d="M12 2.13c3.84 0 6.87 3.25 6.87 7.17v.38c0 1.02.3 2 .87 2.85l.92 1.38c1.04 1.57.3 3.58-1.27 4.24l-13-13C7.63 3.33 9.67 2.13 12 2.12" opacity={0.4} />
        <path d="M3.38 3.38c.34-.34.9-.34 1.24 0l16 16c.34.34.34.9 0 1.24s-.9.34-1.24 0l-16-16c-.34-.34-.34-.9 0-1.24" />
    </IconBase>
  ))
);

BellOffFillDuotone.displayName = 'BellOffFillDuotone';

// Triple export pattern
export { BellOffFillDuotone, BellOffFillDuotone as BellOffFillDuotoneIcon, BellOffFillDuotone as SiBellOffFillDuotone };
export default BellOffFillDuotone;
export type { BellOffFillDuotoneProps };
