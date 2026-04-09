import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellDotFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BellDotFillDuotone = memo(
  forwardRef<SVGSVGElement, BellDotFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell-dot-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13q.9 0 1.71.22a5 5 0 0 0 5.3 8.48q.2.91.73 1.7l.92 1.38a2.88 2.88 0 0 1-2.4 4.47H16.3a4.38 4.38 0 0 1-8.58 0H5.74a2.88 2.88 0 0 1-2.4-4.47l.92-1.38c.57-.85.87-1.83.87-2.85V9.3c0-3.92 3.03-7.17 6.87-7.18M9.53 18.38a2.62 2.62 0 0 0 4.94 0z" clipRule="evenodd" opacity={.4} />
        <path d="M16.5 3.13a3.37 3.37 0 1 1 0 6.74 3.37 3.37 0 0 1 0-6.74" />
    </IconBase>
  ))
);

BellDotFillDuotone.displayName = 'BellDotFillDuotone';

// Triple export pattern (lucide-react style)
export { BellDotFillDuotone, BellDotFillDuotone as BellDotFillDuotoneIcon, BellDotFillDuotone as SiBellDotFillDuotone };
export default BellDotFillDuotone;
export type { BellDotFillDuotoneProps };
