import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BagFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BagFillDuotone = memo(
  forwardRef<SVGSVGElement, BagFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bag-fill-duotone" {...props}>
      <path d="M14.13 7a.88.88 0 0 0 1.74 0v-.85q.2 0 .37.02c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v3.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05v-3.4q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37l.38-.02V7a.87.87 0 1 0 1.74 0v-.87h4.26z" opacity={.4} />
        <path d="M12 2.13A3.9 3.9 0 0 1 15.88 6v1a.88.88 0 0 1-1.76 0V6a2.13 2.13 0 0 0-4.24 0v1a.87.87 0 1 1-1.76 0V6A3.9 3.9 0 0 1 12 2.13" />
    </IconBase>
  ))
);

BagFillDuotone.displayName = 'BagFillDuotone';

// Triple export pattern (lucide-react style)
export { BagFillDuotone, BagFillDuotone as BagFillDuotoneIcon, BagFillDuotone as SiBagFillDuotone };
export default BagFillDuotone;
export type { BagFillDuotoneProps };
