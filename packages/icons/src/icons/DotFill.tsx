import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DotFillProps = Omit<IconBaseProps, 'children'>;

const DotFill = memo(
  forwardRef<SVGSVGElement, DotFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7.13c2.7 0 4.88 2.18 4.88 4.87 0 2.7-2.19 4.88-4.88 4.88-2.7 0-4.87-2.19-4.87-4.88 0-2.7 2.18-4.87 4.87-4.87" />
    </IconBase>
  ))
);

DotFill.displayName = 'DotFill';

// Triple export pattern
export { DotFill, DotFill as DotFillIcon, DotFill as SiDotFill };
export default DotFill;
export type { DotFillProps };
