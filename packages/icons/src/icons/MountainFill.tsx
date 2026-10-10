import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MountainFillProps = Omit<IconBaseProps, 'children'>;

const MountainFill = memo(
  forwardRef<SVGSVGElement, MountainFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.47 4.1c1.18-1.85 3.88-1.85 5.06 0l7.85 12.28c1.27 2-.16 4.62-2.53 4.62H4.15c-2.37 0-3.8-2.62-2.53-4.62zm3.37 1.08c-.4-.62-1.29-.62-1.68 0l-3 4.69 1.17.88 1.77-1.33c.53-.4 1.27-.4 1.8 0l1.77 1.33 1.17-.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

MountainFill.displayName = 'MountainFill';

// Triple export pattern
export { MountainFill, MountainFill as MountainFillIcon, MountainFill as SiMountainFill };
export default MountainFill;
export type { MountainFillProps };
