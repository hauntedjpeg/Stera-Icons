import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PercentCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, PercentCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M14.97 7.97c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-7 7c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06zM14.75 13.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M9.25 7.75c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

PercentCircleRegularDuotone.displayName = 'PercentCircleRegularDuotone';

// Triple export pattern
export { PercentCircleRegularDuotone, PercentCircleRegularDuotone as PercentCircleRegularDuotoneIcon, PercentCircleRegularDuotone as SiPercentCircleRegularDuotone };
export default PercentCircleRegularDuotone;
export type { PercentCircleRegularDuotoneProps };
