import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WrenchFillProps = Omit<IconBaseProps, 'children'>;

const WrenchFill = memo(
  forwardRef<SVGSVGElement, WrenchFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.63 4.33c1.8-1.8 4.31-2.43 6.61-1.9 1.04.24 1.2 1.45.57 2.08l-2.83 2.83.52 2.16 2.16.52 2.83-2.83c.59-.59 1.7-.48 2.03.38l.05.19.09.43c.35 2.18-.3 4.5-1.99 6.18-1.9 1.9-4.61 2.5-7.02 1.78l-4.6 4.6c-1.33 1.33-3.48 1.33-4.8 0-1.33-1.32-1.33-3.47 0-4.8l4.6-4.6c-.71-2.4-.12-5.12 1.78-7.02" />
    </IconBase>
  ))
);

WrenchFill.displayName = 'WrenchFill';

// Triple export pattern
export { WrenchFill, WrenchFill as WrenchFillIcon, WrenchFill as SiWrenchFill };
export default WrenchFill;
export type { WrenchFillProps };
