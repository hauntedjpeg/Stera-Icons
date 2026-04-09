import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleCheckerFillProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerFill = memo(
  forwardRef<SVGSVGElement, CircleCheckerFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-checker-fill" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75M12 12H3.88A8.13 8.13 0 0 0 12 20.13zh8.13A8.13 8.13 0 0 0 12 3.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleCheckerFill.displayName = 'CircleCheckerFill';

// Triple export pattern (lucide-react style)
export { CircleCheckerFill, CircleCheckerFill as CircleCheckerFillIcon, CircleCheckerFill as SiCircleCheckerFill };
export default CircleCheckerFill;
export type { CircleCheckerFillProps };
