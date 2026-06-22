import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PenNibAltBoldProps = Omit<IconBaseProps, 'children'>;

const PenNibAltBold = memo(
  forwardRef<SVGSVGElement, PenNibAltBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.37 2.76c3.33.52 7.28 1.5 10.1 3.05a8 8 0 0 1 3.3 2.98q.95 1.7.28 3.67l.54.54c.88.88.88 2.3 0 3.18l-4.4 4.41c-.89.88-2.3.88-3.19 0l-.54-.54c-1.3.46-2.55.34-3.67-.27a8 8 0 0 1-2.98-3.32C4.26 13.65 3.28 9.7 2.76 6.37a1 1 0 0 1 .28-.86l2.47-2.47a1 1 0 0 1 .86-.28m.03 2.22 3.98 3.98a3.5 3.5 0 1 1-1.42 1.42L4.98 6.4l-.16.16c.52 3.13 1.43 6.56 2.74 8.94a6 6 0 0 0 2.2 2.53c.69.38 1.47.45 2.48-.06l.64-.33 1.54 1.54c.1.1.25.1.35 0l4.4-4.41c.1-.1.1-.25 0-.35l-1.53-1.54.33-.64c.5-1 .44-1.8.06-2.48a6 6 0 0 0-2.53-2.2c-2.38-1.31-5.81-2.22-8.94-2.74zm6.7 6a1.5 1.5 0 1 0-2.12 2.11A1.5 1.5 0 0 0 13.1 11" clipRule="evenodd" />
    </IconBase>
  ))
);

PenNibAltBold.displayName = 'PenNibAltBold';

// Triple export pattern (lucide-react style)
export { PenNibAltBold, PenNibAltBold as PenNibAltBoldIcon, PenNibAltBold as SiPenNibAltBold };
export default PenNibAltBold;
export type { PenNibAltBoldProps };
