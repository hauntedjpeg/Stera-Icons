import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineGlassFillProps = Omit<IconBaseProps, 'children'>;

const WineGlassFill = memo(
  forwardRef<SVGSVGElement, WineGlassFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="wine-glass-fill" {...props}>
      <path d="M17.5 2.13c.41 0 .76.28.85.68l.01.03.08.4.18 1.1c.13.94.25 2.23.25 3.66 0 3.11-2.73 5.46-6 5.83V18c0 1.17.96 2.13 2.13 2.13h1.09a.87.87 0 0 1-.09 1.75H8a.88.88 0 0 1 0-1.75h1c1.17 0 2.13-.96 2.13-2.13v-4.17c-3.27-.37-6-2.72-6-5.83a27 27 0 0 1 .52-5.19c.08-.4.44-.68.85-.68z" />
    </IconBase>
  ))
);

WineGlassFill.displayName = 'WineGlassFill';

// Triple export pattern (lucide-react style)
export { WineGlassFill, WineGlassFill as WineGlassFillIcon, WineGlassFill as SiWineGlassFill };
export default WineGlassFill;
export type { WineGlassFillProps };
