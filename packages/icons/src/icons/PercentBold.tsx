import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentBoldProps = Omit<IconBaseProps, 'children'>;

const PercentBold = memo(
  forwardRef<SVGSVGElement, PercentBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.3 3.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-16 16c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4z" />
        <path fillRule="evenodd" d="M17.5 14c1.93 0 3.5 1.57 3.5 3.5S19.43 21 17.5 21 14 19.43 14 17.5s1.57-3.5 3.5-3.5m0 2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5M6.5 3C8.43 3 10 4.57 10 6.5S8.43 10 6.5 10 3 8.43 3 6.5 4.57 3 6.5 3m0 2C5.67 5 5 5.67 5 6.5S5.67 8 6.5 8 8 7.33 8 6.5 7.33 5 6.5 5" clipRule="evenodd" />
    </IconBase>
  ))
);

PercentBold.displayName = 'PercentBold';

// Triple export pattern
export { PercentBold, PercentBold as PercentBoldIcon, PercentBold as SiPercentBold };
export default PercentBold;
export type { PercentBoldProps };
