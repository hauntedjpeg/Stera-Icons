import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScaleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScaleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScaleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.93 14.54a1 1 0 0 1-.34 1.15A6 6 0 0 1 5 17a6 6 0 0 1-3.6-1.3 1 1 0 0 1-.33-1.16L3.55 8h2.13a5 5 0 0 0 .75-.06zm-5.7-.05q.93.52 1.77.51.84 0 1.78-.5L5 9.8zM17.57 7.94a5 5 0 0 0 .75.06h2.13l2.48 6.54a1 1 0 0 1-.34 1.15A6 6 0 0 1 19 17a6 6 0 0 1-3.6-1.3 1 1 0 0 1-.33-1.16zm-.35 6.55q.94.52 1.78.51.84 0 1.78-.5L19 9.8z" opacity={0.4} />
        <path d="M12 2a1 1 0 0 1 1 1v1.35a5 5 0 0 1 .67.18l3.64 1.3a3 3 0 0 0 1 .17H21a1 1 0 1 1 0 2h-2.68a5 5 0 0 1-1.68-.29L13 6.41V20h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2V6.42l-3.64 1.3A5 5 0 0 1 5.68 8H3a1 1 0 0 1 0-2h2.68a3 3 0 0 0 1.01-.17l3.64-1.3a5 5 0 0 1 .67-.18V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ScaleBoldDuotone.displayName = 'ScaleBoldDuotone';

// Triple export pattern (lucide-react style)
export { ScaleBoldDuotone, ScaleBoldDuotone as ScaleBoldDuotoneIcon, ScaleBoldDuotone as SiScaleBoldDuotone };
export default ScaleBoldDuotone;
export type { ScaleBoldDuotoneProps };
