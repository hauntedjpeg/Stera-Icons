import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PenNibAltRegularProps = Omit<IconBaseProps, 'children'>;

const PenNibAltRegular = memo(
  forwardRef<SVGSVGElement, PenNibAltRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.33 3c3.33.53 7.24 1.5 10.01 3.03 1.38.76 2.57 1.7 3.22 2.88.6 1.1.7 2.31.2 3.61l.65.66c.78.78.78 2.05 0 2.83l-4.4 4.4c-.78.78-2.05.78-2.83 0l-.66-.65c-1.3.5-2.52.4-3.6-.2-1.18-.65-2.13-1.84-2.9-3.22-1.52-2.77-2.5-6.68-3.01-10q-.05-.38.2-.65L5.7 3.22q.27-.26.64-.21m-.29 1.98 4.3 4.3c1.25-.78 2.9-.62 4 .46 1.26 1.27 1.26 3.32 0 4.6-1.28 1.26-3.33 1.26-4.6 0-1.08-1.1-1.24-2.75-.46-4l-4.3-4.3-.43.44c.52 3.17 1.44 6.69 2.8 9.14q1.06 1.93 2.29 2.62c.76.43 1.64.5 2.71-.05l.49-.24 1.4 1.4c.2.2.51.2.7 0l4.41-4.4c.2-.2.2-.51 0-.7l-1.4-1.41.24-.49c.54-1.07.48-1.95.05-2.71-.45-.82-1.35-1.6-2.62-2.3C13.17 6 9.65 5.07 6.48 4.55zm7.23 5.82c-.68-.68-1.78-.68-2.47 0-.68.69-.68 1.79 0 2.47s1.79.68 2.47 0 .68-1.78 0-2.47" clipRule="evenodd" />
    </IconBase>
  ))
);

PenNibAltRegular.displayName = 'PenNibAltRegular';

// Triple export pattern
export { PenNibAltRegular, PenNibAltRegular as PenNibAltRegularIcon, PenNibAltRegular as SiPenNibAltRegular };
export default PenNibAltRegular;
export type { PenNibAltRegularProps };
