import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PenNibFillProps = Omit<IconBaseProps, 'children'>;

const PenNibFill = memo(
  forwardRef<SVGSVGElement, PenNibFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.13 10.26a2.88 2.88 0 1 0 1.75 0V2.13h.87q.44.01.7.35c2 2.73 4.09 6.2 4.98 9.28.44 1.53.62 3.07.23 4.4a4.2 4.2 0 0 1-2.4 2.74V20c0 1.04-.85 1.87-1.88 1.88H8.62A1.9 1.9 0 0 1 6.75 20v-1.1a4.2 4.2 0 0 1-2.41-2.75 8 8 0 0 1 .23-4.4c.9-3.06 2.98-6.54 4.97-9.27l.07-.08q.26-.26.64-.27h.88z" />
    </IconBase>
  ))
);

PenNibFill.displayName = 'PenNibFill';

// Triple export pattern (lucide-react style)
export { PenNibFill, PenNibFill as PenNibFillIcon, PenNibFill as SiPenNibFill };
export default PenNibFill;
export type { PenNibFillProps };
