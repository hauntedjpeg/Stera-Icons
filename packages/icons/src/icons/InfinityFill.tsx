import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfinityFillProps = Omit<IconBaseProps, 'children'>;

const InfinityFill = memo(
  forwardRef<SVGSVGElement, InfinityFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.02 8.27a5.54 5.54 0 0 1 7.63 0 5.14 5.14 0 0 1 0 7.46 5.54 5.54 0 0 1-7.63 0l-5.77-5.66a3.04 3.04 0 0 0-4.16 0 2.64 2.64 0 0 0 0 3.86 3.04 3.04 0 0 0 4.16 0l.32-.32a1.25 1.25 0 0 1 1.75 1.78l-.33.33-.01.01a5.54 5.54 0 0 1-7.63 0 5.14 5.14 0 0 1 0-7.46 5.54 5.54 0 0 1 7.63 0l5.77 5.66.23.19c1.15.9 2.86.84 3.93-.2a2.64 2.64 0 0 0 0-3.85 3.04 3.04 0 0 0-4.16 0l-.32.32a1.25 1.25 0 0 1-1.75-1.78z" />
    </IconBase>
  ))
);

InfinityFill.displayName = 'InfinityFill';

// Triple export pattern (lucide-react style)
export { InfinityFill, InfinityFill as InfinityFillIcon, InfinityFill as SiInfinityFill };
export default InfinityFill;
export type { InfinityFillProps };
