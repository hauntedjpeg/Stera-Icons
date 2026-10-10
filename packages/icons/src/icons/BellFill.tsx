import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellFillProps = Omit<IconBaseProps, 'children'>;

const BellFill = memo(
  forwardRef<SVGSVGElement, BellFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c3.84 0 6.87 3.25 6.87 7.17v.38c0 1.02.3 2 .87 2.85l.92 1.38c1.27 1.9-.1 4.47-2.4 4.47H16.3c-.4 2-2.17 3.5-4.29 3.5s-3.88-1.5-4.29-3.5H5.74c-2.3 0-3.67-2.56-2.4-4.47l.92-1.38c.57-.85.86-1.83.86-2.85V9.3c0-3.92 3.04-7.17 6.88-7.18M9.53 18.38c.36 1.01 1.33 1.74 2.47 1.75 1.14 0 2.11-.74 2.47-1.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

BellFill.displayName = 'BellFill';

// Triple export pattern
export { BellFill, BellFill as BellFillIcon, BellFill as SiBellFill };
export default BellFill;
export type { BellFillProps };
