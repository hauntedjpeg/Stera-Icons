import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LeafFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LeafFillDuotone = memo(
  forwardRef<SVGSVGElement, LeafFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.88 3c0 4.04-.38 6.88-1.2 9.13a15 15 0 0 1-3.75 5.55 7.5 7.5 0 0 1-9.9.63l.53-.64 4.14-4.14a.88.88 0 0 0-1.23-1.23l-4.15 4.14q-.22.22-.54.63a7.5 7.5 0 0 1 .54-10 14 14 0 0 1 4.91-3.5c2.22-.91 5.21-1.44 9.77-1.44h.88z" opacity={.4} />
        <path d="M9.47 12.3a.88.88 0 0 1 1.23 1.23l-4.14 4.14c-.18.18-.63.74-1.1 1.46-.48.71-.92 1.5-1.13 2.15a.87.87 0 0 1-1.66-.56c.29-.85.83-1.8 1.33-2.56.5-.75 1.02-1.42 1.32-1.72z" />
    </IconBase>
  ))
);

LeafFillDuotone.displayName = 'LeafFillDuotone';

// Triple export pattern (lucide-react style)
export { LeafFillDuotone, LeafFillDuotone as LeafFillDuotoneIcon, LeafFillDuotone as SiLeafFillDuotone };
export default LeafFillDuotone;
export type { LeafFillDuotoneProps };
