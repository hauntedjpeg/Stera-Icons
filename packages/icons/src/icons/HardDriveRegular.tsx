import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HardDriveRegularProps = Omit<IconBaseProps, 'children'>;

const HardDriveRegular = memo(
  forwardRef<SVGSVGElement, HardDriveRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.5 14.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M10 14.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        <path fillRule="evenodd" d="M16.65 3.75c1.12 0 2.13.68 2.55 1.73l2.49 6.22v.02l.02.06q.03.1.04.22v4.5A3.75 3.75 0 0 1 18 20.25H6a3.75 3.75 0 0 1-3.75-3.75V12q0-.12.04-.22l.01-.06.01-.02 2.5-6.22a2.75 2.75 0 0 1 2.54-1.73zM3.75 14.7c0 .85 0 1.45.04 1.9.03.45.1.7.2.9a2.3 2.3 0 0 0 .82.91l.03.02.14.07c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h8.4c.85 0 1.45 0 1.9-.04a2.4 2.4 0 0 0 1.06-.28l.03-.02q.16-.1.28-.2l.01-.02a2 2 0 0 0 .53-.69c.1-.2.17-.45.2-.9.04-.45.04-1.05.04-1.9v-1.95H3.75zm3.6-9.45c-.5 0-.97.31-1.16.79l-2.08 5.21h15.78l-2.08-5.21a1.3 1.3 0 0 0-1.16-.79z" clipRule="evenodd" />
    </IconBase>
  ))
);

HardDriveRegular.displayName = 'HardDriveRegular';

// Triple export pattern (lucide-react style)
export { HardDriveRegular, HardDriveRegular as HardDriveRegularIcon, HardDriveRegular as SiHardDriveRegular };
export default HardDriveRegular;
export type { HardDriveRegularProps };
