import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge0FillProps = Omit<IconBaseProps, 'children'>;

const Gauge0Fill = memo(
  forwardRef<SVGSVGElement, Gauge0FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.88 2.6c2.34.2 4.47 1.12 6.16 2.56l-2 2c-.34.35-.34.9 0 1.24.34.35.9.35 1.24 0l2-2c1.44 1.69 2.37 3.82 2.56 6.17H20c-.48 0-.87.39-.87.87s.39.88.87.88h2.84c-.21 2.65-1.38 5.04-3.15 6.82q-.26.25-.62.25H4.93q-.36-.01-.62-.25c-1.77-1.78-2.94-4.17-3.15-6.82H4c.49 0 .88-.4.88-.88s-.4-.87-.88-.87H1.16c.2-2.35 1.12-4.48 2.56-6.17l2 2c.35.35.9.35 1.25 0s.34-.89 0-1.23L4.96 5.16c1.69-1.44 3.82-2.37 6.17-2.55v2.83c0 .48.39.88.87.88s.87-.4.88-.88zm.45 9.52c-.74-.73-1.92-.73-2.66 0l-.04.05c-.33.38-1.41 1.83-2.38 3.14l-1.33 1.78-.42.57-.11.16-.03.04-.01.01c-.26.35-.22.84.08 1.14s.8.35 1.14.09l.01-.01.04-.03.16-.12.58-.42 1.78-1.32c1.3-.97 2.76-2.06 3.14-2.38l.05-.05c.73-.73.73-1.92 0-2.65" clipRule="evenodd" />
        <path d="M1.13 13.52v-.17z" />
    </IconBase>
  ))
);

Gauge0Fill.displayName = 'Gauge0Fill';

// Triple export pattern
export { Gauge0Fill, Gauge0Fill as Gauge0FillIcon, Gauge0Fill as SiGauge0Fill };
export default Gauge0Fill;
export type { Gauge0FillProps };
