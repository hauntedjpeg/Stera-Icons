import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurveEaseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurveEaseFillDuotone = memo(
  forwardRef<SVGSVGElement, CurveEaseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.03 17c.55 0 1 .45 1 1s-.45 1-1 1H11c-.55 0-1-.45-1-1s.45-1 1-1zM14 17c.55 0 1 .45 1 1s-.45 1-1 1h-.03c-.55 0-1-.45-1-1s.45-1 1-1zM10.03 5c.55 0 1 .45 1 1s-.45 1-1 1H10c-.55 0-1-.45-1-1s.45-1 1-1zM13 5c.55 0 1 .45 1 1s-.45 1-1 1h-.03c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M19 15.13c1.59 0 2.88 1.28 2.88 2.87s-1.3 2.88-2.88 2.88c-1.59 0-2.87-1.3-2.87-2.88 0-1.59 1.28-2.87 2.87-2.87" />
        <path fillRule="evenodd" d="M20 5.13c.48 0 .88.39.88.87s-.4.88-.88.88c-3.61 0-5.71 2.58-7.75 5.6-.99 1.46-1.98 3.05-3.08 4.24-1.12 1.21-2.5 2.16-4.28 2.16H4.8h.04H4c-.48 0-.87-.4-.87-.88s.38-.87.87-.87h.9c1.1 0 2.03-.56 2.99-1.6.98-1.06 1.86-2.47 2.9-4.02C12.8 8.54 15.37 5.13 20 5.13M4.78 18.87h.01-.02m-.14-.03h.05q-.05 0-.1-.02zm-.27-.14.03.03-.04-.04zm-.31-.42v.01zm.1-.77v.02zm.28-.26h-.01l.06-.03zm.14-.07h.01z" clipRule="evenodd" />
        <path d="M5 3.13C6.59 3.13 7.88 4.4 7.88 6S6.58 8.88 5 8.88c-1.59 0-2.87-1.3-2.87-2.88C2.13 4.41 3.4 3.13 5 3.13" />
    </IconBase>
  ))
);

CurveEaseFillDuotone.displayName = 'CurveEaseFillDuotone';

// Triple export pattern
export { CurveEaseFillDuotone, CurveEaseFillDuotone as CurveEaseFillDuotoneIcon, CurveEaseFillDuotone as SiCurveEaseFillDuotone };
export default CurveEaseFillDuotone;
export type { CurveEaseFillDuotoneProps };
