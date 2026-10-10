import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OverlappingCirclesRegularProps = Omit<IconBaseProps, 'children'>;

const OverlappingCirclesRegular = memo(
  forwardRef<SVGSVGElement, OverlappingCirclesRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.5 4.75c4 0 7.25 3.25 7.25 7.25s-3.25 7.25-7.25 7.25c-1.27 0-2.46-.33-3.5-.9-1.04.57-2.23.9-3.5.9-4 0-7.25-3.25-7.25-7.25S4.5 4.75 8.5 4.75c1.27 0 2.46.33 3.5.9 1.04-.57 2.23-.9 3.5-.9m-7 1.5c-3.18 0-5.75 2.57-5.75 5.75s2.57 5.75 5.75 5.75q1.12 0 2.1-.4C9.17 16.02 8.26 14.12 8.26 12s.9-4.02 2.36-5.35q-1-.4-2.11-.4m7 0q-1.12 0-2.1.4c1.44 1.33 2.35 3.23 2.35 5.35s-.91 4.02-2.36 5.35q.99.4 2.11.4c3.18 0 5.75-2.57 5.75-5.75s-2.57-5.75-5.75-5.75M12 7.44c-1.37 1.05-2.25 2.7-2.25 4.56s.88 3.5 2.25 4.56c1.37-1.05 2.25-2.7 2.25-4.56S13.37 8.5 12 7.44" clipRule="evenodd" />
    </IconBase>
  ))
);

OverlappingCirclesRegular.displayName = 'OverlappingCirclesRegular';

// Triple export pattern
export { OverlappingCirclesRegular, OverlappingCirclesRegular as OverlappingCirclesRegularIcon, OverlappingCirclesRegular as SiOverlappingCirclesRegular };
export default OverlappingCirclesRegular;
export type { OverlappingCirclesRegularProps };
