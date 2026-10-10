import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseBanRegularProps = Omit<IconBaseProps, 'children'>;

const DatabaseBanRegular = memo(
  forwardRef<SVGSVGElement, DatabaseBanRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c2 0 3.85.31 5.22.84.68.26 1.29.6 1.74 1s.79.95.79 1.61v3.98c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.82q-.47.27-1.03.49c-1.37.53-3.22.84-5.22.84s-3.85-.31-5.22-.84q-.56-.2-1.03-.5v3.95c.04.16.2.45.8.8.65.36 1.62.68 2.8.88.42.07.7.46.63.86-.07.41-.46.69-.87.62-1.3-.21-2.45-.58-3.3-1.07l-.06-.03v4.48c0 .08.04.23.25.44q.31.32 1.05.66c.99.43 2.41.74 4.07.83.41.02.73.37.7.78-.01.42-.37.74-.78.72-1.78-.1-3.4-.43-4.59-.96q-.91-.39-1.51-.97c-.4-.39-.69-.9-.69-1.5V5.7c0-.66.35-1.2.8-1.6.44-.41 1.05-.75 1.73-1C8.15 2.55 10 2.24 12 2.24m0 1.5c-1.86 0-3.52.3-4.68.74q-.87.34-1.26.71c-.27.24-.31.41-.31.5s.04.26.3.5q.4.37 1.27.7c1.16.46 2.82.75 4.68.75s3.52-.3 4.68-.74q.87-.35 1.26-.71c.27-.24.31-.41.31-.5s-.04-.26-.3-.5q-.4-.37-1.27-.71c-1.16-.45-2.82-.74-4.68-.74" clipRule="evenodd" />
        <path fillRule="evenodd" d="M16 11.25c2.62 0 4.75 2.13 4.75 4.75 0 1.31-.53 2.5-1.4 3.36-.85.86-2.04 1.39-3.35 1.39-2.62 0-4.75-2.13-4.75-4.75 0-1.31.53-2.5 1.4-3.36.85-.86 2.04-1.39 3.35-1.39m-2.77 3.04q-.46.76-.48 1.71c0 1.8 1.46 3.25 3.25 3.25q.95-.02 1.7-.48zM16 12.75q-.96.02-1.7.48l4.47 4.48q.47-.76.48-1.71c0-1.8-1.46-3.25-3.25-3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

DatabaseBanRegular.displayName = 'DatabaseBanRegular';

// Triple export pattern
export { DatabaseBanRegular, DatabaseBanRegular as DatabaseBanRegularIcon, DatabaseBanRegular as SiDatabaseBanRegular };
export default DatabaseBanRegular;
export type { DatabaseBanRegularProps };
