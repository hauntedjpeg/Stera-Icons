import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleNotchFillProps = Omit<IconBaseProps, 'children'>;

const CircleNotchFill = memo(
  forwardRef<SVGSVGElement, CircleNotchFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-notch-fill" {...props}>
      <path d="M17.48 4.75a1.25 1.25 0 0 1 1.77 0 10.25 10.25 0 1 1-14.5 0 1.25 1.25 0 0 1 1.77 1.77 7.75 7.75 0 1 0 10.96 0 1.25 1.25 0 0 1 0-1.77" />
    </IconBase>
  ))
);

CircleNotchFill.displayName = 'CircleNotchFill';

// Triple export pattern (lucide-react style)
export { CircleNotchFill, CircleNotchFill as CircleNotchFillIcon, CircleNotchFill as SiCircleNotchFill };
export default CircleNotchFill;
export type { CircleNotchFillProps };
