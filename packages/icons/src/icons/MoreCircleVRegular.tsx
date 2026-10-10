import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleVRegularProps = Omit<IconBaseProps, 'children'>;

const MoreCircleVRegular = memo(
  forwardRef<SVGSVGElement, MoreCircleVRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 15c.83 0 1.5.67 1.5 1.5S12.83 18 12 18s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 6c.83 0 1.5.67 1.5 1.5S12.83 9 12 9s-1.5-.67-1.5-1.5S11.17 6 12 6" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleVRegular.displayName = 'MoreCircleVRegular';

// Triple export pattern
export { MoreCircleVRegular, MoreCircleVRegular as MoreCircleVRegularIcon, MoreCircleVRegular as SiMoreCircleVRegular };
export default MoreCircleVRegular;
export type { MoreCircleVRegularProps };
