import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CollapseFillDuotone = memo(
  forwardRef<SVGSVGElement, CollapseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m7 18.24-2.38 2.38a.88.88 0 0 1-1.24-1.24L5.76 17zM20.62 19.38a.88.88 0 0 1-1.24 1.24L17 18.24 18.24 17zM3.38 3.38a.9.9 0 0 1 1.24 0L7 5.76 5.76 7 3.38 4.62a.9.9 0 0 1 0-1.24M19.38 3.38a.88.88 0 0 1 1.24 1.24L18.24 7 17 5.76z" opacity={0.4} />
        <path d="M9 14.12c.48 0 .87.4.87.88v4a.88.88 0 0 1-1.49.62l-4-4a.88.88 0 0 1 .62-1.5zM19 14.12a.88.88 0 0 1 .62 1.5l-4 4a.88.88 0 0 1-1.5-.62v-4c0-.48.4-.88.88-.88zM8.38 4.38a.88.88 0 0 1 1.5.62v4c0 .48-.4.87-.88.87H5a.88.88 0 0 1-.62-1.49zM14.66 4.2c.33-.14.7-.07.96.18l4 4a.88.88 0 0 1-.62 1.5h-4a.9.9 0 0 1-.88-.88V5c0-.35.22-.67.54-.8" />
    </IconBase>
  ))
);

CollapseFillDuotone.displayName = 'CollapseFillDuotone';

// Triple export pattern (lucide-react style)
export { CollapseFillDuotone, CollapseFillDuotone as CollapseFillDuotoneIcon, CollapseFillDuotone as SiCollapseFillDuotone };
export default CollapseFillDuotone;
export type { CollapseFillDuotoneProps };
