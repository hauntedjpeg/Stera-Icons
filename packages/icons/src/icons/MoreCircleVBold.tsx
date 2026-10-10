import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleVBoldProps = Omit<IconBaseProps, 'children'>;

const MoreCircleVBold = memo(
  forwardRef<SVGSVGElement, MoreCircleVBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 15c.83 0 1.5.67 1.5 1.5S12.83 18 12 18s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 6c.83 0 1.5.67 1.5 1.5S12.83 9 12 9s-1.5-.67-1.5-1.5S11.17 6 12 6" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleVBold.displayName = 'MoreCircleVBold';

// Triple export pattern
export { MoreCircleVBold, MoreCircleVBold as MoreCircleVBoldIcon, MoreCircleVBold as SiMoreCircleVBold };
export default MoreCircleVBold;
export type { MoreCircleVBoldProps };
