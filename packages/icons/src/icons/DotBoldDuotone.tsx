import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DotBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DotBoldDuotone = memo(
  forwardRef<SVGSVGElement, DotBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5v-2c1.66 0 3-1.34 3-3s-1.34-3-3-3z" opacity={.4} />
        <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3v2c-2.76 0-5-2.24-5-5s2.24-5 5-5z" />
    </IconBase>
  ))
);

DotBoldDuotone.displayName = 'DotBoldDuotone';

// Triple export pattern
export { DotBoldDuotone, DotBoldDuotone as DotBoldDuotoneIcon, DotBoldDuotone as SiDotBoldDuotone };
export default DotBoldDuotone;
export type { DotBoldDuotoneProps };
