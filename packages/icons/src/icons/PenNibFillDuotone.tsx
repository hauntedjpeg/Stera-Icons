import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PenNibFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PenNibFillDuotone = memo(
  forwardRef<SVGSVGElement, PenNibFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.75 2.13c.28 0 .54.13.7.35 2 2.73 4.09 6.2 4.98 9.28.44 1.53.62 3.07.23 4.4a4.2 4.2 0 0 1-2.4 2.74V20c0 1.04-.85 1.87-1.88 1.88H8.62A1.9 1.9 0 0 1 6.75 20v-1.1a4.2 4.2 0 0 1-2.41-2.75 8 8 0 0 1 .23-4.4c.89-3.06 2.98-6.54 4.97-9.27l.07-.08q.26-.26.64-.27h.87v8.13a2.88 2.88 0 1 0 1.75 0V2.13z" opacity={.4} />
        <path d="M12.88 10.26a2.88 2.88 0 1 1-1.76 0V2.13h1.76z" />
    </IconBase>
  ))
);

PenNibFillDuotone.displayName = 'PenNibFillDuotone';

// Triple export pattern (lucide-react style)
export { PenNibFillDuotone, PenNibFillDuotone as PenNibFillDuotoneIcon, PenNibFillDuotone as SiPenNibFillDuotone };
export default PenNibFillDuotone;
export type { PenNibFillDuotoneProps };
