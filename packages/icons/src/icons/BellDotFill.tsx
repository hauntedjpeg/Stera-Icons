import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellDotFillProps = Omit<IconBaseProps, 'children'>;

const BellDotFill = memo(
  forwardRef<SVGSVGElement, BellDotFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13q.9 0 1.71.22c-1.33.9-2.21 2.42-2.21 4.15 0 2.76 2.24 5 5 5q1.38-.02 2.5-.67.21.91.74 1.7l.92 1.38c1.27 1.9-.1 4.46-2.4 4.47H16.3c-.4 2-2.17 3.5-4.29 3.5s-3.88-1.5-4.29-3.5H5.74c-2.3 0-3.67-2.56-2.4-4.47l.92-1.38c.57-.85.86-1.83.86-2.85V9.3c0-3.92 3.04-7.17 6.88-7.18M9.53 18.38c.36 1.01 1.33 1.75 2.47 1.75s2.11-.74 2.47-1.75z" clipRule="evenodd" />
        <path d="M16.5 3.13c1.86 0 3.37 1.5 3.37 3.37 0 1.86-1.5 3.38-3.37 3.38-1.86 0-3.38-1.52-3.38-3.38s1.52-3.37 3.38-3.37" />
    </IconBase>
  ))
);

BellDotFill.displayName = 'BellDotFill';

// Triple export pattern
export { BellDotFill, BellDotFill as BellDotFillIcon, BellDotFill as SiBellDotFill };
export default BellDotFill;
export type { BellDotFillProps };
