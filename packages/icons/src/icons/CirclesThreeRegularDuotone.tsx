import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclesThreeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CirclesThreeRegularDuotone = memo(
  forwardRef<SVGSVGElement, CirclesThreeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c2.35 0 4.25 1.9 4.25 4.25s-1.9 4.25-4.25 4.25-4.25-1.9-4.25-4.25S9.65 2.25 12 2.25m0 1.5c-1.52 0-2.75 1.23-2.75 2.75S10.48 9.25 12 9.25s2.75-1.23 2.75-2.75S13.52 3.75 12 3.75" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M6.5 11.78c2.35 0 4.25 1.9 4.25 4.25 0 2.34-1.9 4.25-4.25 4.25s-4.25-1.9-4.25-4.25 1.9-4.25 4.25-4.25m0 1.5c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75M17.5 11.78c2.35 0 4.25 1.9 4.25 4.25 0 2.34-1.9 4.25-4.25 4.25s-4.25-1.9-4.25-4.25 1.9-4.25 4.25-4.25m0 1.5c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75" clipRule="evenodd" />
    </IconBase>
  ))
);

CirclesThreeRegularDuotone.displayName = 'CirclesThreeRegularDuotone';

// Triple export pattern
export { CirclesThreeRegularDuotone, CirclesThreeRegularDuotone as CirclesThreeRegularDuotoneIcon, CirclesThreeRegularDuotone as SiCirclesThreeRegularDuotone };
export default CirclesThreeRegularDuotone;
export type { CirclesThreeRegularDuotoneProps };
