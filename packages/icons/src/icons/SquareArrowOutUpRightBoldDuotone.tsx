import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareArrowOutUpRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquareArrowOutUpRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, SquareArrowOutUpRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10 2.5a1 1 0 0 1 0 2c-1.86.02-2.7.12-3.32.44a4 4 0 0 0-1.74 1.74c-.2.37-.31.85-.38 1.62-.06.78-.06 1.78-.06 3.2v1c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62a4 4 0 0 0 1.74 1.74c.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h1c1.42 0 2.42 0 3.2-.06a4 4 0 0 0 1.62-.38 4 4 0 0 0 1.74-1.74c.32-.62.42-1.46.44-3.33a1 1 0 0 1 2 .02c-.02 1.8-.1 3.11-.65 4.21a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-1q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35q-.09-1.32-.07-3.37v-1q-.02-2.06.07-3.36c.07-.9.23-1.66.58-2.36a6 6 0 0 1 2.63-2.63c1.1-.56 2.4-.63 4.21-.65" opacity={.4} />
        <path d="M20.5 2.5a1 1 0 0 1 1 1V10a1 1 0 1 1-2 0V5.91l-6.8 6.8a1 1 0 0 1-1.4-1.42l6.79-6.79H14a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

SquareArrowOutUpRightBoldDuotone.displayName = 'SquareArrowOutUpRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { SquareArrowOutUpRightBoldDuotone, SquareArrowOutUpRightBoldDuotone as SquareArrowOutUpRightBoldDuotoneIcon, SquareArrowOutUpRightBoldDuotone as SiSquareArrowOutUpRightBoldDuotone };
export default SquareArrowOutUpRightBoldDuotone;
export type { SquareArrowOutUpRightBoldDuotoneProps };
