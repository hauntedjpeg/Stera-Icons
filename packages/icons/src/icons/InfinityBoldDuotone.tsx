import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfinityBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const InfinityBoldDuotone = memo(
  forwardRef<SVGSVGElement, InfinityBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.2 8.45c2-1.93 5.26-1.93 7.27 0 2.04 1.96 2.04 5.14 0 7.1-2.01 1.93-5.26 1.93-7.28 0L11.3 12.7l1.4-1.42 2.89 2.82c1.24 1.19 3.26 1.19 4.5 0 1.21-1.17 1.21-3.05 0-4.22-1.24-1.19-3.26-1.19-4.5 0l-.34.32c-.4.39-1.03.38-1.41-.01-.39-.4-.38-1.03.01-1.41l.34-.33z" opacity={.4} />
        <path d="M2.53 8.45c1.95-1.87 5.06-1.93 7.08-.18l.2.18 2.9 2.84-1.41 1.42L8.41 9.9c-1.24-1.19-3.26-1.18-4.5 0-1.21 1.17-1.21 3.05 0 4.22 1.24 1.19 3.26 1.19 4.5 0l.34-.32c.4-.39 1.03-.38 1.41.01.39.4.38 1.03-.01 1.41l-.34.33v.01c-2.02 1.93-5.27 1.93-7.28 0-2.04-1.96-2.04-5.14 0-7.1" />
    </IconBase>
  ))
);

InfinityBoldDuotone.displayName = 'InfinityBoldDuotone';

// Triple export pattern
export { InfinityBoldDuotone, InfinityBoldDuotone as InfinityBoldDuotoneIcon, InfinityBoldDuotone as SiInfinityBoldDuotone };
export default InfinityBoldDuotone;
export type { InfinityBoldDuotoneProps };
