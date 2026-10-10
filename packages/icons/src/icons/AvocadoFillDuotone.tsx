import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AvocadoFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AvocadoFillDuotone = memo(
  forwardRef<SVGSVGElement, AvocadoFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 10.63c2.14 0 3.88 1.73 3.88 3.87s-1.74 3.88-3.88 3.88-3.87-1.74-3.87-3.88 1.73-3.87 3.87-3.87m0 1.74c-1.17 0-2.12.96-2.12 2.13s.95 2.13 2.12 2.13 2.13-.96 2.13-2.13-.96-2.12-2.13-2.12" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2.13c3.17 0 5.75 2.5 5.87 5.65l.02.61c.03.53.05.83.12 1.15.1.43.28.91.74 2l.15.34q.46 1.23.48 2.62c0 4.07-3.3 7.38-7.38 7.38s-7.37-3.3-7.37-7.38q.01-1.59.62-2.96c.46-1.09.64-1.57.74-2s.1-.81.14-1.76l.02-.3c.26-3 2.78-5.35 5.85-5.35m0 1.75c-2.16 0-3.93 1.65-4.1 3.76l-.02.2c-.04.88-.05 1.46-.18 2.08-.14.61-.4 1.25-.85 2.31v.01q-.46 1.05-.47 2.26c0 3.1 2.51 5.63 5.62 5.63 3.1 0 5.63-2.52 5.63-5.63q0-1.21-.48-2.26c-.45-1.07-.71-1.7-.85-2.32-.1-.46-.13-.9-.16-1.47l-.02-.6c-.08-2.21-1.9-3.97-4.12-3.97" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 3.88c2.22 0 4.04 1.76 4.12 3.96l.02.61c.03.56.06 1 .16 1.47.14.61.4 1.25.85 2.31v.01q.46 1.05.48 2.26c0 3.1-2.52 5.63-5.63 5.63S6.38 17.6 6.38 14.5q0-1.21.47-2.26c.45-1.07.71-1.7.85-2.32.13-.62.14-1.2.18-2.08l.01-.2C8.07 5.53 9.84 3.88 12 3.88m0 6.75c-2.14 0-3.87 1.73-3.87 3.87s1.73 3.88 3.87 3.88 3.88-1.74 3.88-3.88-1.74-3.87-3.88-3.87" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

AvocadoFillDuotone.displayName = 'AvocadoFillDuotone';

// Triple export pattern
export { AvocadoFillDuotone, AvocadoFillDuotone as AvocadoFillDuotoneIcon, AvocadoFillDuotone as SiAvocadoFillDuotone };
export default AvocadoFillDuotone;
export type { AvocadoFillDuotoneProps };
