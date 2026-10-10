import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HardDriveFillProps = Omit<IconBaseProps, 'children'>;

const HardDriveFill = memo(
  forwardRef<SVGSVGElement, HardDriveFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.65 3.63c1.17 0 2.23.71 2.67 1.8l2.48 6.22.06.18.02.17v4.5c0 2.14-1.74 3.88-3.88 3.88H6c-2.14 0-3.87-1.74-3.87-3.88V12l.01-.17.06-.18 2.48-6.22c.44-1.09 1.5-1.8 2.67-1.8zM6.5 14.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m3.5 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M7.35 5.38c-.46 0-.87.28-1.04.7l-2.02 5.05h15.42l-2.02-5.05c-.17-.42-.58-.7-1.04-.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

HardDriveFill.displayName = 'HardDriveFill';

// Triple export pattern
export { HardDriveFill, HardDriveFill as HardDriveFillIcon, HardDriveFill as SiHardDriveFill };
export default HardDriveFill;
export type { HardDriveFillProps };
