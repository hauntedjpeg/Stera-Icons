import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclesThreeRegularProps = Omit<IconBaseProps, 'children'>;

const CirclesThreeRegular = memo(
  forwardRef<SVGSVGElement, CirclesThreeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.5 11.78c2.35 0 4.25 1.9 4.25 4.25 0 2.34-1.9 4.25-4.25 4.25s-4.25-1.9-4.25-4.25 1.9-4.25 4.25-4.25m0 1.5c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75M6.5 11.78c2.35 0 4.25 1.9 4.25 4.25 0 2.34-1.9 4.25-4.25 4.25s-4.25-1.9-4.25-4.25 1.9-4.25 4.25-4.25m0 1.5c-1.52 0-2.75 1.23-2.75 2.75 0 1.51 1.23 2.75 2.75 2.75s2.75-1.24 2.75-2.75c0-1.52-1.23-2.75-2.75-2.75M12 2.25c2.35 0 4.25 1.9 4.25 4.25s-1.9 4.25-4.25 4.25-4.25-1.9-4.25-4.25S9.65 2.25 12 2.25m0 1.5c-1.52 0-2.75 1.23-2.75 2.75S10.48 9.25 12 9.25s2.75-1.23 2.75-2.75S13.52 3.75 12 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

CirclesThreeRegular.displayName = 'CirclesThreeRegular';

// Triple export pattern
export { CirclesThreeRegular, CirclesThreeRegular as CirclesThreeRegularIcon, CirclesThreeRegular as SiCirclesThreeRegular };
export default CirclesThreeRegular;
export type { CirclesThreeRegularProps };
