import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineGlassFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WineGlassFillDuotone = memo(
  forwardRef<SVGSVGElement, WineGlassFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.5 2.13c.41 0 .76.28.85.68l.01.03.08.4.18 1.1c.13.94.25 2.23.25 3.66 0 3.39-3.23 5.88-6.87 5.88S5.13 11.38 5.13 8a27 27 0 0 1 .52-5.19c.08-.4.44-.68.85-.68z" />
        <path d="M12.88 18c0 1.17.95 2.13 2.12 2.13h1.09a.87.87 0 0 1-.09 1.75H8a.88.88 0 0 1 0-1.75h1c1.17 0 2.13-.96 2.13-2.13v-4.17a8 8 0 0 0 1.74 0z" opacity={.4} />
    </IconBase>
  ))
);

WineGlassFillDuotone.displayName = 'WineGlassFillDuotone';

// Triple export pattern (lucide-react style)
export { WineGlassFillDuotone, WineGlassFillDuotone as WineGlassFillDuotoneIcon, WineGlassFillDuotone as SiWineGlassFillDuotone };
export default WineGlassFillDuotone;
export type { WineGlassFillDuotoneProps };
