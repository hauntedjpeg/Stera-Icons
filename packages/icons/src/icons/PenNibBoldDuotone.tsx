import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PenNibBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PenNibBoldDuotone = memo(
  forwardRef<SVGSVGElement, PenNibBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 9.65c1.45.43 2.5 1.76 2.5 3.35 0 1.93-1.57 3.5-3.5 3.5S8.5 14.93 8.5 13c0-1.59 1.05-2.92 2.5-3.35V4h2zm-1 1.85c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M13.75 2c.32 0 .62.15.8.41 2 2.73 4.1 6.22 5 9.31.44 1.54.63 3.1.23 4.47-.35 1.22-1.15 2.19-2.4 2.78v.78c0 1.24-1.01 2.25-2.25 2.25H8.87c-1.24 0-2.25-1-2.25-2.25v-.78c-1.25-.6-2.05-1.56-2.4-2.78-.4-1.36-.22-2.93.23-4.47.9-3.1 3-6.58 5-9.3.18-.27.48-.42.8-.42zm-2.99 2c-1.84 2.59-3.63 5.66-4.39 8.28q-.6 2.09-.23 3.35c.22.76.72 1.37 1.8 1.72.4.14.68.52.68.95v1.45c0 .14.12.25.25.25h6.26c.13 0 .25-.11.25-.25V18.3c0-.43.27-.81.68-.95 1.08-.35 1.58-.96 1.8-1.72q.37-1.26-.23-3.35c-.76-2.62-2.55-5.7-4.4-8.28z" clipRule="evenodd" />
    </IconBase>
  ))
);

PenNibBoldDuotone.displayName = 'PenNibBoldDuotone';

// Triple export pattern
export { PenNibBoldDuotone, PenNibBoldDuotone as PenNibBoldDuotoneIcon, PenNibBoldDuotone as SiPenNibBoldDuotone };
export default PenNibBoldDuotone;
export type { PenNibBoldDuotoneProps };
