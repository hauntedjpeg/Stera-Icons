import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MatchaFillProps = Omit<IconBaseProps, 'children'>;

const MatchaFill = memo(
  forwardRef<SVGSVGElement, MatchaFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 3.13c2.54 0 4.87.28 6.6.76a8 8 0 0 1 2.17.9c.53.35 1.1.9 1.1 1.71q0 .12-.02.24l-.23 2.19q-.16 1.42-.7 2.65c1.15.89 1.95 2.04 1.95 3.42 0 1.9-1.5 3.37-3.4 4.32-1.96.98-4.6 1.55-7.47 1.55s-5.5-.57-7.46-1.55c-1.9-.95-3.41-2.43-3.41-4.32 0-1.37.8-2.53 1.95-3.42a9 9 0 0 1-.7-2.65l-.23-2.19-.02-.24c0-.8.57-1.36 1.1-1.7a8 8 0 0 1 2.17-.91c1.73-.48 4.06-.77 6.6-.77m8.04 10a8.9 8.9 0 0 1-7.24 3.74h-1.6a8.9 8.9 0 0 1-7.24-3.75c-.76.64-1.08 1.3-1.08 1.88 0 .87.72 1.9 2.44 2.75 1.66.84 4.02 1.38 6.68 1.38 2.65 0 5.02-.54 6.68-1.38 1.72-.86 2.45-1.88 2.45-2.75 0-.59-.33-1.24-1.09-1.88M12 4.86c-2.43 0-4.6.28-6.13.7q-1.15.34-1.68.69-.24.16-.29.24c.05.05.15.17.4.31q.6.35 1.74.66c1.52.4 3.62.66 5.96.66s4.44-.26 5.96-.66q1.16-.3 1.74-.66c.25-.14.35-.25.4-.31a1 1 0 0 0-.29-.24 6 6 0 0 0-1.68-.68c-1.53-.43-3.7-.7-6.13-.7" clipRule="evenodd" />
    </IconBase>
  ))
);

MatchaFill.displayName = 'MatchaFill';

// Triple export pattern (lucide-react style)
export { MatchaFill, MatchaFill as MatchaFillIcon, MatchaFill as SiMatchaFill };
export default MatchaFill;
export type { MatchaFillProps };
