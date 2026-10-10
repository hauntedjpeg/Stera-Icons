import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BagFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BagFillDuotone = memo(
  forwardRef<SVGSVGElement, BagFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.13 7c0 .48.39.88.87.88s.88-.4.88-.88v-.85q.18 0 .36.02c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v3.4q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05v-3.4q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37l.38-.02V7c0 .48.39.88.87.88s.88-.4.88-.88v-.87h4.24z" opacity={.4} />
        <path d="M12 2.13c2.14 0 3.88 1.73 3.88 3.87v1c0 .48-.4.88-.88.88s-.87-.4-.87-.88V6c0-1.17-.96-2.12-2.13-2.12S9.88 4.83 9.88 6v1c0 .48-.4.88-.88.88s-.87-.4-.87-.88V6c0-2.14 1.73-3.87 3.87-3.87" />
    </IconBase>
  ))
);

BagFillDuotone.displayName = 'BagFillDuotone';

// Triple export pattern
export { BagFillDuotone, BagFillDuotone as BagFillDuotoneIcon, BagFillDuotone as SiBagFillDuotone };
export default BagFillDuotone;
export type { BagFillDuotoneProps };
