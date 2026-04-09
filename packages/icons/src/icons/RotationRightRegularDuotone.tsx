import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotationRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, RotationRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotation-right-duotone" {...props}>
      <path d="M16.93 6.97a.75.75 0 0 1 1.06.1 7.75 7.75 0 0 1-5.71 12.68H10.8l1.72 1.72a.75.75 0 0 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 1.06l-1.72 1.72H12a6.25 6.25 0 0 0 4.83-10.22.75.75 0 0 1 .1-1.06" opacity={.4} />
        <path d="M11.47 1.47c.3-.3.77-.3 1.06 0l3 3c.3.3.3.77 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06l1.72-1.72h-1.41a6.25 6.25 0 0 0-4.6 10.23.75.75 0 0 1-1.15.96A7.75 7.75 0 0 1 12 4.25h1.19l-1.72-1.72a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

RotationRightRegularDuotone.displayName = 'RotationRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { RotationRightRegularDuotone, RotationRightRegularDuotone as RotationRightRegularDuotoneIcon, RotationRightRegularDuotone as SiRotationRightRegularDuotone };
export default RotationRightRegularDuotone;
export type { RotationRightRegularDuotoneProps };
