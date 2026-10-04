import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AvocadoFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AvocadoFillDuotone = memo(
  forwardRef<SVGSVGElement, AvocadoFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 10.63a3.88 3.88 0 1 1 0 7.75 3.88 3.88 0 0 1 0-7.75m0 1.74a2.13 2.13 0 1 0 0 4.26 2.13 2.13 0 0 0 0-4.25" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2.13a5.87 5.87 0 0 1 5.87 5.65l.02.61c.03.53.05.83.12 1.15.1.43.28.91.74 2l.15.34q.46 1.23.48 2.62a7.38 7.38 0 1 1-14.13-2.96c.46-1.09.64-1.57.74-2s.1-.81.14-1.76l.02-.3c.26-3 2.78-5.35 5.85-5.35m0 1.75a4.13 4.13 0 0 0-4.1 3.76l-.02.2c-.04.88-.05 1.46-.18 2.08-.14.61-.4 1.25-.85 2.31v.01a5.63 5.63 0 1 0 10.3 0c-.45-1.07-.71-1.7-.85-2.32a8 8 0 0 1-.16-1.47l-.02-.6A4.1 4.1 0 0 0 12 3.87" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 3.88a4.1 4.1 0 0 1 4.12 3.96l.02.61c.03.56.06 1 .16 1.47.14.61.4 1.25.85 2.31v.01q.46 1.05.48 2.26a5.63 5.63 0 1 1-10.78-2.26c.45-1.07.71-1.7.85-2.32.13-.62.14-1.2.18-2.08l.01-.2A4.13 4.13 0 0 1 12 3.88m0 6.75a3.88 3.88 0 1 0 0 7.75 3.88 3.88 0 0 0 0-7.75" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

AvocadoFillDuotone.displayName = 'AvocadoFillDuotone';

// Triple export pattern (lucide-react style)
export { AvocadoFillDuotone, AvocadoFillDuotone as AvocadoFillDuotoneIcon, AvocadoFillDuotone as SiAvocadoFillDuotone };
export default AvocadoFillDuotone;
export type { AvocadoFillDuotoneProps };
