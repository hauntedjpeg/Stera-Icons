import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MountainBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MountainBoldDuotone = memo(
  forwardRef<SVGSVGElement, MountainBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.1 9.42a1.5 1.5 0 0 1 1.8 0l1.77 1.33 1.17-.88 1.08 1.69-1.35 1.02-.1.07c-.5.3-1.11.3-1.6 0l-.1-.07L12 11.25l-1.77 1.33-.1.07c-.49.3-1.1.3-1.6 0l-.1-.07-1.35-1.02 1.08-1.7 1.17.89z" opacity={.4} />
        <path fillRule="evenodd" d="M9.47 4.1a3 3 0 0 1 5.06 0l7.85 12.28A3 3 0 0 1 19.85 21H4.15a3 3 0 0 1-2.53-4.62zm3.37 1.08a1 1 0 0 0-1.68 0L3.3 17.46A1 1 0 0 0 4.15 19h15.7a1 1 0 0 0 .84-1.54z" clipRule="evenodd" />
    </IconBase>
  ))
);

MountainBoldDuotone.displayName = 'MountainBoldDuotone';

// Triple export pattern (lucide-react style)
export { MountainBoldDuotone, MountainBoldDuotone as MountainBoldDuotoneIcon, MountainBoldDuotone as SiMountainBoldDuotone };
export default MountainBoldDuotone;
export type { MountainBoldDuotoneProps };
