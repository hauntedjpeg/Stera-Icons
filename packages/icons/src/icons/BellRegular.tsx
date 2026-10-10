import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellRegularProps = Omit<IconBaseProps, 'children'>;

const BellRegular = memo(
  forwardRef<SVGSVGElement, BellRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c3.76 0 6.75 3.2 6.75 7.05v.38c0 1.04.3 2.05.88 2.92l.92 1.37c1.22 1.83-.1 4.28-2.29 4.28h-2.08c-.35 1.99-2.09 3.5-4.18 3.5-2.1 0-3.83-1.51-4.18-3.5H5.74c-2.2 0-3.5-2.45-2.3-4.28l.93-1.37c.57-.87.88-1.88.88-2.92V9.3c0-3.86 2.99-7.05 6.75-7.05m-2.64 16c.32 1.15 1.38 2 2.64 2s2.32-.85 2.64-2zM12 3.75c-2.87 0-5.25 2.45-5.25 5.55v.38c0 1.34-.4 2.64-1.13 3.75L4.7 14.8c-.56.83.04 1.94 1.04 1.94h12.52c1 0 1.6-1.11 1.04-1.94l-.92-1.38c-.74-1.11-1.13-2.41-1.13-3.75V9.3c0-3.1-2.38-5.55-5.25-5.55" clipRule="evenodd" />
    </IconBase>
  ))
);

BellRegular.displayName = 'BellRegular';

// Triple export pattern
export { BellRegular, BellRegular as BellRegularIcon, BellRegular as SiBellRegular };
export default BellRegular;
export type { BellRegularProps };
