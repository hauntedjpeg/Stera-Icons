import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CollapseFillDuotone = memo(
  forwardRef<SVGSVGElement, CollapseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m7 18.24-2.38 2.38c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24L5.76 17zM20.62 19.38c.34.34.34.9 0 1.24s-.9.34-1.24 0L17 18.24 18.24 17zM3.38 3.38c.34-.34.9-.34 1.24 0L7 5.76 5.76 7 3.38 4.62c-.34-.34-.34-.9 0-1.24M19.38 3.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24L18.24 7 17 5.76z" opacity={0.4} />
        <path d="M9 14.12c.48 0 .87.4.87.88v4c0 .35-.2.67-.54.8-.32.14-.7.07-.95-.18l-4-4c-.25-.25-.32-.63-.19-.96.14-.32.46-.54.81-.54zM19 14.12c.35 0 .67.22.8.54.14.33.07.7-.18.96l-4 4c-.25.25-.63.32-.96.19-.32-.14-.54-.46-.54-.81v-4c0-.48.4-.88.88-.88zM8.38 4.38c.25-.25.63-.32.95-.19.33.14.54.46.54.81v4c0 .48-.39.87-.87.87H5c-.35 0-.67-.2-.8-.54-.14-.32-.07-.7.18-.95zM14.66 4.2c.33-.14.7-.07.96.18l4 4c.25.25.32.63.19.95-.14.33-.46.54-.81.54h-4c-.48 0-.88-.39-.88-.87V5c0-.35.22-.67.54-.8" />
    </IconBase>
  ))
);

CollapseFillDuotone.displayName = 'CollapseFillDuotone';

// Triple export pattern
export { CollapseFillDuotone, CollapseFillDuotone as CollapseFillDuotoneIcon, CollapseFillDuotone as SiCollapseFillDuotone };
export default CollapseFillDuotone;
export type { CollapseFillDuotoneProps };
