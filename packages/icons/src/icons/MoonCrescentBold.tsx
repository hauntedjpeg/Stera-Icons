import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonCrescentBoldProps = Omit<IconBaseProps, 'children'>;

const MoonCrescentBold = memo(
  forwardRef<SVGSVGElement, MoonCrescentBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.57 2.3c.37-.1.76.04 1 .33.25.3.3.7.15 1.06Q10.02 5.2 10 7c0 4.42 3.58 8 8 8q1 0 1.95-.24c.37-.1.76.04 1 .33.25.3.3.7.15 1.05C19.53 19.6 16.05 22 12 22 6.48 22 2 17.52 2 12c0-4.68 3.22-8.61 7.57-9.7M8.2 4.95C5.71 6.3 4 8.95 4 12c0 4.42 3.58 8 8 8 2.53 0 4.78-1.17 6.24-3H18C12.48 17 8 12.52 8 7q0-1.05.21-2.05" clipRule="evenodd" />
    </IconBase>
  ))
);

MoonCrescentBold.displayName = 'MoonCrescentBold';

// Triple export pattern
export { MoonCrescentBold, MoonCrescentBold as MoonCrescentBoldIcon, MoonCrescentBold as SiMoonCrescentBold };
export default MoonCrescentBold;
export type { MoonCrescentBoldProps };
