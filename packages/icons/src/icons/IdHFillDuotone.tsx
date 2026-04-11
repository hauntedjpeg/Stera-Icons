import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type IdHFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const IdHFillDuotone = memo(
  forwardRef<SVGSVGElement, IdHFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.2 4.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v4.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05V9.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zm-7.2 4a2.38 2.38 0 0 0-1.43 4.26 3.3 3.3 0 0 0-1.88 1.77.88.88 0 0 0 .81 1.21h5a.88.88 0 0 0 .8-1.2 3.3 3.3 0 0 0-1.87-1.78A2.37 2.37 0 0 0 9 8.12m6 5a.88.88 0 0 0 0 1.74h2.5a.88.88 0 0 0 0-1.74zm0-4a.88.88 0 0 0 0 1.74h2.5a.88.88 0 0 0 0-1.74z" clipRule="evenodd" opacity={.4} />
        <path d="M9 8.13a2.38 2.38 0 0 1 1.43 4.26 3.3 3.3 0 0 1 1.88 1.77.88.88 0 0 1-.81 1.21h-5a.88.88 0 0 1-.8-1.2 3.3 3.3 0 0 1 1.87-1.78A2.37 2.37 0 0 1 9 8.12M17.5 13.13a.88.88 0 0 1 0 1.74H15a.87.87 0 1 1 0-1.74zM17.5 9.13a.88.88 0 0 1 0 1.74H15a.87.87 0 1 1 0-1.74z" />
    </IconBase>
  ))
);

IdHFillDuotone.displayName = 'IdHFillDuotone';

// Triple export pattern (lucide-react style)
export { IdHFillDuotone, IdHFillDuotone as IdHFillDuotoneIcon, IdHFillDuotone as SiIdHFillDuotone };
export default IdHFillDuotone;
export type { IdHFillDuotoneProps };
