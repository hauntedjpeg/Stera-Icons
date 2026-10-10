import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DotBoldProps = Omit<IconBaseProps, 'children'>;

const DotBold = memo(
  forwardRef<SVGSVGElement, DotBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

DotBold.displayName = 'DotBold';

// Triple export pattern
export { DotBold, DotBold as DotBoldIcon, DotBold as SiDotBold };
export default DotBold;
export type { DotBoldProps };
