import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type IdVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const IdVFillDuotone = memo(
  forwardRef<SVGSVGElement, IdVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="id-v-fill-duotone" {...props}>
      <path d="M12 11.88a1.88 1.88 0 1 1 0 3.75 1.88 1.88 0 0 1 0-3.76" opacity={0.4} />
        <path fillRule="evenodd" d="M14.2 2.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v8.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05V7.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zm-2.2 8a3.63 3.63 0 0 0-2.87 5.83 4.1 4.1 0 0 0-2.5 3.79.88.88 0 0 0 1.75 0 2.37 2.37 0 0 1 2.37-2.37h2.5a2.37 2.37 0 0 1 2.38 2.37.88.88 0 0 0 1.74 0c0-1.7-1.03-3.16-2.5-3.8A3.63 3.63 0 0 0 12 10.13m-2.5-5.5a.87.87 0 1 0 0 1.75h5a.88.88 0 0 0 0-1.75z" clipRule="evenodd" opacity={0.4} />
        <path fillRule="evenodd" d="M12 10.13a3.63 3.63 0 0 1 2.87 5.83c1.47.63 2.5 2.09 2.5 3.79a.88.88 0 0 1-1.75 0 2.37 2.37 0 0 0-2.37-2.37h-2.5a2.37 2.37 0 0 0-2.37 2.37.88.88 0 0 1-1.76 0c0-1.7 1.03-3.16 2.5-3.8A3.63 3.63 0 0 1 12 10.13m0 1.74a1.88 1.88 0 1 0 0 3.76 1.88 1.88 0 0 0 0-3.76" clipRule="evenodd" />
        <path d="M14.5 4.63a.88.88 0 0 1 0 1.75h-5a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

IdVFillDuotone.displayName = 'IdVFillDuotone';

// Triple export pattern (lucide-react style)
export { IdVFillDuotone, IdVFillDuotone as IdVFillDuotoneIcon, IdVFillDuotone as SiIdVFillDuotone };
export default IdVFillDuotone;
export type { IdVFillDuotoneProps };
