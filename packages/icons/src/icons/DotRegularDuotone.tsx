import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DotRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DotRegularDuotone = memo(
  forwardRef<SVGSVGElement, DotRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="dot-duotone" {...props}>
      <path d="M12 7.25a4.75 4.75 0 1 1 0 9.5v-1.5a3.25 3.25 0 0 0 0-6.5z" opacity={.4} />
        <path d="M12 8.75a3.25 3.25 0 0 0 0 6.5v1.5a4.75 4.75 0 1 1 0-9.5z" />
    </IconBase>
  ))
);

DotRegularDuotone.displayName = 'DotRegularDuotone';

// Triple export pattern (lucide-react style)
export { DotRegularDuotone, DotRegularDuotone as DotRegularDuotoneIcon, DotRegularDuotone as SiDotRegularDuotone };
export default DotRegularDuotone;
export type { DotRegularDuotoneProps };
