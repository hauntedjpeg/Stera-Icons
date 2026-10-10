import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExpandFillDuotone = memo(
  forwardRef<SVGSVGElement, ExpandFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.38 14.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24L7.24 18 6 16.76zM14.38 14.38c.34-.34.9-.34 1.24 0L18 16.76 16.76 18l-2.38-2.38c-.34-.34-.34-.9 0-1.24M9.62 8.38c.34.34.34.9 0 1.24s-.9.34-1.24 0L6 7.24 7.24 6zM18 7.24l-2.38 2.38c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24L16.76 6z" opacity={0.4} />
        <path d="M3.67 15.2c.32-.14.7-.07.95.18l4 4c.25.25.32.63.19.96-.14.32-.46.54-.81.54H4c-.48 0-.87-.4-.87-.88v-4c0-.35.2-.67.54-.8M19.38 15.38c.25-.25.63-.32.96-.19.32.14.54.46.54.81v4c0 .48-.4.88-.88.88h-4c-.35 0-.67-.22-.8-.54-.14-.33-.07-.7.18-.96zM8 3.13c.35 0 .67.2.8.54.14.32.07.7-.18.95l-4 4c-.25.25-.63.32-.95.19-.33-.14-.54-.46-.54-.81V4c0-.48.39-.87.87-.87zM20 3.13c.48 0 .88.39.88.87v4c0 .35-.22.67-.54.8-.33.14-.7.07-.96-.18l-4-4c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.81-.54z" />
    </IconBase>
  ))
);

ExpandFillDuotone.displayName = 'ExpandFillDuotone';

// Triple export pattern
export { ExpandFillDuotone, ExpandFillDuotone as ExpandFillDuotoneIcon, ExpandFillDuotone as SiExpandFillDuotone };
export default ExpandFillDuotone;
export type { ExpandFillDuotoneProps };
