import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDotRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDotRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleDotRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 9.75c1.24 0 2.25 1 2.25 2.25 0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25 0-1.24 1-2.25 2.25-2.25" />
    </IconBase>
  ))
);

CircleDotRegularDuotone.displayName = 'CircleDotRegularDuotone';

// Triple export pattern
export { CircleDotRegularDuotone, CircleDotRegularDuotone as CircleDotRegularDuotoneIcon, CircleDotRegularDuotone as SiCircleDotRegularDuotone };
export default CircleDotRegularDuotone;
export type { CircleDotRegularDuotoneProps };
