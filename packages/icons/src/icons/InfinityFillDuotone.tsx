import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfinityFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const InfinityFillDuotone = memo(
  forwardRef<SVGSVGElement, InfinityFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.02 8.27c2.11-2.03 5.51-2.03 7.63 0 2.14 2.05 2.14 5.4 0 7.46-2.12 2.03-5.52 2.03-7.63 0l-2.9-2.84 1.76-1.78 2.87 2.82.23.19c1.15.9 2.86.84 3.93-.2 1.12-1.06 1.12-2.78 0-3.85-1.14-1.1-3.01-1.1-4.16 0l-.32.32c-.5.49-1.29.48-1.77-.02-.48-.49-.48-1.28.02-1.76z" opacity={.4} />
        <path d="M2.35 8.27c2.11-2.03 5.52-2.03 7.63 0l2.9 2.84-1.76 1.78-2.87-2.82c-1.15-1.1-3.02-1.1-4.16 0-1.12 1.07-1.12 2.79 0 3.86 1.14 1.1 3.01 1.1 4.16 0l.32-.32c.5-.49 1.29-.48 1.77.01.48.5.48 1.29-.02 1.77l-.33.33-.01.01c-2.11 2.03-5.51 2.03-7.63 0-2.14-2.05-2.14-5.4 0-7.46" />
    </IconBase>
  ))
);

InfinityFillDuotone.displayName = 'InfinityFillDuotone';

// Triple export pattern
export { InfinityFillDuotone, InfinityFillDuotone as InfinityFillDuotoneIcon, InfinityFillDuotone as SiInfinityFillDuotone };
export default InfinityFillDuotone;
export type { InfinityFillDuotoneProps };
