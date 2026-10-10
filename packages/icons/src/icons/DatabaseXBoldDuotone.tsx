import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseXBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabaseXBoldDuotone = memo(
  forwardRef<SVGSVGElement, DatabaseXBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c2.02 0 3.9.31 5.31.86.7.27 1.34.61 1.81 1.05.48.44.88 1.04.88 1.79v3.94c0 .56-.45 1-1 1s-1-.44-1-1v-1.4q-.33.16-.69.3c-1.4.55-3.29.86-5.31.86s-3.9-.31-5.31-.86q-.36-.14-.69-.3v3.46l.02.07q.04.08.2.23.31.32 1.13.65c1.08.43 2.65.73 4.45.75.55 0 1 .46.99 1.01s-.46 1-1.01.99c-1.98-.02-3.8-.35-5.17-.89q-.31-.12-.61-.27v4.06q0 0 .03.08t.2.23q.33.33 1.18.67c1.13.43 2.75.72 4.59.72q.54 0 1.06-.03c.55-.04 1.03.38 1.06.93s-.38 1.03-.93 1.06Q12.6 22 12 22c-2.02 0-3.9-.31-5.31-.86-.7-.27-1.34-.61-1.81-1.05C4.4 19.65 4 19.05 4 18.3V5.7c0-.75.4-1.35.88-1.79.47-.44 1.11-.78 1.81-1.05C8.09 2.3 9.98 2 12 2m0 2c-1.84 0-3.46.29-4.59.72q-.85.34-1.19.67-.15.15-.2.23L6 5.7q0 0 .03.08t.2.23q.33.33 1.18.67c1.13.43 2.75.72 4.59.72s3.46-.29 4.59-.72q.85-.34 1.19-.67.15-.15.2-.23L18 5.7q0 0-.03-.08t-.2-.23q-.33-.33-1.18-.67C15.46 4.3 13.84 4 12 4" clipRule="evenodd" opacity={.4} />
        <path d="M19.3 12.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-1.79 1.8 1.8 1.8c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-1.79-1.79-1.8 1.8c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l1.79-1.79-1.8-1.8c-.39-.38-.39-1.02 0-1.4.4-.4 1.03-.4 1.42 0l1.79 1.79z" />
    </IconBase>
  ))
);

DatabaseXBoldDuotone.displayName = 'DatabaseXBoldDuotone';

// Triple export pattern
export { DatabaseXBoldDuotone, DatabaseXBoldDuotone as DatabaseXBoldDuotoneIcon, DatabaseXBoldDuotone as SiDatabaseXBoldDuotone };
export default DatabaseXBoldDuotone;
export type { DatabaseXBoldDuotoneProps };
