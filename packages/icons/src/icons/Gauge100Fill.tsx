import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge100FillProps = Omit<IconBaseProps, 'children'>;

const Gauge100Fill = memo(
  forwardRef<SVGSVGElement, Gauge100FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.9 2.6c2.34.2 4.47 1.12 6.16 2.56l-2 2c-.34.35-.34.9 0 1.24.34.35.9.35 1.24 0l2-2c1.44 1.69 2.37 3.82 2.56 6.17h-2.84c-.48 0-.87.39-.87.87s.39.88.87.88h2.84c-.22 2.65-1.38 5.04-3.15 6.82q-.27.25-.62.25H4.95q-.36-.01-.62-.25c-1.78-1.78-2.94-4.17-3.15-6.82h2.84c.48 0 .88-.4.88-.88s-.4-.87-.88-.87H1.18c.19-2.35 1.12-4.48 2.56-6.17l2 2c.35.35.9.35 1.25 0s.34-.89 0-1.23L4.98 5.16c1.69-1.44 3.82-2.37 6.16-2.55v2.83c0 .48.4.88.88.88s.87-.4.87-.88zm.45 9.52c-.74-.73-1.92-.73-2.66 0-.73.73-.73 1.92 0 2.65l.05.05c.38.32 1.83 1.4 3.14 2.38l1.78 1.32.58.42.16.12.04.03.01.01c.35.26.83.22 1.14-.09.3-.3.34-.79.08-1.13v-.02l-.04-.04-.11-.16-.43-.57-1.32-1.78c-.97-1.31-2.05-2.76-2.38-3.14z" clipRule="evenodd" />
        <path d="M1.15 13.52v-.17z" />
    </IconBase>
  ))
);

Gauge100Fill.displayName = 'Gauge100Fill';

// Triple export pattern
export { Gauge100Fill, Gauge100Fill as Gauge100FillIcon, Gauge100Fill as SiGauge100Fill };
export default Gauge100Fill;
export type { Gauge100FillProps };
