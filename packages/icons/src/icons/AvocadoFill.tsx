import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AvocadoFillProps = Omit<IconBaseProps, 'children'>;

const AvocadoFill = memo(
  forwardRef<SVGSVGElement, AvocadoFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a5.87 5.87 0 0 1 5.87 5.65l.02.61c.03.53.05.83.12 1.15.1.43.28.91.74 2l.15.34q.46 1.23.48 2.62a7.38 7.38 0 1 1-14.13-2.96c.46-1.09.64-1.57.74-2s.1-.81.14-1.76l.02-.3c.26-3 2.78-5.35 5.85-5.35m0 9.37a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

AvocadoFill.displayName = 'AvocadoFill';

// Triple export pattern (lucide-react style)
export { AvocadoFill, AvocadoFill as AvocadoFillIcon, AvocadoFill as SiAvocadoFill };
export default AvocadoFill;
export type { AvocadoFillProps };
