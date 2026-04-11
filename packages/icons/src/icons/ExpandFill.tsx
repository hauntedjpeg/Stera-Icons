import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandFillProps = Omit<IconBaseProps, 'children'>;

const ExpandFill = memo(
  forwardRef<SVGSVGElement, ExpandFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.38 14.38a.88.88 0 0 1 1.24 1.24L7.24 18l1.38 1.38a.88.88 0 0 1-.62 1.5H4a.9.9 0 0 1-.8-.52v-.02a1 1 0 0 1-.08-.34v-4a.88.88 0 0 1 1.5-.62L6 16.76zM14.38 14.38a.9.9 0 0 1 1.24 0L18 16.76l1.38-1.38a.88.88 0 0 1 1.5.62v4q0 .17-.07.34l-.01.02a1 1 0 0 1-.44.44h-.02a1 1 0 0 1-.34.07h-4a.88.88 0 0 1-.62-1.49L16.76 18l-2.38-2.38a.9.9 0 0 1 0-1.24M8 3.13a.88.88 0 0 1 .62 1.49L7.24 6l2.38 2.38a.88.88 0 0 1-1.24 1.24L6 7.24 4.62 8.62A.88.88 0 0 1 3.12 8V4q0-.17.07-.34l.01-.02a1 1 0 0 1 .44-.44h.02A1 1 0 0 1 4 3.11zM20 3.13l.17.01h.02l.14.05.03.01a.9.9 0 0 1 .52.8v4a.88.88 0 0 1-1.5.62L18 7.24l-2.38 2.38a.88.88 0 0 1-1.24-1.24L16.76 6l-1.38-1.38a.88.88 0 0 1 .62-1.5z" />
    </IconBase>
  ))
);

ExpandFill.displayName = 'ExpandFill';

// Triple export pattern (lucide-react style)
export { ExpandFill, ExpandFill as ExpandFillIcon, ExpandFill as SiExpandFill };
export default ExpandFill;
export type { ExpandFillProps };
