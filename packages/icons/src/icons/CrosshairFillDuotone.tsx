import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CrosshairFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CrosshairFillDuotone = memo(
  forwardRef<SVGSVGElement, CrosshairFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.13 12.88v6.94c-3.65-.4-6.55-3.3-6.96-6.94zM19.83 12.88c-.4 3.64-3.3 6.54-6.95 6.94v-6.94zM12.88 4.17c3.64.4 6.54 3.3 6.95 6.96h-6.95zM11.13 11.13H4.17c.4-3.66 3.3-6.55 6.96-6.96z" opacity={0.4} />
        <path d="M12 1.13c.48 0 .88.39.88.87v9.13H22c.48 0 .88.39.88.87s-.4.88-.88.88h-9.12V22c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-9.12H2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h9.13V2c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

CrosshairFillDuotone.displayName = 'CrosshairFillDuotone';

// Triple export pattern
export { CrosshairFillDuotone, CrosshairFillDuotone as CrosshairFillDuotoneIcon, CrosshairFillDuotone as SiCrosshairFillDuotone };
export default CrosshairFillDuotone;
export type { CrosshairFillDuotoneProps };
