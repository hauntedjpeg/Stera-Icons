import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfinityRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const InfinityRegularDuotone = memo(
  forwardRef<SVGSVGElement, InfinityRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.37 8.63c1.91-1.84 5.01-1.84 6.93 0 1.93 1.86 1.93 4.88 0 6.74-1.92 1.84-5.02 1.84-6.93 0l-2.9-2.83 1.05-1.08 2.89 2.83c1.33 1.28 3.51 1.28 4.85 0 1.32-1.27 1.32-3.31 0-4.58-1.34-1.28-3.52-1.28-4.85 0l-.33.33c-.3.29-.77.28-1.06-.02s-.29-.77 0-1.06z" opacity={.4} />
        <path d="M2.7 8.63c1.86-1.78 4.82-1.84 6.75-.17l.18.17 2.9 2.83-1.05 1.08L8.59 9.7l-.12-.11c-1.35-1.17-3.43-1.13-4.73.11-1.32 1.27-1.32 3.31 0 4.58 1.34 1.28 3.52 1.28 4.85 0l.33-.33c.3-.29.77-.28 1.06.02s.29.77 0 1.06l-.34.32c-1.92 1.85-5.02 1.85-6.94 0s-1.93-4.87 0-6.73" />
    </IconBase>
  ))
);

InfinityRegularDuotone.displayName = 'InfinityRegularDuotone';

// Triple export pattern
export { InfinityRegularDuotone, InfinityRegularDuotone as InfinityRegularDuotoneIcon, InfinityRegularDuotone as SiInfinityRegularDuotone };
export default InfinityRegularDuotone;
export type { InfinityRegularDuotoneProps };
