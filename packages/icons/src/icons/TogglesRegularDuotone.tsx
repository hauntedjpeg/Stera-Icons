import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TogglesRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TogglesRegularDuotone = memo(
  forwardRef<SVGSVGElement, TogglesRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 12.75c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75H8c-2.62 0-4.75-2.13-4.75-4.75S5.38 12.75 8 12.75zm-2 3c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75h2c.97 0 1.75-.78 1.75-1.75s-.78-1.75-1.75-1.75zM16 1.75c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75H8c-2.62 0-4.75-2.13-4.75-4.75S5.38 1.75 8 1.75zm-8 1.5c-1.8 0-3.25 1.46-3.25 3.25 0 1.8 1.46 3.25 3.25 3.25h8c1.8 0 3.25-1.46 3.25-3.25 0-1.8-1.46-3.25-3.25-3.25z" opacity={0.4} />
        <path d="M16 15.75c.97 0 1.75.78 1.75 1.75s-.78 1.75-1.75 1.75h-2c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75zM10 4.75c.97 0 1.75.78 1.75 1.75S10.97 8.25 10 8.25H8c-.97 0-1.75-.78-1.75-1.75S7.03 4.75 8 4.75z" />
    </IconBase>
  ))
);

TogglesRegularDuotone.displayName = 'TogglesRegularDuotone';

// Triple export pattern
export { TogglesRegularDuotone, TogglesRegularDuotone as TogglesRegularDuotoneIcon, TogglesRegularDuotone as SiTogglesRegularDuotone };
export default TogglesRegularDuotone;
export type { TogglesRegularDuotoneProps };
