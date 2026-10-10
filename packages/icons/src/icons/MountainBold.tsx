import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MountainBoldProps = Omit<IconBaseProps, 'children'>;

const MountainBold = memo(
  forwardRef<SVGSVGElement, MountainBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.47 4.1c1.18-1.85 3.88-1.85 5.06 0l7.85 12.28c1.27 2-.16 4.62-2.53 4.62H4.15c-2.37 0-3.8-2.62-2.53-4.62zm.76 8.48-.1.07c-.49.3-1.1.3-1.6 0l-.1-.07-1.35-1.02-3.77 5.9c-.43.67.05 1.54.84 1.54h15.7c.79 0 1.27-.87.84-1.54l-3.77-5.9-1.35 1.02-.1.07c-.5.3-1.11.3-1.6 0l-.1-.07L12 11.25zm2.61-7.4c-.39-.62-1.29-.62-1.68 0l-3 4.69 1.17.88 1.77-1.33c.53-.4 1.27-.4 1.8 0l1.77 1.33 1.17-.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

MountainBold.displayName = 'MountainBold';

// Triple export pattern
export { MountainBold, MountainBold as MountainBoldIcon, MountainBold as SiMountainBold };
export default MountainBold;
export type { MountainBoldProps };
