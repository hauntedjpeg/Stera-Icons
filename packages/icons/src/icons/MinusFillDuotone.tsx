import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MinusFillDuotone = memo(
  forwardRef<SVGSVGElement, MinusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-9v-2.5z" opacity={.4} />
        <path d="M12 13.25H3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h9z" />
    </IconBase>
  ))
);

MinusFillDuotone.displayName = 'MinusFillDuotone';

// Triple export pattern
export { MinusFillDuotone, MinusFillDuotone as MinusFillDuotoneIcon, MinusFillDuotone as SiMinusFillDuotone };
export default MinusFillDuotone;
export type { MinusFillDuotoneProps };
