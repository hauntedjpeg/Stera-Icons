import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusFillProps = Omit<IconBaseProps, 'children'>;

const MinusFill = memo(
  forwardRef<SVGSVGElement, MinusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" />
    </IconBase>
  ))
);

MinusFill.displayName = 'MinusFill';

// Triple export pattern
export { MinusFill, MinusFill as MinusFillIcon, MinusFill as SiMinusFill };
export default MinusFill;
export type { MinusFillProps };
