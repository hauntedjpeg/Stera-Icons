import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DotFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DotFillDuotone = memo(
  forwardRef<SVGSVGElement, DotFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 8.88c1.73 0 3.13 1.4 3.13 3.12s-1.4 3.13-3.13 3.13-3.12-1.4-3.12-3.13 1.4-3.12 3.12-3.12" opacity={.4} />
        <path fillRule="evenodd" d="M12 7.13c2.7 0 4.88 2.18 4.88 4.87 0 2.7-2.19 4.88-4.88 4.88-2.7 0-4.87-2.19-4.87-4.88 0-2.7 2.18-4.87 4.87-4.87m0 1.75c-1.73 0-3.12 1.4-3.12 3.12s1.4 3.13 3.12 3.13 3.13-1.4 3.13-3.13-1.4-3.12-3.13-3.12" clipRule="evenodd" />
    </IconBase>
  ))
);

DotFillDuotone.displayName = 'DotFillDuotone';

// Triple export pattern
export { DotFillDuotone, DotFillDuotone as DotFillDuotoneIcon, DotFillDuotone as SiDotFillDuotone };
export default DotFillDuotone;
export type { DotFillDuotoneProps };
