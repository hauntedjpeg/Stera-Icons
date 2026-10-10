import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MountainBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MountainBoldDuotone = memo(
  forwardRef<SVGSVGElement, MountainBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.1 9.42c.53-.4 1.27-.4 1.8 0l1.77 1.33 1.17-.88 1.08 1.69-1.35 1.02-.1.07c-.5.3-1.11.3-1.6 0l-.1-.07L12 11.25l-1.77 1.33-.1.07c-.49.3-1.1.3-1.6 0l-.1-.07-1.35-1.02 1.08-1.7 1.17.89z" opacity={.4} />
        <path fillRule="evenodd" d="M9.47 4.1c1.18-1.85 3.88-1.85 5.06 0l7.85 12.28c1.27 2-.16 4.62-2.53 4.62H4.15c-2.37 0-3.8-2.62-2.53-4.62zm3.37 1.08c-.39-.62-1.29-.62-1.68 0L3.3 17.46c-.43.67.05 1.54.84 1.54h15.7c.79 0 1.27-.87.84-1.54z" clipRule="evenodd" />
    </IconBase>
  ))
);

MountainBoldDuotone.displayName = 'MountainBoldDuotone';

// Triple export pattern
export { MountainBoldDuotone, MountainBoldDuotone as MountainBoldDuotoneIcon, MountainBoldDuotone as SiMountainBoldDuotone };
export default MountainBoldDuotone;
export type { MountainBoldDuotoneProps };
