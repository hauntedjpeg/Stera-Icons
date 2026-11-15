import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PenNibAngledFillProps = Omit<IconBaseProps, 'children'>;

const PenNibAngledFill = memo(
  forwardRef<SVGSVGElement, PenNibAngledFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.35 2.89c3.33.52 7.26 1.5 10.05 3.03 1.4.77 2.6 1.73 3.27 2.93.6 1.1.72 2.34.23 3.64l.6.6c.83.83.83 2.18 0 3l-4.4 4.41c-.83.83-2.18.83-3 0l-.6-.6c-1.31.49-2.54.38-3.65-.23-1.2-.67-2.16-1.88-2.93-3.27-1.54-2.8-2.51-6.72-3.03-10.05-.05-.27.04-.55.24-.75l.62-.62 5.9 5.91.13.1c-.43.92-.27 2.05.5 2.81.97.97 2.55.97 3.52 0s.97-2.55 0-3.53c-.76-.76-1.89-.92-2.8-.5l-.1-.11-5.92-5.91.62-.62.08-.07q.3-.23.67-.17" />
    </IconBase>
  ))
);

PenNibAngledFill.displayName = 'PenNibAngledFill';

// Triple export pattern
export { PenNibAngledFill, PenNibAngledFill as PenNibAngledFillIcon, PenNibAngledFill as SiPenNibAngledFill };
export default PenNibAngledFill;
export type { PenNibAngledFillProps };
