import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CliFillDuotone = memo(
  forwardRef<SVGSVGElement, CliFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cli-fill-duotone" {...props}>
      <path d="M20 17.25a1.25 1.25 0 1 1 0 2.5h-9a1.25 1.25 0 1 1 0-2.5z" opacity={.4} />
        <path d="M3.12 4.62a1.25 1.25 0 0 1 1.76 0l6 6c.5.48.5 1.28 0 1.76l-6 6a1.25 1.25 0 0 1-1.76-1.76l5.11-5.12-5.11-5.12a1.25 1.25 0 0 1 0-1.76" />
    </IconBase>
  ))
);

CliFillDuotone.displayName = 'CliFillDuotone';

// Triple export pattern (lucide-react style)
export { CliFillDuotone, CliFillDuotone as CliFillDuotoneIcon, CliFillDuotone as SiCliFillDuotone };
export default CliFillDuotone;
export type { CliFillDuotoneProps };
