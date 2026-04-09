import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DotFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DotFillDuotone = memo(
  forwardRef<SVGSVGElement, DotFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="dot-fill-duotone" {...props}>
      <path d="M12 8.88a3.12 3.12 0 1 1 0 6.24 3.12 3.12 0 0 1 0-6.24" opacity={.4} />
        <path fillRule="evenodd" d="M12 7.13a4.87 4.87 0 1 1 0 9.74 4.87 4.87 0 0 1 0-9.75m0 1.75a3.12 3.12 0 1 0 0 6.24 3.12 3.12 0 0 0 0-6.24" clipRule="evenodd" />
    </IconBase>
  ))
);

DotFillDuotone.displayName = 'DotFillDuotone';

// Triple export pattern (lucide-react style)
export { DotFillDuotone, DotFillDuotone as DotFillDuotoneIcon, DotFillDuotone as SiDotFillDuotone };
export default DotFillDuotone;
export type { DotFillDuotoneProps };
