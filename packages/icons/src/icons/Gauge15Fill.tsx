import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge15FillProps = Omit<IconBaseProps, 'children'>;

const Gauge15Fill = memo(
  forwardRef<SVGSVGElement, Gauge15FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.88 2.6c2.34.2 4.47 1.12 6.16 2.56l-2 2c-.34.35-.34.9 0 1.24.34.35.9.35 1.24 0l2-2c1.44 1.69 2.37 3.82 2.56 6.17H20c-.48 0-.87.39-.87.87s.39.88.87.88h2.84c-.21 2.65-1.38 5.04-3.15 6.82q-.26.25-.62.25H4.93q-.36-.01-.62-.25c-1.97-1.97-3.18-4.7-3.18-7.7 0-2.68.97-5.14 2.6-7.04l2 2c.34.35.9.35 1.24 0s.34-.89 0-1.23L4.96 5.16c1.69-1.44 3.82-2.37 6.17-2.55v2.83c0 .48.39.88.87.88s.87-.4.88-.88zm-.95 8.97c-.5.04-2.29.3-3.9.54l-2.2.32-.7.11-.2.03H4.9l-.02.01c-.43.07-.75.43-.75.87 0 .43.32.8.75.86h.02l.05.01.2.03.7.1c.58.1 1.37.21 2.19.33 1.61.24 3.4.5 3.9.54H12c1.04 0 1.87-.84 1.88-1.87s-.84-1.88-1.88-1.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

Gauge15Fill.displayName = 'Gauge15Fill';

// Triple export pattern
export { Gauge15Fill, Gauge15Fill as Gauge15FillIcon, Gauge15Fill as SiGauge15Fill };
export default Gauge15Fill;
export type { Gauge15FillProps };
