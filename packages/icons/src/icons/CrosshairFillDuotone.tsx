import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CrosshairFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CrosshairFillDuotone = memo(
  forwardRef<SVGSVGElement, CrosshairFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="crosshair-fill-duotone" {...props}>
      <path d="M11.13 12.88v6.94a7.9 7.9 0 0 1-6.96-6.94zM19.83 12.88a7.9 7.9 0 0 1-6.95 6.94v-6.94zM12.88 4.17c3.64.4 6.54 3.3 6.95 6.96h-6.95zM11.13 11.13H4.17a7.9 7.9 0 0 1 6.96-6.96z" opacity={0.4} />
        <path d="M12 1.13c.48 0 .88.39.88.87v9.13H22a.88.88 0 0 1 0 1.74h-9.12V22a.88.88 0 0 1-1.76 0v-9.12H2a.88.88 0 0 1 0-1.76h9.13V2c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

CrosshairFillDuotone.displayName = 'CrosshairFillDuotone';

// Triple export pattern (lucide-react style)
export { CrosshairFillDuotone, CrosshairFillDuotone as CrosshairFillDuotoneIcon, CrosshairFillDuotone as SiCrosshairFillDuotone };
export default CrosshairFillDuotone;
export type { CrosshairFillDuotoneProps };
