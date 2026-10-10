import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseBanBoldProps = Omit<IconBaseProps, 'children'>;

const DatabaseBanBold = memo(
  forwardRef<SVGSVGElement, DatabaseBanBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c2.02 0 3.9.31 5.31.86.7.27 1.34.61 1.81 1.05.48.44.88 1.04.88 1.79v3.98c0 .55-.45 1-1 1s-1-.45-1-1V8.24q-.33.16-.69.3c-1.4.55-3.29.86-5.31.86s-3.9-.31-5.31-.86q-.36-.14-.69-.3v3.46l.01.04q.01.04.08.13.14.2.6.47c.6.35 1.53.66 2.7.86.55.09.92.6.83 1.15s-.6.9-1.15.82c-1.16-.2-2.23-.51-3.07-.93v4.06l.02.06q.03.08.15.2.27.29.98.61c.95.42 2.35.73 3.98.8.55.04.98.5.95 1.06-.03.55-.5.97-1.05.95-1.8-.1-3.45-.44-4.68-.98-.61-.26-1.17-.6-1.59-1.02S4 18.98 4 18.3V5.7c0-.75.4-1.35.88-1.79.47-.44 1.11-.78 1.81-1.05C8.09 2.3 9.98 2 12 2m0 2c-1.84 0-3.46.29-4.59.72q-.85.34-1.19.67-.15.15-.2.23L6 5.7q0 0 .03.08t.2.23q.33.33 1.18.67c1.13.43 2.75.72 4.59.72s3.46-.29 4.59-.72q.85-.34 1.19-.67.15-.15.2-.23L18 5.7q0 0-.03-.08t-.2-.23q-.33-.33-1.18-.67C15.46 4.3 13.84 4 12 4" clipRule="evenodd" />
        <path fillRule="evenodd" d="M16 11c2.76 0 5 2.24 5 5 0 1.38-.56 2.63-1.46 3.54-.9.9-2.16 1.46-3.54 1.46-2.76 0-5-2.24-5-5 0-1.38.56-2.63 1.46-3.54.9-.9 2.16-1.46 3.54-1.46m-2.7 3.7q-.3.6-.3 1.3c0 1.66 1.34 3 3 3q.7 0 1.3-.3zM16 13q-.7 0-1.3.3l4 4q.3-.6.3-1.3c0-1.66-1.34-3-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

DatabaseBanBold.displayName = 'DatabaseBanBold';

// Triple export pattern
export { DatabaseBanBold, DatabaseBanBold as DatabaseBanBoldIcon, DatabaseBanBold as SiDatabaseBanBold };
export default DatabaseBanBold;
export type { DatabaseBanBoldProps };
