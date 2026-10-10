import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabaseRegularDuotone = memo(
  forwardRef<SVGSVGElement, DatabaseRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.75 11.7c0 .09.04.26.3.5q.4.37 1.27.7c1.16.46 2.82.75 4.68.75s3.52-.3 4.68-.74q.87-.35 1.26-.71c.27-.24.31-.41.31-.5v2.12q-.47.28-1.03.49c-1.37.53-3.22.84-5.22.84s-3.85-.31-5.22-.84q-.56-.2-1.03-.5z" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.25c2 0 3.85.31 5.22.84.68.26 1.29.6 1.74 1s.79.95.79 1.61v12.6c0 .66-.35 1.2-.8 1.6-.44.41-1.05.75-1.73 1-1.37.54-3.22.85-5.22.85s-3.85-.31-5.22-.84c-.68-.26-1.29-.6-1.74-1s-.79-.95-.79-1.61V5.7c0-.66.35-1.2.8-1.6.44-.41 1.05-.75 1.73-1C8.15 2.55 10 2.24 12 2.24m6.25 5.57q-.47.27-1.03.49c-1.37.53-3.22.84-5.22.84s-3.85-.31-5.22-.84q-.56-.2-1.03-.5V18.3c0 .09.04.26.3.5q.4.36 1.27.71c1.16.45 2.82.74 4.68.74s3.52-.3 4.68-.74q.87-.35 1.26-.71c.27-.24.31-.41.31-.5zM12 3.75c-1.86 0-3.52.3-4.68.74q-.87.34-1.26.71c-.27.24-.31.41-.31.5s.04.26.3.5q.4.37 1.27.7c1.16.46 2.82.75 4.68.75s3.52-.3 4.68-.74q.87-.35 1.26-.71c.27-.24.31-.41.31-.5s-.04-.26-.3-.5q-.4-.37-1.27-.71c-1.16-.45-2.82-.74-4.68-.74" clipRule="evenodd" />
    </IconBase>
  ))
);

DatabaseRegularDuotone.displayName = 'DatabaseRegularDuotone';

// Triple export pattern
export { DatabaseRegularDuotone, DatabaseRegularDuotone as DatabaseRegularDuotoneIcon, DatabaseRegularDuotone as SiDatabaseRegularDuotone };
export default DatabaseRegularDuotone;
export type { DatabaseRegularDuotoneProps };
