import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleBoldProps = Omit<IconBaseProps, 'children'>;

const MoreCircleBold = memo(
  forwardRef<SVGSVGElement, MoreCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S6 12.83 6 12s.67-1.5 1.5-1.5M12 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M16.5 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S15 12.83 15 12s.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleBold.displayName = 'MoreCircleBold';

// Triple export pattern
export { MoreCircleBold, MoreCircleBold as MoreCircleBoldIcon, MoreCircleBold as SiMoreCircleBold };
export default MoreCircleBold;
export type { MoreCircleBoldProps };
