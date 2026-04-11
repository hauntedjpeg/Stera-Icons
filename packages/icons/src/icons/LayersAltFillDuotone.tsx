import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayersAltFillDuotone = memo(
  forwardRef<SVGSVGElement, LayersAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.6 16.22a.88.88 0 0 1 .8 1.56l-6.22 3.1a4.9 4.9 0 0 1-4.36 0l-6.21-3.1a.88.88 0 0 1 .78-1.56l6.21 3.1c.88.44 1.92.44 2.8 0z" opacity={0.4} />
        <path d="M19.6 11.72a.88.88 0 0 1 .8 1.56l-6.22 3.1a4.9 4.9 0 0 1-4.36 0l-6.21-3.1a.88.88 0 0 1 .78-1.56l6.21 3.1c.88.44 1.92.44 2.8 0z" opacity={0.4} />
        <path d="M9.82 3.11a4.9 4.9 0 0 1 4.36 0l5.87 2.94c1.2.6 1.2 2.3 0 2.9l-5.87 2.94a4.9 4.9 0 0 1-4.36 0L3.95 8.95c-1.2-.6-1.2-2.3 0-2.9z" />
    </IconBase>
  ))
);

LayersAltFillDuotone.displayName = 'LayersAltFillDuotone';

// Triple export pattern (lucide-react style)
export { LayersAltFillDuotone, LayersAltFillDuotone as LayersAltFillDuotoneIcon, LayersAltFillDuotone as SiLayersAltFillDuotone };
export default LayersAltFillDuotone;
export type { LayersAltFillDuotoneProps };
