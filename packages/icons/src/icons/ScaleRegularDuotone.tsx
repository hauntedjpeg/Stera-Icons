import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScaleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScaleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScaleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.7 14.62c.12.32.02.67-.25.87A5.8 5.8 0 0 1 5 16.75c-1.2 0-2.35-.45-3.45-1.26a.75.75 0 0 1-.25-.87L3.9 7.75H5.8l.28-.01zm-5.79-.02q1.1.66 2.09.65 1 .01 2.09-.65L5 9.1zM17.92 7.74l.29.01h1.88l2.61 6.87c.12.32.02.67-.25.87A5.8 5.8 0 0 1 19 16.75c-1.2 0-2.35-.45-3.45-1.26a.75.75 0 0 1-.25-.87zm-1 6.86q1.08.66 2.08.65 1 .01 2.09-.65L19 9.1z" opacity={0.4} />
        <path d="M12 2.25c.41 0 .75.34.75.75v1.57q.45.07.87.22l3.47 1.26q.54.2 1.12.2H21a.75.75 0 0 1 0 1.5h-2.8q-.83 0-1.62-.29L13.11 6.2l-.36-.1v14.15H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25V6.1l-.36.1-3.47 1.26q-.79.3-1.63.29H3a.75.75 0 0 1 0-1.5h2.8q.56 0 1.1-.2l3.48-1.26q.42-.15.87-.22V3c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ScaleRegularDuotone.displayName = 'ScaleRegularDuotone';

// Triple export pattern (lucide-react style)
export { ScaleRegularDuotone, ScaleRegularDuotone as ScaleRegularDuotoneIcon, ScaleRegularDuotone as SiScaleRegularDuotone };
export default ScaleRegularDuotone;
export type { ScaleRegularDuotoneProps };
