import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge50FillProps = Omit<IconBaseProps, 'children'>;

const Gauge50Fill = memo(
  forwardRef<SVGSVGElement, Gauge50FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.59c2.69 0 5.15.98 7.04 2.6l-2 2c-.34.34-.34.9 0 1.23.34.34.9.34 1.24 0l2-2c1.44 1.69 2.37 3.82 2.56 6.17H20c-.48 0-.87.39-.87.87s.39.88.87.88h2.84c-.21 2.65-1.38 5.04-3.15 6.81q-.26.26-.62.26H4.93q-.36-.01-.62-.26C2.54 19.38 1.37 17 1.16 14.34H4c.49 0 .88-.4.88-.88s-.4-.87-.88-.87H1.16c.2-2.35 1.12-4.48 2.56-6.17l2 2c.35.35.9.35 1.25 0s.34-.9 0-1.23L4.96 5.18c1.9-1.62 4.35-2.6 7.04-2.6m0 3c-.43 0-.8.32-.87.74v.07l-.04.2-.1.7-.33 2.2c-.24 1.6-.5 3.4-.53 3.9v.06c0 1.04.83 1.88 1.87 1.88s1.87-.84 1.88-1.88v-.06c-.05-.5-.3-2.3-.54-3.9L13 7.3l-.1-.7-.04-.2v-.06c-.07-.43-.44-.75-.87-.75" clipRule="evenodd" />
        <path d="M1.13 13.54v-.17z" />
    </IconBase>
  ))
);

Gauge50Fill.displayName = 'Gauge50Fill';

// Triple export pattern
export { Gauge50Fill, Gauge50Fill as Gauge50FillIcon, Gauge50Fill as SiGauge50Fill };
export default Gauge50Fill;
export type { Gauge50FillProps };
