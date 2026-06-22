import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PenNibAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PenNibAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, PenNibAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.34 9.28a3.24 3.24 0 1 1-1.06 1.06l-4.3-4.3 1.06-1.06zm2.93 1.52a1.74 1.74 0 1 0-2.47 2.47 1.74 1.74 0 0 0 2.47-2.47" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M6.33 3c3.33.53 7.24 1.5 10.01 3.03a8 8 0 0 1 3.22 2.88c.6 1.1.7 2.31.2 3.61l.65.66a2 2 0 0 1 0 2.83l-4.4 4.4a2 2 0 0 1-2.83 0l-.66-.65c-1.3.5-2.52.4-3.6-.2a8 8 0 0 1-2.9-3.22c-1.52-2.77-2.5-6.68-3.01-10a.8.8 0 0 1 .21-.65l2.47-2.47A.8.8 0 0 1 6.33 3M4.55 6.49c.52 3.17 1.44 6.69 2.8 9.14a6.5 6.5 0 0 0 2.29 2.62c.76.43 1.64.5 2.71-.05l.49-.24 1.4 1.4c.2.2.51.2.7 0l4.41-4.4c.2-.2.2-.51 0-.7l-1.4-1.41.24-.49c.54-1.07.48-1.95.05-2.71a6.5 6.5 0 0 0-2.62-2.3C13.17 6 9.65 5.07 6.48 4.55z" clipRule="evenodd" />
    </IconBase>
  ))
);

PenNibAltRegularDuotone.displayName = 'PenNibAltRegularDuotone';

// Triple export pattern (lucide-react style)
export { PenNibAltRegularDuotone, PenNibAltRegularDuotone as PenNibAltRegularDuotoneIcon, PenNibAltRegularDuotone as SiPenNibAltRegularDuotone };
export default PenNibAltRegularDuotone;
export type { PenNibAltRegularDuotoneProps };
