import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type IdHFillProps = Omit<IconBaseProps, 'children'>;

const IdHFill = memo(
  forwardRef<SVGSVGElement, IdHFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.2 4.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v4.4q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.82-.04-2.05V9.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zm-7.2 4c-1.31 0-2.37 1.06-2.37 2.37 0 .77.37 1.46.94 1.9-.84.32-1.54.94-1.88 1.76-.11.27-.08.58.08.83.16.24.44.38.73.38h5q.47-.01.73-.38c.16-.25.19-.56.08-.83-.34-.82-1.04-1.44-1.88-1.77.57-.43.95-1.12.95-1.89 0-1.31-1.07-2.37-2.38-2.37m6 5c-.48 0-.87.39-.87.87s.39.88.87.88h2.5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zm0-4c-.48 0-.87.39-.87.87s.39.88.87.88h2.5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

IdHFill.displayName = 'IdHFill';

// Triple export pattern
export { IdHFill, IdHFill as IdHFillIcon, IdHFill as SiIdHFill };
export default IdHFill;
export type { IdHFillProps };
