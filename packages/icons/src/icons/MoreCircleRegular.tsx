import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleRegularProps = Omit<IconBaseProps, 'children'>;

const MoreCircleRegular = memo(
  forwardRef<SVGSVGElement, MoreCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S6 12.83 6 12s.67-1.5 1.5-1.5M12 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M16.5 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S15 12.83 15 12s.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleRegular.displayName = 'MoreCircleRegular';

// Triple export pattern
export { MoreCircleRegular, MoreCircleRegular as MoreCircleRegularIcon, MoreCircleRegular as SiMoreCircleRegular };
export default MoreCircleRegular;
export type { MoreCircleRegularProps };
