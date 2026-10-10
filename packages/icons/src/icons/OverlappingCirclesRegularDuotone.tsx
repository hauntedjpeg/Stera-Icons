import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OverlappingCirclesRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const OverlappingCirclesRegularDuotone = memo(
  forwardRef<SVGSVGElement, OverlappingCirclesRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.5 4.75c4 0 7.25 3.25 7.25 7.25s-3.25 7.25-7.25 7.25S8.25 16 8.25 12s3.25-7.25 7.25-7.25m0 1.5c-3.18 0-5.75 2.57-5.75 5.75s2.57 5.75 5.75 5.75 5.75-2.57 5.75-5.75-2.57-5.75-5.75-5.75" clipRule="evenodd" opacity={.4} />
        <path d="M8.5 4.75c1.27 0 2.46.33 3.5.9q-.75.42-1.4 1-.98-.4-2.1-.4c-3.18 0-5.75 2.57-5.75 5.75s2.57 5.75 5.75 5.75q1.12 0 2.1-.4.65.57 1.4 1c-1.04.57-2.23.9-3.5.9-4 0-7.25-3.25-7.25-7.25S4.5 4.75 8.5 4.75M13.4 6.65c1.44 1.33 2.35 3.23 2.35 5.35s-.91 4.02-2.36 5.35q-.75-.3-1.39-.79c1.37-1.05 2.25-2.7 2.25-4.56S13.37 8.5 12 7.44q.63-.5 1.4-.79" />
    </IconBase>
  ))
);

OverlappingCirclesRegularDuotone.displayName = 'OverlappingCirclesRegularDuotone';

// Triple export pattern
export { OverlappingCirclesRegularDuotone, OverlappingCirclesRegularDuotone as OverlappingCirclesRegularDuotoneIcon, OverlappingCirclesRegularDuotone as SiOverlappingCirclesRegularDuotone };
export default OverlappingCirclesRegularDuotone;
export type { OverlappingCirclesRegularDuotoneProps };
