import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MountainRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MountainRegularDuotone = memo(
  forwardRef<SVGSVGElement, MountainRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.25 9.62a1.25 1.25 0 0 1 1.5 0l1.92 1.44 1.5-1.13.82 1.27-1.57 1.18-.09.05c-.4.26-.92.26-1.33 0l-.08-.05L12 10.94l-1.92 1.44-.08.05c-.44.28-1 .26-1.42-.05L7.01 11.2l.81-1.27 1.51 1.13z" opacity={.4} />
        <path fillRule="evenodd" d="M9.68 4.23a2.75 2.75 0 0 1 4.64 0l7.85 12.29a2.75 2.75 0 0 1-2.32 4.23H4.15a2.75 2.75 0 0 1-2.32-4.23zm3.37.81a1.25 1.25 0 0 0-2.1 0L3.1 17.33c-.53.83.06 1.92 1.05 1.92h15.7c.99 0 1.58-1.1 1.05-1.92z" clipRule="evenodd" />
    </IconBase>
  ))
);

MountainRegularDuotone.displayName = 'MountainRegularDuotone';

// Triple export pattern (lucide-react style)
export { MountainRegularDuotone, MountainRegularDuotone as MountainRegularDuotoneIcon, MountainRegularDuotone as SiMountainRegularDuotone };
export default MountainRegularDuotone;
export type { MountainRegularDuotoneProps };
