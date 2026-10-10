import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DotRegularProps = Omit<IconBaseProps, 'children'>;

const DotRegular = memo(
  forwardRef<SVGSVGElement, DotRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 7.25c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75S7.25 14.62 7.25 12 9.38 7.25 12 7.25m0 1.5c-1.8 0-3.25 1.46-3.25 3.25 0 1.8 1.46 3.25 3.25 3.25 1.8 0 3.25-1.46 3.25-3.25 0-1.8-1.46-3.25-3.25-3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

DotRegular.displayName = 'DotRegular';

// Triple export pattern
export { DotRegular, DotRegular as DotRegularIcon, DotRegular as SiDotRegular };
export default DotRegular;
export type { DotRegularProps };
