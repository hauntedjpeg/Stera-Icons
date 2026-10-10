import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HardDriveRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HardDriveRegularDuotone = memo(
  forwardRef<SVGSVGElement, HardDriveRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m2.29 11.78.01-.06zM21.7 11.72l.01.06q0-.04-.02-.07zM16.65 3.75c1.12 0 2.13.68 2.55 1.73l2.49 6.22c-.12-.26-.38-.45-.69-.45h-1.1l-2.1-5.21c-.18-.48-.64-.79-1.15-.79h-9.3c-.5 0-.97.31-1.16.79l-2.08 5.21H3c-.3 0-.57.19-.69.45l2.5-6.22c.4-1.05 1.42-1.73 2.54-1.73z" opacity={0.4} />
        <path d="M6.5 14.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M10 14.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1" />
        <path fillRule="evenodd" d="M21 11.25c.41 0 .75.34.75.75v2.7q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H7.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03V12c0-.41.34-.75.75-.75zM3.75 14.7c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h8.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-1.95H3.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

HardDriveRegularDuotone.displayName = 'HardDriveRegularDuotone';

// Triple export pattern
export { HardDriveRegularDuotone, HardDriveRegularDuotone as HardDriveRegularDuotoneIcon, HardDriveRegularDuotone as SiHardDriveRegularDuotone };
export default HardDriveRegularDuotone;
export type { HardDriveRegularDuotoneProps };
