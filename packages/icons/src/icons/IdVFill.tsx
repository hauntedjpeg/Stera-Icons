import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type IdVFillProps = Omit<IconBaseProps, 'children'>;

const IdVFill = memo(
  forwardRef<SVGSVGElement, IdVFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 11.88c1.04 0 1.88.83 1.88 1.87s-.84 1.88-1.88 1.88-1.87-.84-1.87-1.88.83-1.87 1.87-1.87" />
        <path fillRule="evenodd" d="M14.2 2.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v8.4q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05V7.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zm-2.2 8c-2 0-3.62 1.62-3.62 3.62 0 .83.28 1.6.74 2.2-1.47.64-2.5 2.1-2.5 3.8 0 .48.4.88.88.88s.88-.4.88-.88c0-1.31 1.06-2.37 2.37-2.37h2.5c1.31 0 2.38 1.06 2.38 2.37 0 .48.39.88.87.88s.88-.4.88-.88c0-1.7-1.04-3.16-2.5-3.8.46-.6.74-1.37.74-2.2 0-2-1.62-3.62-3.62-3.62m-2.5-5.5c-.48 0-.87.39-.87.87s.39.88.87.88h5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

IdVFill.displayName = 'IdVFill';

// Triple export pattern
export { IdVFill, IdVFill as IdVFillIcon, IdVFill as SiIdVFill };
export default IdVFill;
export type { IdVFillProps };
