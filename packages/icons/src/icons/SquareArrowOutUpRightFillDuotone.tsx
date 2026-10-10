import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareArrowOutUpRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquareArrowOutUpRightFillDuotone = memo(
  forwardRef<SVGSVGElement, SquareArrowOutUpRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10 2.63c.48 0 .87.38.88.87 0 .48-.39.88-.87.88-1.87.02-2.74.12-3.38.45-.78.4-1.41 1.02-1.8 1.8-.2.39-.33.88-.39 1.66-.06.79-.07 1.8-.07 3.21v1c0 1.42 0 2.42.07 3.21.06.78.19 1.27.38 1.66.4.78 1.03 1.41 1.8 1.8.4.2.89.33 1.67.4.79.06 1.8.06 3.21.06h1c1.41 0 2.42 0 3.21-.07.78-.06 1.27-.19 1.66-.38.78-.4 1.41-1.03 1.8-1.8.34-.65.43-1.52.45-3.39 0-.48.4-.87.88-.86.49 0 .88.4.87.88-.02 1.8-.09 3.09-.64 4.16-.56 1.1-1.46 2-2.56 2.57q-1 .49-2.31.56c-.88.08-1.97.08-3.36.08h-1c-1.39 0-2.48 0-3.36-.08s-1.63-.22-2.3-.56c-1.11-.57-2.01-1.47-2.57-2.57-.35-.68-.5-1.43-.57-2.31-.08-.88-.08-1.97-.08-3.36v-1c0-1.38 0-2.48.08-3.35.07-.9.22-1.64.57-2.32.56-1.1 1.46-2 2.56-2.56 1.07-.55 2.35-.62 4.16-.64" opacity={.4} />
        <path d="M20.5 2.63c.48 0 .87.39.87.87V10c0 .35-.2.67-.54.8-.32.14-.7.07-.95-.18l-2.63-2.63-4.63 4.63c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l4.63-4.63-2.63-2.63c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.81-.54z" />
    </IconBase>
  ))
);

SquareArrowOutUpRightFillDuotone.displayName = 'SquareArrowOutUpRightFillDuotone';

// Triple export pattern
export { SquareArrowOutUpRightFillDuotone, SquareArrowOutUpRightFillDuotone as SquareArrowOutUpRightFillDuotoneIcon, SquareArrowOutUpRightFillDuotone as SiSquareArrowOutUpRightFillDuotone };
export default SquareArrowOutUpRightFillDuotone;
export type { SquareArrowOutUpRightFillDuotoneProps };
