import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleCheckerFillProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerFill = memo(
  forwardRef<SVGSVGElement, CircleCheckerFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13M12 12H3.88c0 4.49 3.63 8.13 8.12 8.13zh8.13c0-4.49-3.64-8.12-8.13-8.12z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleCheckerFill.displayName = 'CircleCheckerFill';

// Triple export pattern
export { CircleCheckerFill, CircleCheckerFill as CircleCheckerFillIcon, CircleCheckerFill as SiCircleCheckerFill };
export default CircleCheckerFill;
export type { CircleCheckerFillProps };
