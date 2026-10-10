import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PenNibFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PenNibFillDuotone = memo(
  forwardRef<SVGSVGElement, PenNibFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.75 2.13c.28 0 .54.13.7.35 2 2.73 4.09 6.2 4.98 9.28.44 1.53.62 3.07.23 4.4-.35 1.2-1.14 2.16-2.4 2.74V20c0 1.04-.85 1.87-1.88 1.88H8.62c-1.03 0-1.87-.84-1.87-1.88v-1.1c-1.27-.58-2.06-1.54-2.41-2.75-.39-1.32-.21-2.86.23-4.4.89-3.06 2.98-6.54 4.97-9.27l.07-.08q.26-.26.64-.27h.87v8.13c-1.16.37-2 1.46-2 2.74 0 1.59 1.3 2.87 2.88 2.88 1.59 0 2.87-1.3 2.87-2.88 0-1.28-.84-2.37-2-2.74V2.13z" opacity={.4} />
        <path d="M12.88 10.26c1.15.37 2 1.46 2 2.74 0 1.59-1.3 2.88-2.88 2.88-1.59 0-2.87-1.3-2.87-2.88 0-1.28.84-2.37 2-2.74V2.13h1.74z" />
    </IconBase>
  ))
);

PenNibFillDuotone.displayName = 'PenNibFillDuotone';

// Triple export pattern
export { PenNibFillDuotone, PenNibFillDuotone as PenNibFillDuotoneIcon, PenNibFillDuotone as SiPenNibFillDuotone };
export default PenNibFillDuotone;
export type { PenNibFillDuotoneProps };
