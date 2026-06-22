import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PenNibAltFillProps = Omit<IconBaseProps, 'children'>;

const PenNibAltFill = memo(
  forwardRef<SVGSVGElement, PenNibAltFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.35 2.89c3.33.52 7.26 1.5 10.05 3.03 1.4.77 2.6 1.73 3.27 2.93.6 1.1.72 2.34.23 3.64l.6.6c.83.83.83 2.18 0 3l-4.4 4.41c-.83.83-2.18.83-3 0l-.6-.6c-1.31.49-2.54.38-3.65-.23a8 8 0 0 1-2.93-3.27C4.38 13.6 3.41 9.68 2.89 6.35a.9.9 0 0 1 .24-.75l.62-.62 5.9 5.91.13.1a2.5 2.5 0 1 0 1.21-1.21l-.1-.12L5 3.75l.61-.62.08-.07a1 1 0 0 1 .67-.17" />
    </IconBase>
  ))
);

PenNibAltFill.displayName = 'PenNibAltFill';

// Triple export pattern (lucide-react style)
export { PenNibAltFill, PenNibAltFill as PenNibAltFillIcon, PenNibAltFill as SiPenNibAltFill };
export default PenNibAltFill;
export type { PenNibAltFillProps };
