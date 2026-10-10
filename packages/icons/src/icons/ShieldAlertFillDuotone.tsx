import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldAlertFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldAlertFillDuotone = memo(
  forwardRef<SVGSVGElement, ShieldAlertFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75q.4 0 .65.3c1.38 1.54 3.1 2.44 4.52 2.96.71.25 1.33.41 1.76.5l.5.1.13.02h.03c.45.05.79.42.79.87v4.17c0 4.6-2.6 8.8-6.7 10.85l-1.29.64c-.24.12-.54.12-.78 0l-1.28-.64c-4.11-2.06-6.7-6.26-6.7-10.85V6.5c0-.45.33-.82.77-.87h.04l.12-.02.5-.1c.44-.09 1.06-.25 1.77-.5 1.41-.52 3.14-1.42 4.52-2.97q.26-.28.65-.29m0 12.5c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25m0-7.12c-.48 0-.87.39-.87.87v3.5c0 .48.39.88.87.88s.88-.4.88-.88V8c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 14.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M12 7.13c.48 0 .88.39.88.87v3.5c0 .48-.4.88-.88.88s-.87-.4-.87-.88V8c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

ShieldAlertFillDuotone.displayName = 'ShieldAlertFillDuotone';

// Triple export pattern
export { ShieldAlertFillDuotone, ShieldAlertFillDuotone as ShieldAlertFillDuotoneIcon, ShieldAlertFillDuotone as SiShieldAlertFillDuotone };
export default ShieldAlertFillDuotone;
export type { ShieldAlertFillDuotoneProps };
