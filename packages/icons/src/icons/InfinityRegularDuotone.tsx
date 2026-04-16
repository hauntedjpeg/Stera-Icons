import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfinityRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const InfinityRegularDuotone = memo(
  forwardRef<SVGSVGElement, InfinityRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.37 8.63a5.04 5.04 0 0 1 6.93 0 4.64 4.64 0 0 1 0 6.74 5.04 5.04 0 0 1-6.93 0l-2.9-2.83 1.05-1.08 2.89 2.83a3.54 3.54 0 0 0 4.85 0 3.14 3.14 0 0 0 0-4.58 3.54 3.54 0 0 0-4.85 0l-.33.33a.75.75 0 0 1-1.05-1.08z" opacity={.4} />
        <path d="M2.7 8.63a5.04 5.04 0 0 1 6.75-.17l.18.17 2.9 2.83-1.05 1.08L8.59 9.7l-.12-.11a3.54 3.54 0 0 0-4.73.11 3.14 3.14 0 0 0 0 4.58 3.54 3.54 0 0 0 4.85 0l.33-.33a.75.75 0 0 1 1.05 1.08l-.33.32a5.04 5.04 0 0 1-6.94 0 4.64 4.64 0 0 1 0-6.73" />
    </IconBase>
  ))
);

InfinityRegularDuotone.displayName = 'InfinityRegularDuotone';

// Triple export pattern (lucide-react style)
export { InfinityRegularDuotone, InfinityRegularDuotone as InfinityRegularDuotoneIcon, InfinityRegularDuotone as SiInfinityRegularDuotone };
export default InfinityRegularDuotone;
export type { InfinityRegularDuotoneProps };
