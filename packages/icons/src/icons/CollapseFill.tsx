import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseFillProps = Omit<IconBaseProps, 'children'>;

const CollapseFill = memo(
  forwardRef<SVGSVGElement, CollapseFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m9 14.12.17.02h.03l.05.02a1 1 0 0 1 .37.22q.26.28.25.64V19a.88.88 0 0 1-1.49.62L7 18.24l-2.38 2.38a.88.88 0 0 1-1.24-1.24L5.76 17l-1.38-1.38a.88.88 0 0 1 .62-1.5zM19 14.12a.88.88 0 0 1 .62 1.5L18.24 17l2.38 2.38a.88.88 0 0 1-1.24 1.24L17 18.24l-1.38 1.38a.88.88 0 0 1-1.5-.62v-4q0-.13.04-.25l.02-.05.01-.04a1 1 0 0 1 .4-.43l.02-.01.05-.03.04-.01.05-.02.05-.01h.03l.17-.03zM3.38 3.38a.9.9 0 0 1 1.24 0L7 5.76l1.38-1.38a.88.88 0 0 1 1.5.62v3.98a.9.9 0 0 1-.7.88l-.2.01H5a.88.88 0 0 1-.62-1.49L5.76 7 3.38 4.62a.9.9 0 0 1 0-1.24M19.38 3.38a.88.88 0 0 1 1.24 1.24L18.24 7l1.38 1.38a.88.88 0 0 1-.62 1.5h-3.98a.9.9 0 0 1-.9-.88V5a.88.88 0 0 1 1.5-.62L17 5.76z" />
    </IconBase>
  ))
);

CollapseFill.displayName = 'CollapseFill';

// Triple export pattern (lucide-react style)
export { CollapseFill, CollapseFill as CollapseFillIcon, CollapseFill as SiCollapseFill };
export default CollapseFill;
export type { CollapseFillProps };
