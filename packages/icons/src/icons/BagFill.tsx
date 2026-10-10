import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BagFillProps = Omit<IconBaseProps, 'children'>;

const BagFill = memo(
  forwardRef<SVGSVGElement, BagFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c2.14 0 3.88 1.73 3.88 3.87v.15q.18 0 .36.02c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v3.4q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05v-3.4q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37l.38-.02V6c0-2.14 1.73-3.87 3.87-3.87m0 1.75c-1.17 0-2.12.95-2.12 2.12v.13h4.24V6c0-1.17-.95-2.12-2.12-2.12" clipRule="evenodd" />
    </IconBase>
  ))
);

BagFill.displayName = 'BagFill';

// Triple export pattern
export { BagFill, BagFill as BagFillIcon, BagFill as SiBagFill };
export default BagFill;
export type { BagFillProps };
