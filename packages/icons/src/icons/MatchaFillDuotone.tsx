import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MatchaFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MatchaFillDuotone = memo(
  forwardRef<SVGSVGElement, MatchaFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.92 11.58c1.15.89 1.95 2.05 1.95 3.42 0 1.9-1.5 3.37-3.4 4.32-1.96.98-4.6 1.55-7.47 1.55s-5.5-.57-7.46-1.55c-1.9-.95-3.41-2.43-3.41-4.32 0-1.37.8-2.53 1.95-3.42q.16.37.35.71.24.45.53.83c-.76.64-1.08 1.3-1.08 1.88 0 .87.72 1.9 2.44 2.75 1.66.84 4.03 1.38 6.68 1.38s5.02-.54 6.68-1.38c1.72-.86 2.45-1.88 2.45-2.75 0-.59-.33-1.24-1.09-1.88q.3-.4.53-.83z" opacity={.4} />
        <path fillRule="evenodd" d="M12 3.13c2.54 0 4.87.28 6.6.76.85.24 1.61.54 2.17.9.53.35 1.1.9 1.1 1.71q0 .12-.02.24l-.23 2.19c-.12 1.21-.5 2.35-1.05 3.36-1.52 2.75-4.45 4.59-7.77 4.59h-1.6c-3.32 0-6.25-1.84-7.77-4.59-.56-1-.93-2.15-1.05-3.36l-.23-2.19q-.03-.12-.02-.24c0-.8.57-1.36 1.1-1.7.56-.37 1.32-.67 2.17-.91 1.73-.48 4.06-.77 6.6-.77m0 1.75c-2.43 0-4.6.27-6.13.7q-1.15.33-1.68.68-.24.16-.29.24c.05.05.15.17.4.31q.6.35 1.74.66c1.52.4 3.62.66 5.96.66s4.44-.26 5.96-.66q1.16-.3 1.74-.66c.25-.14.35-.25.4-.31q-.05-.07-.29-.24-.52-.35-1.68-.68c-1.53-.43-3.7-.7-6.13-.7" clipRule="evenodd" />
    </IconBase>
  ))
);

MatchaFillDuotone.displayName = 'MatchaFillDuotone';

// Triple export pattern
export { MatchaFillDuotone, MatchaFillDuotone as MatchaFillDuotoneIcon, MatchaFillDuotone as SiMatchaFillDuotone };
export default MatchaFillDuotone;
export type { MatchaFillDuotoneProps };
