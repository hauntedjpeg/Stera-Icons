import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleVFillProps = Omit<IconBaseProps, 'children'>;

const MoreCircleVFill = memo(
  forwardRef<SVGSVGElement, MoreCircleVFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M21.88 12c0 5.45-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13s9.88 4.42 9.88 9.87M13.5 7.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5S11.17 9 12 9s1.5-.67 1.5-1.5m0 4.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5m0 4.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleVFill.displayName = 'MoreCircleVFill';

// Triple export pattern
export { MoreCircleVFill, MoreCircleVFill as MoreCircleVFillIcon, MoreCircleVFill as SiMoreCircleVFill };
export default MoreCircleVFill;
export type { MoreCircleVFillProps };
