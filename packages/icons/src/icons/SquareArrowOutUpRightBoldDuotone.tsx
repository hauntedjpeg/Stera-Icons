import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareArrowOutUpRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquareArrowOutUpRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, SquareArrowOutUpRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 2c.55 0 1 .45 1 1s-.45 1-1 1C5.8 4 4 5.8 4 8v5c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62.38.75 1 1.36 1.74 1.74.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h5c2.2 0 4-1.8 4-4 0-.55.45-1 1-1s1 .45 1 1c0 3.31-2.69 6-6 6h-5q-2.05.02-3.37-.07c-.9-.07-1.65-.23-2.35-.58-1.13-.58-2.05-1.5-2.63-2.63-.35-.7-.5-1.46-.58-2.35Q1.98 15.05 2 13V8c0-3.31 2.69-6 6-6" opacity={.4} />
        <path d="M21 2q.1 0 .17.02l.12.02.14.06.12.07q.18.11.29.28l.1.22.02.04.01.06q.03.1.03.23v8.5c0 .55-.45 1-1 1s-1-.45-1-1V5.41l-7.3 7.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42L18.58 4H12.5c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

SquareArrowOutUpRightBoldDuotone.displayName = 'SquareArrowOutUpRightBoldDuotone';

// Triple export pattern
export { SquareArrowOutUpRightBoldDuotone, SquareArrowOutUpRightBoldDuotone as SquareArrowOutUpRightBoldDuotoneIcon, SquareArrowOutUpRightBoldDuotone as SiSquareArrowOutUpRightBoldDuotone };
export default SquareArrowOutUpRightBoldDuotone;
export type { SquareArrowOutUpRightBoldDuotoneProps };
