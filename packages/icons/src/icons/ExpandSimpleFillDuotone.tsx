import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, ExpandSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.88 13.88c.34-.34.9-.34 1.24 0s.34.9 0 1.24L7.24 18 6 16.76zM18 7.24l-2.88 2.88c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24L16.76 6z" opacity={0.4} />
        <path d="M2.67 14.2c.32-.14.7-.07.95.18l6 6c.25.25.32.63.19.96-.14.32-.46.54-.81.54H3c-.48 0-.87-.4-.87-.88v-6c0-.35.2-.67.54-.8M21 2.13c.48 0 .88.39.88.87v6c0 .35-.22.67-.54.8-.33.14-.7.07-.96-.18l-6-6c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.81-.54z" />
    </IconBase>
  ))
);

ExpandSimpleFillDuotone.displayName = 'ExpandSimpleFillDuotone';

// Triple export pattern
export { ExpandSimpleFillDuotone, ExpandSimpleFillDuotone as ExpandSimpleFillDuotoneIcon, ExpandSimpleFillDuotone as SiExpandSimpleFillDuotone };
export default ExpandSimpleFillDuotone;
export type { ExpandSimpleFillDuotoneProps };
