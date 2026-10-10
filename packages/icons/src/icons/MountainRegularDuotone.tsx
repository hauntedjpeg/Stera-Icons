import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MountainRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MountainRegularDuotone = memo(
  forwardRef<SVGSVGElement, MountainRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.25 9.62c.44-.33 1.06-.33 1.5 0l1.92 1.44 1.5-1.13.82 1.27-1.57 1.18-.09.05c-.4.26-.92.26-1.33 0l-.08-.05L12 10.94l-1.92 1.44-.08.05c-.44.28-1 .26-1.42-.05L7.01 11.2l.81-1.27 1.51 1.13z" opacity={.4} />
        <path fillRule="evenodd" d="M9.68 4.23c1.08-1.69 3.56-1.69 4.64 0l7.85 12.29c1.17 1.83-.15 4.23-2.32 4.23H4.15c-2.17 0-3.48-2.4-2.32-4.23zm3.37.81c-.49-.77-1.61-.77-2.1 0L3.1 17.33c-.53.83.06 1.92 1.05 1.92h15.7c.99 0 1.58-1.1 1.05-1.92z" clipRule="evenodd" />
    </IconBase>
  ))
);

MountainRegularDuotone.displayName = 'MountainRegularDuotone';

// Triple export pattern
export { MountainRegularDuotone, MountainRegularDuotone as MountainRegularDuotoneIcon, MountainRegularDuotone as SiMountainRegularDuotone };
export default MountainRegularDuotone;
export type { MountainRegularDuotoneProps };
