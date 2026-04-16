import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfinityBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const InfinityBoldDuotone = memo(
  forwardRef<SVGSVGElement, InfinityBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.2 8.45a5.3 5.3 0 0 1 7.27 0 4.9 4.9 0 0 1 0 7.1 5.3 5.3 0 0 1-7.28 0L11.3 12.7l1.4-1.42 2.89 2.82a3.3 3.3 0 0 0 4.5 0 2.9 2.9 0 0 0 0-4.22 3.3 3.3 0 0 0-4.5 0l-.34.32a1 1 0 0 1-1.4-1.42l.34-.33z" opacity={.4} />
        <path d="M2.53 8.45a5.3 5.3 0 0 1 7.08-.18l.2.18 2.9 2.84-1.41 1.42L8.41 9.9a3.3 3.3 0 0 0-4.5 0 2.9 2.9 0 0 0 0 4.22 3.3 3.3 0 0 0 4.5 0l.34-.32a1 1 0 0 1 1.4 1.42l-.34.33v.01a5.3 5.3 0 0 1-7.28 0 4.9 4.9 0 0 1 0-7.1" />
    </IconBase>
  ))
);

InfinityBoldDuotone.displayName = 'InfinityBoldDuotone';

// Triple export pattern (lucide-react style)
export { InfinityBoldDuotone, InfinityBoldDuotone as InfinityBoldDuotoneIcon, InfinityBoldDuotone as SiInfinityBoldDuotone };
export default InfinityBoldDuotone;
export type { InfinityBoldDuotoneProps };
