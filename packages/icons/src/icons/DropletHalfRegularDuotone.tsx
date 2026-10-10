import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DropletHalfRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DropletHalfRegularDuotone = memo(
  forwardRef<SVGSVGElement, DropletHalfRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m12.01 4 .57.52c.64.6 1.5 1.45 2.35 2.44.85 1 1.7 2.13 2.32 3.3s1 2.32 1 3.38c0 3.69-2.83 6.61-6.25 6.61z" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.25h.11l.02.01.06.02.08.02.06.03.06.03.06.04.02.02h.01l.02.02.06.05.23.2.82.73c.67.63 1.56 1.52 2.46 2.57s1.8 2.27 2.5 3.56c.68 1.28 1.18 2.69 1.18 4.09 0 4.44-3.43 8.11-7.75 8.11s-7.75-3.67-7.75-8.11c0-1.4.5-2.8 1.18-4.09.7-1.3 1.6-2.51 2.5-3.56s1.8-1.94 2.46-2.57l.82-.73.23-.2.06-.05.02-.02.03-.02.06-.04.06-.03.06-.03.08-.02.06-.02h.02zM11.99 4l-.57.52c-.64.6-1.5 1.45-2.35 2.44-.85 1-1.7 2.13-2.32 3.3s-1 2.32-1 3.38c0 3.69 2.83 6.61 6.25 6.61s6.25-2.92 6.25-6.61c0-1.06-.38-2.21-1-3.38-.63-1.17-1.47-2.3-2.32-3.3s-1.7-1.84-2.35-2.44L12.01 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

DropletHalfRegularDuotone.displayName = 'DropletHalfRegularDuotone';

// Triple export pattern
export { DropletHalfRegularDuotone, DropletHalfRegularDuotone as DropletHalfRegularDuotoneIcon, DropletHalfRegularDuotone as SiDropletHalfRegularDuotone };
export default DropletHalfRegularDuotone;
export type { DropletHalfRegularDuotoneProps };
