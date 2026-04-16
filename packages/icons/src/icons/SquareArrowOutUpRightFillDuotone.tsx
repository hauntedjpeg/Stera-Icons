import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareArrowOutUpRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquareArrowOutUpRightFillDuotone = memo(
  forwardRef<SVGSVGElement, SquareArrowOutUpRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10 2.63a.88.88 0 0 1 0 1.75c-1.86.02-2.73.12-3.37.45-.78.4-1.41 1.02-1.8 1.8-.2.39-.33.88-.39 1.66-.06.79-.07 1.8-.07 3.21v1c0 1.42 0 2.42.07 3.21.06.78.19 1.27.38 1.66.4.78 1.03 1.41 1.8 1.8.4.2.89.33 1.67.4.79.06 1.8.06 3.21.06h1c1.41 0 2.42 0 3.21-.07a4 4 0 0 0 1.66-.38c.78-.4 1.41-1.03 1.8-1.8.34-.65.43-1.52.45-3.39a.88.88 0 0 1 1.75.02c-.02 1.8-.09 3.09-.64 4.16-.56 1.1-1.46 2-2.56 2.57q-1 .49-2.31.56c-.88.08-1.97.08-3.36.08h-1c-1.39 0-2.48 0-3.36-.08a6 6 0 0 1-2.3-.56c-1.11-.57-2.01-1.47-2.57-2.57a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36v-1c0-1.38 0-2.48.08-3.35.07-.9.22-1.64.57-2.32.56-1.1 1.46-2 2.56-2.56 1.07-.55 2.35-.62 4.16-.64" opacity={.4} />
        <path d="M20.5 2.63c.48 0 .87.39.87.87V10a.88.88 0 0 1-1.49.62l-2.63-2.63-4.63 4.63a.88.88 0 0 1-1.24-1.24l4.63-4.63-2.63-2.63a.88.88 0 0 1 .62-1.5z" />
    </IconBase>
  ))
);

SquareArrowOutUpRightFillDuotone.displayName = 'SquareArrowOutUpRightFillDuotone';

// Triple export pattern (lucide-react style)
export { SquareArrowOutUpRightFillDuotone, SquareArrowOutUpRightFillDuotone as SquareArrowOutUpRightFillDuotoneIcon, SquareArrowOutUpRightFillDuotone as SiSquareArrowOutUpRightFillDuotone };
export default SquareArrowOutUpRightFillDuotone;
export type { SquareArrowOutUpRightFillDuotoneProps };
