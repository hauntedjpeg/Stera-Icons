import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HardDriveFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HardDriveFillDuotone = memo(
  forwardRef<SVGSVGElement, HardDriveFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.65 5.38c.46 0 .87.28 1.04.7l2.02 5.05H4.29l2.02-5.05c.17-.42.58-.7 1.04-.7z" opacity={.4} />
        <path fillRule="evenodd" d="M16.65 3.63c1.17 0 2.23.71 2.67 1.8l2.48 6.22a1 1 0 0 1 .07.35v4.5A3.9 3.9 0 0 1 18 20.38H6a3.9 3.9 0 0 1-3.87-3.88V12a1 1 0 0 1 .07-.35l2.48-6.22c.44-1.09 1.5-1.8 2.67-1.8zM6.5 14.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3.5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M7.35 5.38c-.46 0-.87.28-1.04.7l-2.02 5.05h15.42l-2.02-5.05c-.17-.42-.58-.7-1.04-.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

HardDriveFillDuotone.displayName = 'HardDriveFillDuotone';

// Triple export pattern (lucide-react style)
export { HardDriveFillDuotone, HardDriveFillDuotone as HardDriveFillDuotoneIcon, HardDriveFillDuotone as SiHardDriveFillDuotone };
export default HardDriveFillDuotone;
export type { HardDriveFillDuotoneProps };
