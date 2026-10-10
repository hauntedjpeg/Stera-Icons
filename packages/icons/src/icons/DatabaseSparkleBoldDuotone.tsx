import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseSparkleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabaseSparkleBoldDuotone = memo(
  forwardRef<SVGSVGElement, DatabaseSparkleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c2.02 0 3.9.31 5.31.86.7.27 1.34.61 1.81 1.05.48.44.88 1.04.88 1.79v5.39c0 .55-.45 1-1 1s-1-.45-1-1V8.24q-.33.16-.69.3c-1.4.55-3.29.86-5.31.86s-3.9-.31-5.31-.86q-.36-.14-.69-.3v3.46l.01.04q.01.04.08.13.14.19.56.45c.58.34 1.48.65 2.62.85.55.1.9.62.81 1.16-.1.54-.61.9-1.16.81-1.1-.2-2.11-.5-2.92-.9v4.06q0 0 .03.08t.2.23q.33.33 1.18.67c1.13.43 2.75.72 4.59.72q.5 0 .97-.03c.55-.03 1.02.4 1.05.95s-.39 1.02-.94 1.05Q12.55 22 12 22c-2.02 0-3.9-.31-5.31-.86-.7-.27-1.34-.61-1.81-1.05C4.4 19.65 4 19.05 4 18.3V5.7c0-.75.4-1.35.88-1.79.47-.44 1.11-.78 1.81-1.05C8.09 2.3 9.98 2 12 2m0 2c-1.84 0-3.46.29-4.59.72q-.85.34-1.19.67-.15.15-.2.23L6 5.7q0 0 .03.08t.2.23q.33.33 1.18.67c1.13.43 2.75.72 4.59.72s3.46-.29 4.59-.72q.85-.34 1.19-.67.15-.15.2-.23L18 5.7q0 0-.03-.08t-.2-.23q-.33-.33-1.18-.67C15.46 4.3 13.84 4 12 4" clipRule="evenodd" opacity={.4} />
        <path d="M15.57 11.28c.14-.41.72-.41.86 0l.36 1.09c.45 1.34 1.5 2.4 2.84 2.84l1.09.36c.4.14.4.72 0 .86l-1.09.36c-1.34.45-2.4 1.5-2.84 2.84l-.36 1.09c-.14.4-.72.4-.86 0l-.36-1.09c-.45-1.34-1.5-2.4-2.84-2.84l-1.09-.36c-.41-.14-.41-.72 0-.86l1.09-.36c1.34-.45 2.4-1.5 2.84-2.84z" />
    </IconBase>
  ))
);

DatabaseSparkleBoldDuotone.displayName = 'DatabaseSparkleBoldDuotone';

// Triple export pattern
export { DatabaseSparkleBoldDuotone, DatabaseSparkleBoldDuotone as DatabaseSparkleBoldDuotoneIcon, DatabaseSparkleBoldDuotone as SiDatabaseSparkleBoldDuotone };
export default DatabaseSparkleBoldDuotone;
export type { DatabaseSparkleBoldDuotoneProps };
