import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge66FillProps = Omit<IconBaseProps, 'children'>;

const Gauge66Fill = memo(
  forwardRef<SVGSVGElement, Gauge66FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.9 2.6c5.3.43 9.53 4.66 9.96 9.97h-2.84c-.48 0-.87.39-.87.87s.39.88.87.88h2.84c-.22 2.65-1.38 5.04-3.15 6.82q-.27.25-.62.25H4.95q-.36-.01-.62-.25c-1.78-1.78-2.94-4.17-3.15-6.82h2.84c.48 0 .88-.4.88-.88s-.4-.87-.88-.87H1.18c.19-2.35 1.12-4.48 2.56-6.17l2 2c.35.35.9.35 1.25 0s.34-.89 0-1.23L4.98 5.16c1.69-1.44 3.82-2.37 6.16-2.55v2.83c0 .48.4.88.88.88s.87-.4.87-.88zm4.69 5.28c-.3-.3-.8-.35-1.14-.09l-.01.01-.05.03-.15.12-.58.42-1.78 1.32c-1.3.97-2.76 2.06-3.14 2.38l-.05.05c-.73.73-.73 1.92 0 2.65.74.73 1.92.73 2.66 0l.04-.05c.33-.38 1.41-1.83 2.38-3.14L17.1 9.8l.43-.57.11-.16.03-.04.01-.01c.26-.35.22-.84-.08-1.14" clipRule="evenodd" />
        <path d="M1.15 13.52v-.17z" />
    </IconBase>
  ))
);

Gauge66Fill.displayName = 'Gauge66Fill';

// Triple export pattern
export { Gauge66Fill, Gauge66Fill as Gauge66FillIcon, Gauge66Fill as SiGauge66Fill };
export default Gauge66Fill;
export type { Gauge66FillProps };
