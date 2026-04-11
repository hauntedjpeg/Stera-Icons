import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MinusFillDuotone = memo(
  forwardRef<SVGSVGElement, MinusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 10.75a1.25 1.25 0 1 1 0 2.5h-9v-2.5z" opacity={.4} />
        <path d="M12 13.25H3a1.25 1.25 0 1 1 0-2.5h9z" />
    </IconBase>
  ))
);

MinusFillDuotone.displayName = 'MinusFillDuotone';

// Triple export pattern (lucide-react style)
export { MinusFillDuotone, MinusFillDuotone as MinusFillDuotoneIcon, MinusFillDuotone as SiMinusFillDuotone };
export default MinusFillDuotone;
export type { MinusFillDuotoneProps };
