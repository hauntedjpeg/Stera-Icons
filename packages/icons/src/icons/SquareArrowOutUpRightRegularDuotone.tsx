import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareArrowOutUpRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquareArrowOutUpRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, SquareArrowOutUpRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10 2.75c.4 0 .75.33.75.75 0 .41-.33.75-.74.75-1.87.02-2.76.12-3.44.46-.8.41-1.45 1.06-1.86 1.86-.2.41-.33.92-.4 1.7-.06.8-.06 1.82-.06 3.23v1c0 1.41 0 2.43.07 3.22.06.8.18 1.3.4 1.71.4.8 1.05 1.45 1.85 1.86.41.2.92.33 1.7.4.8.06 1.82.06 3.23.06h1c1.41 0 2.43 0 3.22-.06.79-.07 1.3-.2 1.71-.4.8-.41 1.45-1.06 1.86-1.86.34-.68.44-1.57.46-3.44 0-.41.34-.74.75-.74.42 0 .75.34.75.76-.02 1.81-.1 3.06-.63 4.1-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-1c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.5-.34-.67-.49-1.4-.56-2.27s-.07-1.96-.07-3.35v-1c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51 1.04-.53 2.29-.6 4.1-.63" opacity={.4} />
        <path d="M20.5 2.75c.41 0 .75.34.75.75V10c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.31l-7.22 7.22c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l7.22-7.22H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

SquareArrowOutUpRightRegularDuotone.displayName = 'SquareArrowOutUpRightRegularDuotone';

// Triple export pattern
export { SquareArrowOutUpRightRegularDuotone, SquareArrowOutUpRightRegularDuotone as SquareArrowOutUpRightRegularDuotoneIcon, SquareArrowOutUpRightRegularDuotone as SiSquareArrowOutUpRightRegularDuotone };
export default SquareArrowOutUpRightRegularDuotone;
export type { SquareArrowOutUpRightRegularDuotoneProps };
