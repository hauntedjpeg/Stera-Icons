import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MountainFillProps = Omit<IconBaseProps, 'children'>;

const MountainFill = memo(
  forwardRef<SVGSVGElement, MountainFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.47 4.1a3 3 0 0 1 5.06 0l7.85 12.28A3 3 0 0 1 19.85 21H4.15a3 3 0 0 1-2.53-4.62zm3.37 1.08a1 1 0 0 0-1.68 0l-3 4.69 1.17.88 1.77-1.33a1.5 1.5 0 0 1 1.8 0l1.77 1.33 1.17-.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

MountainFill.displayName = 'MountainFill';

// Triple export pattern (lucide-react style)
export { MountainFill, MountainFill as MountainFillIcon, MountainFill as SiMountainFill };
export default MountainFill;
export type { MountainFillProps };
