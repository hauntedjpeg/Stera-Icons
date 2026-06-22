import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TogglesRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TogglesRegularDuotone = memo(
  forwardRef<SVGSVGElement, TogglesRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 12.75a4.75 4.75 0 0 1 0 9.5H8a4.75 4.75 0 1 1 0-9.5zm-2 3a1.75 1.75 0 1 0 0 3.5h2a1.75 1.75 0 1 0 0-3.5zM16 1.75a4.75 4.75 0 1 1 0 9.5H8a4.75 4.75 0 0 1 0-9.5zm-8 1.5a3.25 3.25 0 1 0 0 6.5h8a3.25 3.25 0 0 0 0-6.5z" opacity={0.4} />
        <path d="M16 15.75a1.75 1.75 0 1 1 0 3.5h-2a1.75 1.75 0 1 1 0-3.5zM10 4.75a1.75 1.75 0 1 1 0 3.5H8a1.75 1.75 0 1 1 0-3.5z" />
    </IconBase>
  ))
);

TogglesRegularDuotone.displayName = 'TogglesRegularDuotone';

// Triple export pattern (lucide-react style)
export { TogglesRegularDuotone, TogglesRegularDuotone as TogglesRegularDuotoneIcon, TogglesRegularDuotone as SiTogglesRegularDuotone };
export default TogglesRegularDuotone;
export type { TogglesRegularDuotoneProps };
