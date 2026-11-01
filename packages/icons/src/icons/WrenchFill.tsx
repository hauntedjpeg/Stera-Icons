import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WrenchFillProps = Omit<IconBaseProps, 'children'>;

const WrenchFill = memo(
  forwardRef<SVGSVGElement, WrenchFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.81 4.5c1.73-1.72 4.16-2.33 6.38-1.83.81.19.95 1.15.44 1.66l-2.92 2.93.58 2.45 2.45.58 2.93-2.92c.47-.48 1.35-.39 1.61.3l.05.14.08.42c.34 2.1-.3 4.34-1.92 5.96-1.87 1.87-4.56 2.43-6.91 1.68l-4.71 4.7c-1.23 1.24-3.22 1.24-4.45 0-1.23-1.22-1.23-3.21 0-4.44l4.7-4.7c-.74-2.37-.18-5.05 1.7-6.92" />
    </IconBase>
  ))
);

WrenchFill.displayName = 'WrenchFill';

// Triple export pattern
export { WrenchFill, WrenchFill as WrenchFillIcon, WrenchFill as SiWrenchFill };
export default WrenchFill;
export type { WrenchFillProps };
