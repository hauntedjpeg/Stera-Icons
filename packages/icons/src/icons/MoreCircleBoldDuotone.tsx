import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, MoreCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M9 12c0 .83-.67 1.5-1.5 1.5S6 12.83 6 12s.67-1.5 1.5-1.5S9 11.17 9 12M13.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M18 12c0 .83-.67 1.5-1.5 1.5S15 12.83 15 12s.67-1.5 1.5-1.5 1.5.67 1.5 1.5" />
    </IconBase>
  ))
);

MoreCircleBoldDuotone.displayName = 'MoreCircleBoldDuotone';

// Triple export pattern
export { MoreCircleBoldDuotone, MoreCircleBoldDuotone as MoreCircleBoldDuotoneIcon, MoreCircleBoldDuotone as SiMoreCircleBoldDuotone };
export default MoreCircleBoldDuotone;
export type { MoreCircleBoldDuotoneProps };
