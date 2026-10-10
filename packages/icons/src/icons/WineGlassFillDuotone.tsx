import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineGlassFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WineGlassFillDuotone = memo(
  forwardRef<SVGSVGElement, WineGlassFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.5 2.13c.41 0 .76.28.85.68l.01.03.02.09.06.3.18 1.11c.13.94.25 2.23.25 3.66 0 3.39-3.23 5.88-6.87 5.88S5.13 11.38 5.13 8c0-1.43.12-2.72.25-3.66l.18-1.1.06-.31.02-.09v-.03c.1-.4.45-.68.86-.68z" />
        <path d="M12.88 18c0 1.17.95 2.13 2.12 2.13h1.09c.44.04.79.42.79.87 0 .48-.4.88-.88.88H8c-.48 0-.87-.4-.87-.88 0-.45.34-.83.78-.87H9c1.17 0 2.13-.96 2.13-2.13v-4.17q.43.04.87.04.45 0 .88-.04z" opacity={.4} />
    </IconBase>
  ))
);

WineGlassFillDuotone.displayName = 'WineGlassFillDuotone';

// Triple export pattern
export { WineGlassFillDuotone, WineGlassFillDuotone as WineGlassFillDuotoneIcon, WineGlassFillDuotone as SiWineGlassFillDuotone };
export default WineGlassFillDuotone;
export type { WineGlassFillDuotoneProps };
