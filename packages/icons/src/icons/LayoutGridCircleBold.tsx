import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutGridCircleBoldProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCircleBold = memo(
  forwardRef<SVGSVGElement, LayoutGridCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.88 12.75c2.41 0 4.37 1.96 4.37 4.38S9.29 21.5 6.88 21.5 2.5 19.54 2.5 17.13s1.96-4.38 4.38-4.38m0 2c-1.32 0-2.38 1.06-2.38 2.38 0 1.3 1.06 2.37 2.38 2.37 1.3 0 2.37-1.06 2.37-2.37 0-1.32-1.06-2.38-2.37-2.38M17.13 12.75c2.41 0 4.37 1.96 4.37 4.38s-1.96 4.37-4.37 4.37-4.38-1.96-4.38-4.37 1.96-4.38 4.38-4.38m0 2c-1.32 0-2.38 1.06-2.38 2.38 0 1.3 1.06 2.37 2.38 2.37 1.3 0 2.37-1.06 2.37-2.37 0-1.32-1.06-2.38-2.37-2.38M6.88 2.5c2.41 0 4.37 1.96 4.37 4.38s-1.96 4.37-4.37 4.37S2.5 9.29 2.5 6.88 4.46 2.5 6.88 2.5m0 2C5.56 4.5 4.5 5.56 4.5 6.88c0 1.3 1.06 2.37 2.38 2.37 1.3 0 2.37-1.06 2.37-2.37 0-1.32-1.06-2.38-2.37-2.38M17.13 2.5c2.41 0 4.37 1.96 4.37 4.38s-1.96 4.37-4.37 4.37-4.38-1.96-4.38-4.37 1.96-4.38 4.38-4.38m0 2c-1.32 0-2.38 1.06-2.38 2.38 0 1.3 1.06 2.37 2.38 2.37 1.3 0 2.37-1.06 2.37-2.37 0-1.32-1.06-2.38-2.37-2.38" clipRule="evenodd" />
    </IconBase>
  ))
);

LayoutGridCircleBold.displayName = 'LayoutGridCircleBold';

// Triple export pattern
export { LayoutGridCircleBold, LayoutGridCircleBold as LayoutGridCircleBoldIcon, LayoutGridCircleBold as SiLayoutGridCircleBold };
export default LayoutGridCircleBold;
export type { LayoutGridCircleBoldProps };
