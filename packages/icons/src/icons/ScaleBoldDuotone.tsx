import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScaleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScaleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScaleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.93 14.54c.16.41.02.89-.34 1.15C7.47 16.53 6.26 17 5 17s-2.47-.47-3.6-1.3c-.36-.27-.5-.75-.33-1.16L3.55 8h2.13q.38 0 .75-.06zm-5.7-.05q.93.52 1.77.51.84 0 1.78-.5L5 9.8zM17.57 7.94q.37.06.75.06h2.13l2.48 6.54c.16.41.02.89-.34 1.15C21.47 16.53 20.26 17 19 17s-2.47-.47-3.6-1.3c-.36-.27-.5-.75-.33-1.16zm-.35 6.55q.94.52 1.78.51.84 0 1.78-.5L19 9.8z" opacity={0.4} />
        <path d="M12 2c.55 0 1 .45 1 1v1.35q.34.06.67.18l3.64 1.3q.48.17 1 .17H21c.55 0 1 .45 1 1s-.45 1-1 1h-2.68q-.87 0-1.68-.29L13 6.41V20h2c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1h2V6.42l-3.64 1.3q-.81.27-1.68.28H3c-.55 0-1-.45-1-1s.45-1 1-1h2.68q.53 0 1.01-.17l3.64-1.3q.33-.11.67-.18V3c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

ScaleBoldDuotone.displayName = 'ScaleBoldDuotone';

// Triple export pattern
export { ScaleBoldDuotone, ScaleBoldDuotone as ScaleBoldDuotoneIcon, ScaleBoldDuotone as SiScaleBoldDuotone };
export default ScaleBoldDuotone;
export type { ScaleBoldDuotoneProps };
