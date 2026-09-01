import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CrownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CrownBoldDuotone = memo(
  forwardRef<SVGSVGElement, CrownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.72 16.32A2.5 2.5 0 0 1 20 18.5v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1c0-.94.52-1.75 1.28-2.18l.26.94a1 1 0 0 0 .96.74.5.5 0 0 0-.5.5v1h12v-1a.5.5 0 0 0-.5-.5 1 1 0 0 0 .96-.74z" opacity={.4} />
        <path fillRule="evenodd" d="M12 2a2.5 2.5 0 0 1 1.29 4.64l1.72 4.8 3.13-2.11A2.5 2.5 0 0 1 20.5 6a2.5 2.5 0 1 1-.33 4.98l-1.7 6.28a1 1 0 0 1-.97.74h-11a1 1 0 0 1-.96-.74l-1.7-6.28-.34.02a2.5 2.5 0 1 1 2.36-1.67l3.13 2.12 1.72-4.81A2.5 2.5 0 0 1 12 2m-1.12 10.12a2 2 0 0 1-3 .99l-1.71-1.16L7.27 16h9.47l1.1-4.05-1.71 1.16a2 2 0 0 1-3-.99L12 8.97zM3.5 8a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m17 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M12 4a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1" clipRule="evenodd" />
    </IconBase>
  ))
);

CrownBoldDuotone.displayName = 'CrownBoldDuotone';

// Triple export pattern (lucide-react style)
export { CrownBoldDuotone, CrownBoldDuotone as CrownBoldDuotoneIcon, CrownBoldDuotone as SiCrownBoldDuotone };
export default CrownBoldDuotone;
export type { CrownBoldDuotoneProps };
