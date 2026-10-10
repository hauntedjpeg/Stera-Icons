import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellDotRegularProps = Omit<IconBaseProps, 'children'>;

const BellDotRegular = memo(
  forwardRef<SVGSVGElement, BellDotRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.3 2.26c.4.02.73.37.7.78-.01.41-.36.73-.77.71H12c-2.86 0-5.25 2.45-5.25 5.55v.38c0 1.34-.4 2.64-1.13 3.75L4.7 14.8c-.56.83.04 1.94 1.04 1.94h12.52c1 0 1.6-1.11 1.04-1.94l-.92-1.38q-.46-.7-.74-1.5c-.14-.38.06-.81.45-.95.4-.14.82.06.96.45q.22.62.58 1.17l.92 1.37c1.22 1.83-.1 4.28-2.29 4.28h-2.08c-.35 1.99-2.09 3.5-4.18 3.5-2.1 0-3.83-1.51-4.18-3.5H5.74c-2.2 0-3.5-2.45-2.3-4.28l.93-1.37c.57-.87.88-1.88.88-2.92V9.3c0-3.86 2.99-7.05 6.75-7.05zM9.35 18.25c.32 1.15 1.38 2 2.64 2s2.32-.85 2.64-2z" clipRule="evenodd" />
        <path d="M16.5 3C18.43 3 20 4.57 20 6.5S18.43 10 16.5 10 13 8.43 13 6.5 14.57 3 16.5 3" />
    </IconBase>
  ))
);

BellDotRegular.displayName = 'BellDotRegular';

// Triple export pattern
export { BellDotRegular, BellDotRegular as BellDotRegularIcon, BellDotRegular as SiBellDotRegular };
export default BellDotRegular;
export type { BellDotRegularProps };
