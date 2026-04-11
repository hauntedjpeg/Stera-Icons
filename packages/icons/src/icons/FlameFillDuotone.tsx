import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlameFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlameFillDuotone = memo(
  forwardRef<SVGSVGElement, FlameFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="m12.14 2.14.15.03q.15.06.26.15h.01l.02.02.06.06a18 18 0 0 1 1.05.93c.67.63 1.57 1.52 2.47 2.58.9 1.05 1.82 2.28 2.52 3.58.69 1.3 1.2 2.72 1.2 4.15 0 4.5-3.49 8.24-7.88 8.24s-7.87-3.74-7.87-8.24c0-1.43.5-2.85 1.2-4.15.69-1.3 1.6-2.53 2.5-3.58a33 33 0 0 1 3.53-3.51l.06-.06.02-.01a.87.87 0 0 1 .7-.19m.04 8.9a.5.5 0 0 0-.36 0h-.03l-.06.04-.02.01-.03.03h-.01l-.13.12a12 12 0 0 0-1.43 1.53c-.77.96-1.61 2.34-1.61 3.78 0 1.2.5 2.09 1.2 2.66a3.7 3.7 0 0 0 4.6 0c.7-.57 1.2-1.45 1.2-2.66 0-1.44-.84-2.82-1.6-3.78a13 13 0 0 0-1.57-1.64v-.01l-.04-.03h-.02l-.06-.04z" clipRule="evenodd" opacity={.4} />
        <path d="M11.82 11.03a.5.5 0 0 1 .36 0l.03.02.11.07.14.12a11 11 0 0 1 1.43 1.53c.77.96 1.61 2.34 1.61 3.78 0 1.2-.5 2.09-1.2 2.65a3.7 3.7 0 0 1-4.6 0 3.3 3.3 0 0 1-1.2-2.65c0-1.44.84-2.82 1.6-3.78a13 13 0 0 1 1.69-1.72z" />
    </IconBase>
  ))
);

FlameFillDuotone.displayName = 'FlameFillDuotone';

// Triple export pattern (lucide-react style)
export { FlameFillDuotone, FlameFillDuotone as FlameFillDuotoneIcon, FlameFillDuotone as SiFlameFillDuotone };
export default FlameFillDuotone;
export type { FlameFillDuotoneProps };
