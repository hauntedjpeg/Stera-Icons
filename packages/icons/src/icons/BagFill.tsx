import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BagFillProps = Omit<IconBaseProps, 'children'>;

const BagFill = memo(
  forwardRef<SVGSVGElement, BagFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13A3.9 3.9 0 0 1 15.88 6v.15q.18 0 .36.02c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v3.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05v-3.4q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37l.38-.02V6A3.9 3.9 0 0 1 12 2.13m0 1.75c-1.17 0-2.12.95-2.12 2.12v.13h4.24V6c0-1.17-.95-2.12-2.12-2.12" clipRule="evenodd" />
    </IconBase>
  ))
);

BagFill.displayName = 'BagFill';

// Triple export pattern (lucide-react style)
export { BagFill, BagFill as BagFillIcon, BagFill as SiBagFill };
export default BagFill;
export type { BagFillProps };
