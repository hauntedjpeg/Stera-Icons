import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellFillProps = Omit<IconBaseProps, 'children'>;

const BellFill = memo(
  forwardRef<SVGSVGElement, BellFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell-fill" {...props}>
      <path fillRule="evenodd" d="M12 2.13c3.84 0 6.87 3.25 6.87 7.17v.38c0 1.02.3 2 .86 2.85l.92 1.38a2.88 2.88 0 0 1-2.39 4.47H16.3a4.38 4.38 0 0 1-8.58 0H5.74a2.88 2.88 0 0 1-2.4-4.47l.92-1.38c.57-.85.86-1.83.86-2.85V9.3c0-3.92 3.04-7.17 6.88-7.18M9.53 18.38a2.62 2.62 0 0 0 4.94 0z" clipRule="evenodd" />
    </IconBase>
  ))
);

BellFill.displayName = 'BellFill';

// Triple export pattern (lucide-react style)
export { BellFill, BellFill as BellFillIcon, BellFill as SiBellFill };
export default BellFill;
export type { BellFillProps };
