import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LeafFillProps = Omit<IconBaseProps, 'children'>;

const LeafFill = memo(
  forwardRef<SVGSVGElement, LeafFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.78 17.07a8 8 0 0 0 1.26 1.24q-.28.34-.58.82c-.48.72-.92 1.5-1.13 2.15a.88.88 0 0 1-1.66-.56c.29-.85.83-1.8 1.33-2.56q.4-.61.78-1.09" />
        <path d="M20.88 3c0 4.04-.38 6.88-1.2 9.13a15 15 0 0 1-3.75 5.55 7.5 7.5 0 0 1-9.9.63l.53-.64 4.14-4.14a.88.88 0 0 0-1.23-1.23l-4.15 4.14q-.22.22-.54.63a7.5 7.5 0 0 1 .54-10 14 14 0 0 1 4.91-3.5c2.22-.91 5.21-1.44 9.77-1.44h.88z" />
    </IconBase>
  ))
);

LeafFill.displayName = 'LeafFill';

// Triple export pattern (lucide-react style)
export { LeafFill, LeafFill as LeafFillIcon, LeafFill as SiLeafFill };
export default LeafFill;
export type { LeafFillProps };
