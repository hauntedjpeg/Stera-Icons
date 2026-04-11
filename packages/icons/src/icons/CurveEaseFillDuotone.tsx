import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurveEaseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurveEaseFillDuotone = memo(
  forwardRef<SVGSVGElement, CurveEaseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.03 17a1 1 0 1 1 0 2H11a1 1 0 1 1 0-2zM14 17a1 1 0 0 1 0 2h-.03a1 1 0 1 1 0-2zM10.03 5a1 1 0 1 1 0 2H10a1 1 0 0 1 0-2zM13 5a1 1 0 1 1 0 2h-.03a1 1 0 1 1 0-2z" opacity={0.4} />
        <path d="M19 15.13a2.88 2.88 0 1 1 0 5.75 2.88 2.88 0 0 1 0-5.75" />
        <path fillRule="evenodd" d="M20 5.13a.88.88 0 0 1 0 1.75c-3.61 0-5.71 2.58-7.75 5.6-.99 1.46-1.98 3.05-3.08 4.24-1.12 1.21-2.5 2.16-4.28 2.16H4a.88.88 0 0 1 0-1.75h.9c1.1 0 2.03-.56 2.99-1.6.98-1.06 1.86-2.47 2.9-4.02C12.8 8.54 15.37 5.13 20 5.13M4.78 18.87h.01zm-.14-.03h.05l-.1-.02zm-.27-.14.03.03-.04-.04zm-.31-.42v.01zm.1-.77v.02zm.28-.26h-.01l.06-.03zm.14-.07h.01z" clipRule="evenodd" />
        <path d="M5 3.13a2.87 2.87 0 1 1 0 5.74 2.87 2.87 0 0 1 0-5.74" />
    </IconBase>
  ))
);

CurveEaseFillDuotone.displayName = 'CurveEaseFillDuotone';

// Triple export pattern (lucide-react style)
export { CurveEaseFillDuotone, CurveEaseFillDuotone as CurveEaseFillDuotoneIcon, CurveEaseFillDuotone as SiCurveEaseFillDuotone };
export default CurveEaseFillDuotone;
export type { CurveEaseFillDuotoneProps };
