import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonCrescentRegularProps = Omit<IconBaseProps, 'children'>;

const MoonCrescentRegular = memo(
  forwardRef<SVGSVGElement, MoonCrescentRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.63 2.54c.28-.07.57.03.76.25.18.22.22.53.1.8Q9.77 5.14 9.75 7c0 4.56 3.7 8.25 8.25 8.25q1.04 0 2-.25c.29-.07.58.03.77.25.18.22.22.53.1.8-1.53 3.36-4.93 5.7-8.87 5.7-5.38 0-9.75-4.37-9.75-9.75 0-4.57 3.14-8.4 7.38-9.46M8.58 4.5C5.73 5.8 3.75 8.67 3.75 12c0 4.56 3.7 8.25 8.25 8.25 2.8 0 5.27-1.4 6.76-3.53q-.37.03-.76.03c-5.38 0-9.75-4.37-9.75-9.75q0-1.3.33-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

MoonCrescentRegular.displayName = 'MoonCrescentRegular';

// Triple export pattern
export { MoonCrescentRegular, MoonCrescentRegular as MoonCrescentRegularIcon, MoonCrescentRegular as SiMoonCrescentRegular };
export default MoonCrescentRegular;
export type { MoonCrescentRegularProps };
