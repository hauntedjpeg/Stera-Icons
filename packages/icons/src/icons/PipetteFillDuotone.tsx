import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PipetteFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PipetteFillDuotone = memo(
  forwardRef<SVGSVGElement, PipetteFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m14.32 14.53-5.39 5.4a4.95 4.95 0 0 1-5.44 1.05l-.33-.14-.13-.32a4.95 4.95 0 0 1 1.04-5.45l5.4-5.4z" opacity={.4} />
        <path d="M15.51 3.63a3.43 3.43 0 0 1 4.86 4.86l-1.92 1.91.11.1a2.92 2.92 0 0 1-4.13 4.14L9.36 9.57a2.92 2.92 0 0 1 4.13-4.13l.1.1z" />
    </IconBase>
  ))
);

PipetteFillDuotone.displayName = 'PipetteFillDuotone';

// Triple export pattern (lucide-react style)
export { PipetteFillDuotone, PipetteFillDuotone as PipetteFillDuotoneIcon, PipetteFillDuotone as SiPipetteFillDuotone };
export default PipetteFillDuotone;
export type { PipetteFillDuotoneProps };
