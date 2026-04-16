import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfinityBoldProps = Omit<IconBaseProps, 'children'>;

const InfinityBold = memo(
  forwardRef<SVGSVGElement, InfinityBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.2 8.45a5.3 5.3 0 0 1 7.27 0 4.9 4.9 0 0 1 0 7.1 5.3 5.3 0 0 1-7.28 0L8.4 9.88a3.3 3.3 0 0 0-4.5 0 2.9 2.9 0 0 0 0 4.22 3.3 3.3 0 0 0 4.5 0l.34-.32a1 1 0 0 1 1.4 1.42l-.34.33v.01a5.3 5.3 0 0 1-7.28 0 4.9 4.9 0 0 1 0-7.1 5.3 5.3 0 0 1 7.08-.18l.2.18 5.78 5.66a3.3 3.3 0 0 0 4.5 0 2.9 2.9 0 0 0 0-4.22 3.3 3.3 0 0 0-4.5 0l-.34.32a1 1 0 0 1-1.4-1.42l.34-.33z" />
    </IconBase>
  ))
);

InfinityBold.displayName = 'InfinityBold';

// Triple export pattern (lucide-react style)
export { InfinityBold, InfinityBold as InfinityBoldIcon, InfinityBold as SiInfinityBold };
export default InfinityBold;
export type { InfinityBoldProps };
