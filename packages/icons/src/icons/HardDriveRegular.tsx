import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HardDriveRegularProps = Omit<IconBaseProps, 'children'>;

const HardDriveRegular = memo(
  forwardRef<SVGSVGElement, HardDriveRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.5 14.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M10 14.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1" />
        <path fillRule="evenodd" d="M16.65 3.75c1.12 0 2.13.68 2.55 1.73l2.49 6.22v.02l.02.06q.03.1.04.22v4.5c0 2.07-1.68 3.75-3.75 3.75H6c-2.07 0-3.75-1.68-3.75-3.75V12q0-.12.04-.22l.01-.06.01-.02 2.5-6.22c.4-1.05 1.42-1.73 2.54-1.73zM3.75 14.7c0 .85 0 1.45.04 1.9.03.45.1.7.2.9q.14.27.32.49.23.24.5.42l.03.02.14.07c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h8.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2l.14-.08.03-.02q.16-.1.28-.2l.01-.02.2-.2q.2-.22.33-.49c.1-.2.17-.45.2-.9.04-.45.04-1.05.04-1.9v-1.95H3.75zm3.6-9.45c-.5 0-.97.31-1.16.79l-2.08 5.21h15.78l-2.08-5.21c-.2-.48-.65-.79-1.16-.79z" clipRule="evenodd" />
    </IconBase>
  ))
);

HardDriveRegular.displayName = 'HardDriveRegular';

// Triple export pattern
export { HardDriveRegular, HardDriveRegular as HardDriveRegularIcon, HardDriveRegular as SiHardDriveRegular };
export default HardDriveRegular;
export type { HardDriveRegularProps };
