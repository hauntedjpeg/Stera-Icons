import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HashFillDuotone = memo(
  forwardRef<SVGSVGElement, HashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hash-fill-duotone" {...props}>
      <path d="M10.25 20.5a1.25 1.25 0 1 1-2.5 0v-4.25h2.5zM16.25 20.5a1.25 1.25 0 1 1-2.5 0v-4.25h2.5zM10.25 13.75h-2.5v-3.5h2.5zM16.25 13.75h-2.5v-3.5h2.5zM9 2.25c.69 0 1.25.56 1.25 1.25v4.25h-2.5V3.5c0-.69.56-1.25 1.25-1.25M15 2.25c.69 0 1.25.56 1.25 1.25v4.25h-2.5V3.5c0-.69.56-1.25 1.25-1.25" opacity={0.4} />
        <path d="M20.5 13.75a1.25 1.25 0 1 1 0 2.5h-17a1.25 1.25 0 1 1 0-2.5zM20.5 7.75a1.25 1.25 0 1 1 0 2.5h-17a1.25 1.25 0 0 1 0-2.5z" />
    </IconBase>
  ))
);

HashFillDuotone.displayName = 'HashFillDuotone';

// Triple export pattern (lucide-react style)
export { HashFillDuotone, HashFillDuotone as HashFillDuotoneIcon, HashFillDuotone as SiHashFillDuotone };
export default HashFillDuotone;
export type { HashFillDuotoneProps };
