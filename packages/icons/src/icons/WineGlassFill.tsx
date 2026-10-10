import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineGlassFillProps = Omit<IconBaseProps, 'children'>;

const WineGlassFill = memo(
  forwardRef<SVGSVGElement, WineGlassFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.5 2.13c.41 0 .76.28.85.68l.01.03.02.09.06.3.18 1.11c.13.94.25 2.23.25 3.66 0 3.11-2.73 5.46-6 5.83V18c0 1.17.96 2.13 2.13 2.13h1.09c.44.04.79.42.79.87 0 .48-.4.88-.88.88H8c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h1c1.17 0 2.13-.96 2.13-2.13v-4.17c-3.27-.37-6-2.72-6-5.83 0-1.43.12-2.72.25-3.66l.18-1.1.06-.31.02-.09v-.03c.1-.4.45-.68.86-.68z" />
    </IconBase>
  ))
);

WineGlassFill.displayName = 'WineGlassFill';

// Triple export pattern
export { WineGlassFill, WineGlassFill as WineGlassFillIcon, WineGlassFill as SiWineGlassFill };
export default WineGlassFill;
export type { WineGlassFillProps };
