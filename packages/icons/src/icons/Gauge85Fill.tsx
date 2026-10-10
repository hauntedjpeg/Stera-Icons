import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge85FillProps = Omit<IconBaseProps, 'children'>;

const Gauge85Fill = memo(
  forwardRef<SVGSVGElement, Gauge85FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.46c6.08 0 11 4.93 11 11 0 3.04-1.23 5.8-3.22 7.78q-.3.3-.7.3H4.92q-.42 0-.7-.3C2.22 19.25 1 16.5 1 13.46c0-6.07 4.92-11 11-11M7.75 17.71c-.39-.4-1.02-.4-1.41 0l-1.06 1.06c-.4.39-.4 1.02 0 1.41.39.4 1.02.4 1.41 0l1.06-1.06c.4-.39.4-1.02 0-1.41m9.91 0c-.39-.4-1.02-.4-1.41 0-.4.39-.4 1.02 0 1.41l1.06 1.06c.39.4 1.02.4 1.41 0 .4-.39.4-1.02 0-1.41zM12 11.46c-1.1 0-2 .9-2 2s.9 2 2 2h.08c.5-.04 2.3-.3 3.91-.53l2.2-.33.7-.1.2-.04h.06c.49-.08.85-.5.85-1 0-.49-.36-.91-.85-.98h-.02l-.05-.02-.2-.02-.7-.11L16 12c-1.6-.24-3.4-.5-3.91-.53zm-8.5 1c-.55 0-1 .45-1 1 0 .56.45 1 1 1H5c.55 0 1-.44 1-1 0-.55-.45-1-1-1zm3.2-5.71c-.39-.4-1.02-.4-1.41 0-.4.39-.4 1.02 0 1.41l1.06 1.06c.39.4 1.02.4 1.41 0 .4-.39.4-1.02 0-1.41zm12.01 0c-.39-.4-1.02-.4-1.41 0L16.24 7.8c-.4.39-.4 1.02 0 1.41.39.4 1.02.4 1.41 0l1.06-1.06c.4-.39.4-1.02 0-1.41M12 3.96c-.56 0-1 .46-1 1v1.51c0 .55.46 1 1 1 .56 0 1-.45 1-1v-1.5c0-.56-.45-1-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

Gauge85Fill.displayName = 'Gauge85Fill';

// Triple export pattern
export { Gauge85Fill, Gauge85Fill as Gauge85FillIcon, Gauge85Fill as SiGauge85Fill };
export default Gauge85Fill;
export type { Gauge85FillProps };
