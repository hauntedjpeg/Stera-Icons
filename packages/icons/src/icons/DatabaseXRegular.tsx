import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseXRegularProps = Omit<IconBaseProps, 'children'>;

const DatabaseXRegular = memo(
  forwardRef<SVGSVGElement, DatabaseXRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c2 0 3.85.31 5.22.84.68.26 1.29.6 1.74 1s.79.95.79 1.61v3.94c0 .42-.34.75-.75.75s-.75-.33-.75-.75V7.82q-.47.27-1.03.49c-1.37.53-3.22.84-5.22.84s-3.85-.31-5.22-.84q-.56-.2-1.03-.5v3.89l.01.08q.02.15.28.4.37.37 1.22.7c1.12.45 2.72.75 4.53.77.42 0 .75.34.75.76 0 .41-.35.74-.76.74-1.95-.02-3.74-.34-5.08-.87q-.51-.21-.95-.46v4.48c0 .09.04.26.3.5q.4.36 1.27.71c1.16.45 2.82.74 4.68.74q.55 0 1.08-.03c.41-.03.77.29.8.7.02.41-.3.77-.7.8q-.58.03-1.18.03c-2 0-3.85-.31-5.22-.84-.68-.26-1.29-.6-1.74-1s-.79-.95-.79-1.61V5.7c0-.66.35-1.2.8-1.6.44-.41 1.05-.75 1.73-1C8.15 2.55 10 2.24 12 2.24m0 1.5c-1.86 0-3.52.3-4.68.74q-.87.34-1.26.71c-.27.24-.31.41-.31.5s.04.26.3.5q.4.37 1.27.7c1.16.46 2.82.75 4.68.75s3.52-.3 4.68-.74q.87-.35 1.26-.71c.27-.24.31-.41.31-.5s-.04-.26-.3-.5q-.4-.37-1.27-.71c-1.16-.45-2.82-.74-4.68-.74" clipRule="evenodd" />
        <path d="M19.47 12.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-1.97 1.97 1.97 1.97c.3.3.3.77 0 1.06s-.77.3-1.06 0l-1.97-1.97-1.97 1.97c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l1.97-1.97-1.97-1.97c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l1.97 1.97z" />
    </IconBase>
  ))
);

DatabaseXRegular.displayName = 'DatabaseXRegular';

// Triple export pattern
export { DatabaseXRegular, DatabaseXRegular as DatabaseXRegularIcon, DatabaseXRegular as SiDatabaseXRegular };
export default DatabaseXRegular;
export type { DatabaseXRegularProps };
