import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseSparkleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabaseSparkleRegularDuotone = memo(
  forwardRef<SVGSVGElement, DatabaseSparkleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c2 0 3.85.31 5.22.84.68.26 1.29.6 1.74 1s.79.95.79 1.61v5.39c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.82q-.47.27-1.03.49c-1.37.53-3.22.84-5.22.84s-3.85-.31-5.22-.84q-.56-.2-1.03-.5v3.95c.04.15.2.43.77.77.62.37 1.55.69 2.7.89.42.07.69.46.62.87-.08.4-.46.68-.87.6-1.26-.22-2.38-.58-3.2-1.06l-.02-.01v4.48c0 .09.04.26.3.5q.4.36 1.27.71c1.16.45 2.82.74 4.68.74q.5 0 .98-.03c.41-.02.77.3.79.71s-.3.77-.7.8l-1.07.02c-2 0-3.85-.31-5.22-.84-.68-.26-1.29-.6-1.74-1s-.79-.95-.79-1.61V5.7c0-.66.35-1.2.8-1.6.44-.41 1.05-.75 1.73-1C8.15 2.55 10 2.24 12 2.24m0 1.5c-1.86 0-3.52.3-4.68.74q-.87.34-1.26.71c-.27.24-.31.41-.31.5s.04.26.3.5q.4.37 1.27.7c1.16.46 2.82.75 4.68.75s3.52-.3 4.68-.74q.87-.35 1.26-.71c.27-.24.31-.41.31-.5s-.04-.26-.3-.5q-.4-.37-1.27-.71c-1.16-.45-2.82-.74-4.68-.74" clipRule="evenodd" opacity={.4} />
        <path d="M15.57 11.28c.14-.41.72-.41.86 0l.36 1.09c.45 1.34 1.5 2.4 2.84 2.84l1.09.36c.4.14.4.72 0 .86l-1.09.36c-1.34.45-2.4 1.5-2.84 2.84l-.36 1.09c-.14.4-.72.4-.86 0l-.36-1.09c-.45-1.34-1.5-2.4-2.84-2.84l-1.09-.36c-.41-.14-.41-.72 0-.86l1.09-.36c1.34-.45 2.4-1.5 2.84-2.84z" />
    </IconBase>
  ))
);

DatabaseSparkleRegularDuotone.displayName = 'DatabaseSparkleRegularDuotone';

// Triple export pattern
export { DatabaseSparkleRegularDuotone, DatabaseSparkleRegularDuotone as DatabaseSparkleRegularDuotoneIcon, DatabaseSparkleRegularDuotone as SiDatabaseSparkleRegularDuotone };
export default DatabaseSparkleRegularDuotone;
export type { DatabaseSparkleRegularDuotoneProps };
