import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DotBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DotBoldDuotone = memo(
  forwardRef<SVGSVGElement, DotBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7a5 5 0 0 1 0 10v-2a3 3 0 1 0 0-6z" opacity={.4} />
        <path d="M12 9a3 3 0 1 0 0 6v2a5 5 0 0 1 0-10z" />
    </IconBase>
  ))
);

DotBoldDuotone.displayName = 'DotBoldDuotone';

// Triple export pattern (lucide-react style)
export { DotBoldDuotone, DotBoldDuotone as DotBoldDuotoneIcon, DotBoldDuotone as SiDotBoldDuotone };
export default DotBoldDuotone;
export type { DotBoldDuotoneProps };
