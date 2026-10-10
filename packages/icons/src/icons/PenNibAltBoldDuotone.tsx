import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PenNibAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PenNibAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, PenNibAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.38 8.96c1.32-.71 3-.51 4.13.6 1.36 1.37 1.36 3.58 0 4.95-1.37 1.36-3.58 1.36-4.94 0-1.12-1.12-1.32-2.8-.6-4.13L4.97 6.4 6.4 4.98zm2.71 2.02c-.58-.58-1.53-.58-2.1 0-.6.58-.6 1.53 0 2.11.57.59 1.52.59 2.1 0 .59-.58.59-1.53 0-2.1" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M6.37 2.76c3.33.52 7.28 1.5 10.1 3.05 1.4.77 2.63 1.75 3.3 2.98q.95 1.7.28 3.67l.54.54c.88.88.88 2.3 0 3.18l-4.4 4.41c-.89.88-2.3.88-3.19 0l-.54-.54c-1.3.46-2.55.34-3.67-.27-1.23-.68-2.2-1.92-2.98-3.32C4.26 13.65 3.28 9.7 2.76 6.37c-.05-.31.06-.63.28-.86l2.47-2.47c.23-.22.55-.33.86-.28m-1.55 3.8c.52 3.13 1.43 6.56 2.74 8.94q1.05 1.88 2.2 2.53c.69.38 1.47.45 2.48-.06l.64-.33 1.54 1.54c.1.1.25.1.35 0l4.4-4.41c.1-.1.1-.25 0-.35l-1.53-1.54.33-.64c.5-1 .44-1.8.06-2.48q-.64-1.14-2.53-2.2c-2.38-1.31-5.81-2.22-8.94-2.74z" clipRule="evenodd" />
    </IconBase>
  ))
);

PenNibAltBoldDuotone.displayName = 'PenNibAltBoldDuotone';

// Triple export pattern
export { PenNibAltBoldDuotone, PenNibAltBoldDuotone as PenNibAltBoldDuotoneIcon, PenNibAltBoldDuotone as SiPenNibAltBoldDuotone };
export default PenNibAltBoldDuotone;
export type { PenNibAltBoldDuotoneProps };
