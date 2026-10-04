import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HardDriveBoldProps = Omit<IconBaseProps, 'children'>;

const HardDriveBold = memo(
  forwardRef<SVGSVGElement, HardDriveBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.5 14.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M10 14.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        <path fillRule="evenodd" d="M16.65 3.5a3 3 0 0 1 2.78 1.89l2.49 6.21.07.25v.06L22 12v4.5q-.02 1.33-.76 2.34l-.01.02A4 4 0 0 1 18 20.5H6a4 4 0 0 1-3.23-1.64l-.02-.02A4 4 0 0 1 2 16.5V12a1 1 0 0 1 .08-.4L4.57 5.4A3 3 0 0 1 7.35 3.5zM4 14.7c0 .86 0 1.44.04 1.89.03.42.1.64.17.8a2 2 0 0 0 .88.9c.16.07.38.14.82.17.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04a2 2 0 0 0 .94-.25 2 2 0 0 0 .76-.82c.07-.16.14-.38.17-.8.04-.45.04-1.03.04-1.89V13H4zm3.35-9.2a1 1 0 0 0-.92.63L4.48 11h15.04l-1.95-4.87a1 1 0 0 0-.92-.63z" clipRule="evenodd" />
    </IconBase>
  ))
);

HardDriveBold.displayName = 'HardDriveBold';

// Triple export pattern (lucide-react style)
export { HardDriveBold, HardDriveBold as HardDriveBoldIcon, HardDriveBold as SiHardDriveBold };
export default HardDriveBold;
export type { HardDriveBoldProps };
