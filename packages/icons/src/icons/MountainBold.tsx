import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MountainBoldProps = Omit<IconBaseProps, 'children'>;

const MountainBold = memo(
  forwardRef<SVGSVGElement, MountainBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.47 4.1a3 3 0 0 1 5.06 0l7.85 12.28A3 3 0 0 1 19.85 21H4.15a3 3 0 0 1-2.53-4.62zm.76 8.48-.1.07c-.49.3-1.1.3-1.6 0l-.1-.07-1.35-1.02-3.77 5.9A1 1 0 0 0 4.15 19h15.7a1 1 0 0 0 .84-1.54l-3.77-5.9-1.35 1.02-.1.07c-.5.3-1.11.3-1.6 0l-.1-.07L12 11.25zm2.61-7.4a1 1 0 0 0-1.68 0l-3 4.69 1.17.88 1.77-1.33a1.5 1.5 0 0 1 1.8 0l1.77 1.33 1.17-.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

MountainBold.displayName = 'MountainBold';

// Triple export pattern (lucide-react style)
export { MountainBold, MountainBold as MountainBoldIcon, MountainBold as SiMountainBold };
export default MountainBold;
export type { MountainBoldProps };
