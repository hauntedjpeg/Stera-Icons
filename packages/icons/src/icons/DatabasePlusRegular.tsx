import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabasePlusRegularProps = Omit<IconBaseProps, 'children'>;

const DatabasePlusRegular = memo(
  forwardRef<SVGSVGElement, DatabasePlusRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c2 0 3.85.31 5.22.84.68.26 1.29.6 1.74 1s.79.95.79 1.61v3.98c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.82q-.47.27-1.03.49c-1.37.53-3.22.84-5.22.84s-3.85-.31-5.22-.84q-.56-.2-1.03-.5v3.95c.04.16.2.45.8.8.65.36 1.62.68 2.8.88.42.07.7.46.63.86-.07.41-.46.69-.87.62-1.3-.21-2.45-.58-3.3-1.07l-.06-.03v4.48c0 .08.04.23.25.44q.31.32 1.05.66c.99.43 2.41.74 4.07.83.41.02.73.37.7.78-.01.42-.37.74-.78.72-1.78-.1-3.4-.43-4.59-.96q-.91-.39-1.51-.97c-.4-.39-.69-.9-.69-1.5V5.7c0-.66.35-1.2.8-1.6.44-.41 1.05-.75 1.73-1C8.15 2.55 10 2.24 12 2.24m0 1.5c-1.86 0-3.52.3-4.68.74q-.87.34-1.26.71c-.27.24-.31.41-.31.5s.04.26.3.5q.4.37 1.27.7c1.16.46 2.82.75 4.68.75s3.52-.3 4.68-.74q.87-.35 1.26-.71c.27-.24.31-.41.31-.5s-.04-.26-.3-.5q-.4-.37-1.27-.71c-1.16-.45-2.82-.74-4.68-.74" clipRule="evenodd" />
        <path d="M16 11.25c.42 0 .75.34.75.75v3.25H20c.42 0 .75.34.75.75s-.33.75-.75.75h-3.25V20c0 .41-.33.75-.75.75-.4 0-.75-.34-.75-.75v-3.25H12c-.4 0-.75-.34-.75-.75s.34-.75.75-.75h3.25V12c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

DatabasePlusRegular.displayName = 'DatabasePlusRegular';

// Triple export pattern
export { DatabasePlusRegular, DatabasePlusRegular as DatabasePlusRegularIcon, DatabasePlusRegular as SiDatabasePlusRegular };
export default DatabasePlusRegular;
export type { DatabasePlusRegularProps };
