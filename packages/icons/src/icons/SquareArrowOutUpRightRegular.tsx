import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareArrowOutUpRightRegularProps = Omit<IconBaseProps, 'children'>;

const SquareArrowOutUpRightRegular = memo(
  forwardRef<SVGSVGElement, SquareArrowOutUpRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10 2.75a.75.75 0 0 1 0 1.5c-1.86.02-2.75.12-3.43.46-.8.41-1.45 1.06-1.86 1.86-.2.41-.33.92-.4 1.7-.06.8-.06 1.82-.06 3.23v1c0 1.41 0 2.43.07 3.22.06.8.18 1.3.4 1.71.4.8 1.05 1.45 1.85 1.86.41.2.92.33 1.7.4.8.06 1.82.06 3.23.06h1c1.41 0 2.43 0 3.22-.06.79-.07 1.3-.2 1.71-.4.8-.41 1.45-1.06 1.86-1.86.34-.68.44-1.57.46-3.44a.75.75 0 1 1 1.5.02c-.02 1.81-.1 3.06-.63 4.1a5.8 5.8 0 0 1-2.51 2.51c-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-1c-1.39 0-2.47 0-3.34-.07a6 6 0 0 1-2.27-.56 5.8 5.8 0 0 1-2.51-2.5 6 6 0 0 1-.56-2.27c-.07-.88-.07-1.96-.07-3.35v-1c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27a5.8 5.8 0 0 1 2.51-2.51c1.04-.53 2.29-.6 4.1-.63" />
        <path d="M20.5 2.75c.41 0 .75.34.75.75V10a.75.75 0 0 1-1.5 0V5.31l-7.22 7.22a.75.75 0 1 1-1.06-1.06l7.22-7.22H14a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

SquareArrowOutUpRightRegular.displayName = 'SquareArrowOutUpRightRegular';

// Triple export pattern (lucide-react style)
export { SquareArrowOutUpRightRegular, SquareArrowOutUpRightRegular as SquareArrowOutUpRightRegularIcon, SquareArrowOutUpRightRegular as SiSquareArrowOutUpRightRegular };
export default SquareArrowOutUpRightRegular;
export type { SquareArrowOutUpRightRegularProps };
