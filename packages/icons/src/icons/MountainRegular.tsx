import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MountainRegularProps = Omit<IconBaseProps, 'children'>;

const MountainRegular = memo(
  forwardRef<SVGSVGElement, MountainRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.68 4.23c1.08-1.69 3.56-1.69 4.64 0l7.85 12.29c1.17 1.83-.15 4.23-2.32 4.23H4.15c-2.17 0-3.48-2.4-2.32-4.23zm.4 8.15-.08.05c-.44.28-1 .26-1.42-.05L7.01 11.2 3.1 17.33c-.53.83.06 1.92 1.05 1.92h15.7c.99 0 1.58-1.1 1.05-1.92L17 11.2l-1.57 1.18-.09.05c-.4.26-.92.26-1.33 0l-.08-.05L12 10.94zm2.97-7.34c-.49-.77-1.61-.77-2.1 0L7.82 9.93l1.51 1.13 1.92-1.43c.44-.34 1.06-.34 1.5 0l1.92 1.43 1.5-1.13z" clipRule="evenodd" />
    </IconBase>
  ))
);

MountainRegular.displayName = 'MountainRegular';

// Triple export pattern
export { MountainRegular, MountainRegular as MountainRegularIcon, MountainRegular as SiMountainRegular };
export default MountainRegular;
export type { MountainRegularProps };
