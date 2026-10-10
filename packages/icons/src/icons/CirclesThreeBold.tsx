import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclesThreeBoldProps = Omit<IconBaseProps, 'children'>;

const CirclesThreeBold = memo(
  forwardRef<SVGSVGElement, CirclesThreeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.5 11.53c2.49 0 4.5 2.01 4.5 4.5 0 2.48-2.01 4.5-4.5 4.5S2 18.5 2 16.03c0-2.49 2.01-4.5 4.5-4.5m0 2c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5S9 17.4 9 16.03s-1.12-2.5-2.5-2.5M17.5 11.53c2.49 0 4.5 2.01 4.5 4.5 0 2.48-2.01 4.5-4.5 4.5S13 18.5 13 16.03c0-2.49 2.01-4.5 4.5-4.5m0 2c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5M12 2c2.49 0 4.5 2.01 4.5 4.5S14.49 11 12 11 7.5 8.99 7.5 6.5 9.51 2 12 2m0 2c-1.38 0-2.5 1.12-2.5 2.5S10.62 9 12 9s2.5-1.12 2.5-2.5S13.38 4 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

CirclesThreeBold.displayName = 'CirclesThreeBold';

// Triple export pattern
export { CirclesThreeBold, CirclesThreeBold as CirclesThreeBoldIcon, CirclesThreeBold as SiCirclesThreeBold };
export default CirclesThreeBold;
export type { CirclesThreeBoldProps };
