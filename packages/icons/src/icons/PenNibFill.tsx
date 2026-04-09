import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PenNibFillProps = Omit<IconBaseProps, 'children'>;

const PenNibFill = memo(
  forwardRef<SVGSVGElement, PenNibFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="pen-nib-fill" {...props}>
      <path d="M11.12 10.8a2.37 2.37 0 1 0 1.75 0V1.11H14l.1.01q.38.05.6.34c2.27 3.03 4.65 6.88 5.67 10.28.5 1.7.7 3.39.26 4.84a4.7 4.7 0 0 1-2.76 3.01V22c0 .48-.39.88-.87.88H7a.9.9 0 0 1-.88-.88v-2.4a4.7 4.7 0 0 1-2.76-3c-.43-1.46-.23-3.16.27-4.85C4.64 8.35 7.03 4.5 9.3 1.47l.06-.07q.27-.27.64-.27h1.12z" />
    </IconBase>
  ))
);

PenNibFill.displayName = 'PenNibFill';

// Triple export pattern (lucide-react style)
export { PenNibFill, PenNibFill as PenNibFillIcon, PenNibFill as SiPenNibFill };
export default PenNibFill;
export type { PenNibFillProps };
