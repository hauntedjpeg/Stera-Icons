import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleCheckerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleCheckerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 20.25c-4.56 0-8.25-3.7-8.25-8.25H12zM12 3.75c4.56 0 8.25 3.7 8.25 8.25H12z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleCheckerRegularDuotone.displayName = 'CircleCheckerRegularDuotone';

// Triple export pattern
export { CircleCheckerRegularDuotone, CircleCheckerRegularDuotone as CircleCheckerRegularDuotoneIcon, CircleCheckerRegularDuotone as SiCircleCheckerRegularDuotone };
export default CircleCheckerRegularDuotone;
export type { CircleCheckerRegularDuotoneProps };
