import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfinityRegularProps = Omit<IconBaseProps, 'children'>;

const InfinityRegular = memo(
  forwardRef<SVGSVGElement, InfinityRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.37 8.63c1.91-1.84 5.01-1.84 6.93 0 1.93 1.86 1.93 4.88 0 6.74-1.92 1.84-5.02 1.84-6.93 0L8.58 9.7l-.12-.11c-1.35-1.17-3.43-1.13-4.73.11-1.32 1.27-1.32 3.31 0 4.58 1.34 1.28 3.52 1.28 4.85 0l.33-.33c.3-.29.77-.28 1.06.02s.29.77 0 1.06l-.34.32c-1.92 1.85-5.02 1.85-6.94 0s-1.93-4.87 0-6.73c1.86-1.78 4.82-1.84 6.75-.17l.18.17 5.78 5.66c1.33 1.28 3.51 1.28 4.85 0 1.32-1.27 1.32-3.31 0-4.58-1.34-1.28-3.52-1.28-4.85 0l-.33.33c-.3.29-.77.28-1.06-.02s-.29-.77 0-1.06z" />
    </IconBase>
  ))
);

InfinityRegular.displayName = 'InfinityRegular';

// Triple export pattern
export { InfinityRegular, InfinityRegular as InfinityRegularIcon, InfinityRegular as SiInfinityRegular };
export default InfinityRegular;
export type { InfinityRegularProps };
