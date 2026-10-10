import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PipetteFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PipetteFillDuotone = memo(
  forwardRef<SVGSVGElement, PipetteFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m14.32 14.53-5.39 5.4c-1.43 1.43-3.59 1.84-5.45 1.05l-.32-.14-.13-.32c-.8-1.86-.39-4.02 1.04-5.45l5.4-5.4z" opacity={.4} />
        <path d="M15.51 3.63c1.34-1.34 3.52-1.34 4.86 0s1.34 3.52 0 4.86l-1.92 1.91.11.1c1.14 1.15 1.14 3 0 4.14s-3 1.14-4.13 0L9.36 9.57c-1.14-1.14-1.14-2.99 0-4.13s3-1.14 4.13 0l.1.1z" />
    </IconBase>
  ))
);

PipetteFillDuotone.displayName = 'PipetteFillDuotone';

// Triple export pattern
export { PipetteFillDuotone, PipetteFillDuotone as PipetteFillDuotoneIcon, PipetteFillDuotone as SiPipetteFillDuotone };
export default PipetteFillDuotone;
export type { PipetteFillDuotoneProps };
