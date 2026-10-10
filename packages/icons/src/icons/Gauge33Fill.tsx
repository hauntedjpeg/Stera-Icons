import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge33FillProps = Omit<IconBaseProps, 'children'>;

const Gauge33Fill = memo(
  forwardRef<SVGSVGElement, Gauge33FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.88 2.6c2.34.2 4.47 1.12 6.16 2.56l-2 2c-.34.35-.34.9 0 1.24.34.35.9.35 1.24 0l2-2c1.44 1.69 2.37 3.82 2.56 6.17H20c-.48 0-.87.39-.87.87s.39.88.87.88h2.84c-.21 2.65-1.38 5.04-3.15 6.82q-.26.25-.62.25H4.93q-.36-.01-.62-.25c-1.77-1.78-2.94-4.17-3.15-6.82H4c.49 0 .88-.4.88-.88s-.4-.87-.88-.87H1.16c.43-5.3 4.66-9.54 9.97-9.96v2.83c0 .48.39.88.87.88s.87-.4.88-.88zM7.57 7.8c-.35-.27-.83-.23-1.14.08-.3.3-.34.79-.08 1.13v.02l.04.04.11.16.42.57 1.32 1.78c.98 1.31 2.06 2.76 2.39 3.14l.04.05c.74.73 1.92.73 2.66 0 .73-.73.73-1.92 0-2.65l-.05-.05c-.38-.32-1.83-1.4-3.14-2.38L8.36 8.37l-.58-.42-.16-.12-.04-.03z" clipRule="evenodd" />
        <path d="M1.13 13.52v-.17z" />
    </IconBase>
  ))
);

Gauge33Fill.displayName = 'Gauge33Fill';

// Triple export pattern
export { Gauge33Fill, Gauge33Fill as Gauge33FillIcon, Gauge33Fill as SiGauge33Fill };
export default Gauge33Fill;
export type { Gauge33FillProps };
