import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DotRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DotRegularDuotone = memo(
  forwardRef<SVGSVGElement, DotRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7.25c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75v-1.5c1.8 0 3.25-1.46 3.25-3.25 0-1.8-1.46-3.25-3.25-3.25z" opacity={.4} />
        <path d="M12 8.75c-1.8 0-3.25 1.46-3.25 3.25 0 1.8 1.46 3.25 3.25 3.25v1.5c-2.62 0-4.75-2.13-4.75-4.75S9.38 7.25 12 7.25z" />
    </IconBase>
  ))
);

DotRegularDuotone.displayName = 'DotRegularDuotone';

// Triple export pattern
export { DotRegularDuotone, DotRegularDuotone as DotRegularDuotoneIcon, DotRegularDuotone as SiDotRegularDuotone };
export default DotRegularDuotone;
export type { DotRegularDuotoneProps };
