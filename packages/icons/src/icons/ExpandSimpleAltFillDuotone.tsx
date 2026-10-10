import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandSimpleAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleAltFillDuotone = memo(
  forwardRef<SVGSVGElement, ExpandSimpleAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.88 13.88c.34-.34.9-.34 1.24 0L18 16.76 16.76 18l-2.88-2.88c-.34-.34-.34-.9 0-1.24M10.12 8.88c.34.34.34.9 0 1.24s-.9.34-1.24 0L6 7.24 7.24 6z" opacity={0.4} />
        <path d="M20.38 14.38c.25-.25.63-.32.96-.19.32.14.54.46.54.81v6c0 .48-.4.88-.88.88h-6c-.35 0-.67-.22-.8-.54-.14-.33-.07-.7.18-.96zM9 2.13c.35 0 .67.2.8.54.14.32.07.7-.18.95l-6 6c-.25.25-.63.32-.95.19-.33-.14-.54-.46-.54-.81V3c0-.48.39-.87.87-.87z" />
    </IconBase>
  ))
);

ExpandSimpleAltFillDuotone.displayName = 'ExpandSimpleAltFillDuotone';

// Triple export pattern
export { ExpandSimpleAltFillDuotone, ExpandSimpleAltFillDuotone as ExpandSimpleAltFillDuotoneIcon, ExpandSimpleAltFillDuotone as SiExpandSimpleAltFillDuotone };
export default ExpandSimpleAltFillDuotone;
export type { ExpandSimpleAltFillDuotoneProps };
