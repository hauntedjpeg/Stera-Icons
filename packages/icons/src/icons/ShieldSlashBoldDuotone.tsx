import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldSlashBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldSlashBoldDuotone = memo(
  forwardRef<SVGSVGElement, ShieldSlashBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.5 7.74c.55 0 1 .45 1 1v1.93c0 3.88 2.2 7.43 5.67 9.17l.83.42.83-.42q.96-.48 1.79-1.14c.43-.34 1.06-.27 1.4.17.35.43.28 1.06-.16 1.4q-.98.79-2.13 1.36l-1.28.64c-.28.14-.62.14-.9 0l-1.28-.64C6.12 19.55 3.5 15.3 3.5 10.67V8.74c0-.55.45-1 1-1M12 1.63q.45 0 .75.33c1.35 1.52 3.06 2.42 4.47 2.93q1.07.36 1.74.5l.5.1.12.01h.03c.5.06.89.49.89 1v4.17q0 2.22-.76 4.24c-.19.52-.76.78-1.28.6-.52-.2-.78-.77-.6-1.3q.64-1.67.64-3.54V7.34c-.5-.11-1.19-.29-1.97-.57-1.36-.5-3.04-1.33-4.53-2.72q-1.15 1.06-2.37 1.72c-.48.28-1.09.1-1.36-.38s-.1-1.09.38-1.36c.9-.5 1.81-1.18 2.6-2.07l.08-.08q.28-.24.67-.25" opacity={0.4} />
        <path d="M2.3 2.3c.38-.4 1.02-.4 1.4 0l17 17c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-17-17c-.4-.38-.4-1.02 0-1.4" />
    </IconBase>
  ))
);

ShieldSlashBoldDuotone.displayName = 'ShieldSlashBoldDuotone';

// Triple export pattern
export { ShieldSlashBoldDuotone, ShieldSlashBoldDuotone as ShieldSlashBoldDuotoneIcon, ShieldSlashBoldDuotone as SiShieldSlashBoldDuotone };
export default ShieldSlashBoldDuotone;
export type { ShieldSlashBoldDuotoneProps };
