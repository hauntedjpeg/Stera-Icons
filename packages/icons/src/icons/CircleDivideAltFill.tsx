import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideAltFillProps = Omit<IconBaseProps, 'children'>;

const CircleDivideAltFill = memo(
  forwardRef<SVGSVGElement, CircleDivideAltFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.95 13c-.5 5.05-4.77 9-9.95 9-5.19 0-9.45-3.95-9.95-9zM12 2c5.19 0 9.45 3.95 9.95 9H2.05c.5-5.05 4.76-9 9.95-9" />
    </IconBase>
  ))
);

CircleDivideAltFill.displayName = 'CircleDivideAltFill';

// Triple export pattern
export { CircleDivideAltFill, CircleDivideAltFill as CircleDivideAltFillIcon, CircleDivideAltFill as SiCircleDivideAltFill };
export default CircleDivideAltFill;
export type { CircleDivideAltFillProps };
