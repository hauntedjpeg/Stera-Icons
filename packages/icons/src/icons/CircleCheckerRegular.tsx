import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleCheckerRegularProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerRegular = memo(
  forwardRef<SVGSVGElement, CircleCheckerRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25H12v8.25c4.56 0 8.25-3.7 8.25-8.25H12z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleCheckerRegular.displayName = 'CircleCheckerRegular';

// Triple export pattern
export { CircleCheckerRegular, CircleCheckerRegular as CircleCheckerRegularIcon, CircleCheckerRegular as SiCircleCheckerRegular };
export default CircleCheckerRegular;
export type { CircleCheckerRegularProps };
