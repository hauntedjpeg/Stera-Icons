import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusFillProps = Omit<IconBaseProps, 'children'>;

const MinusFill = memo(
  forwardRef<SVGSVGElement, MinusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 10.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

MinusFill.displayName = 'MinusFill';

// Triple export pattern (lucide-react style)
export { MinusFill, MinusFill as MinusFillIcon, MinusFill as SiMinusFill };
export default MinusFill;
export type { MinusFillProps };
