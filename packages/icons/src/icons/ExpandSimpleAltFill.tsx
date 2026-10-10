import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandSimpleAltFillProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleAltFill = memo(
  forwardRef<SVGSVGElement, ExpandSimpleAltFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.88 13.88c.34-.34.9-.34 1.24 0L18 16.76l2.38-2.38c.25-.25.63-.32.96-.19.32.14.54.46.54.81v6c0 .48-.4.88-.88.88h-6c-.35 0-.67-.22-.8-.54-.14-.33-.07-.7.18-.96L16.76 18l-2.88-2.88c-.34-.34-.34-.9 0-1.24M9 2.13c.35 0 .67.2.8.54.14.32.07.7-.18.95L7.24 6l2.88 2.88c.34.34.34.9 0 1.24s-.9.34-1.24 0L6 7.24 3.62 9.62c-.25.25-.63.32-.95.19-.33-.14-.54-.46-.54-.81V3c0-.48.39-.87.87-.87z" />
    </IconBase>
  ))
);

ExpandSimpleAltFill.displayName = 'ExpandSimpleAltFill';

// Triple export pattern
export { ExpandSimpleAltFill, ExpandSimpleAltFill as ExpandSimpleAltFillIcon, ExpandSimpleAltFill as SiExpandSimpleAltFill };
export default ExpandSimpleAltFill;
export type { ExpandSimpleAltFillProps };
