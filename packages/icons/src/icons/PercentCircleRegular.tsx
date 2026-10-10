import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentCircleRegularProps = Omit<IconBaseProps, 'children'>;

const PercentCircleRegular = memo(
  forwardRef<SVGSVGElement, PercentCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.97 7.97c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-7 7c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06zM14.75 13.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M9.25 7.75c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

PercentCircleRegular.displayName = 'PercentCircleRegular';

// Triple export pattern
export { PercentCircleRegular, PercentCircleRegular as PercentCircleRegularIcon, PercentCircleRegular as SiPercentCircleRegular };
export default PercentCircleRegular;
export type { PercentCircleRegularProps };
