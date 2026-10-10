import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PenNibAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PenNibAltFillDuotone = memo(
  forwardRef<SVGSVGElement, PenNibAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.35 2.89c3.33.52 7.26 1.5 10.05 3.03 1.4.77 2.6 1.73 3.27 2.93.6 1.1.72 2.34.23 3.64l.6.6c.83.83.83 2.18 0 3l-4.4 4.41c-.83.83-2.18.83-3 0l-.6-.6c-1.31.49-2.54.38-3.65-.23-1.2-.67-2.16-1.88-2.93-3.27-1.54-2.8-2.51-6.72-3.03-10.05-.05-.27.04-.55.24-.75l.62-.62 6.02 6.03c-.42.92-.25 2.04.5 2.8.98.96 2.56.96 3.53 0 .97-.98.97-2.56 0-3.54-.75-.75-1.87-.92-2.8-.5L4.99 3.75l.62-.62.08-.07q.3-.23.67-.17" opacity={.4} />
        <path d="M11 9.77c.93-.42 2.04-.25 2.8.5.97.98.97 2.56 0 3.53s-2.55.97-3.53 0c-.75-.76-.92-1.87-.5-2.8L3.75 4.99l1.23-1.23z" />
    </IconBase>
  ))
);

PenNibAltFillDuotone.displayName = 'PenNibAltFillDuotone';

// Triple export pattern
export { PenNibAltFillDuotone, PenNibAltFillDuotone as PenNibAltFillDuotoneIcon, PenNibAltFillDuotone as SiPenNibAltFillDuotone };
export default PenNibAltFillDuotone;
export type { PenNibAltFillDuotoneProps };
