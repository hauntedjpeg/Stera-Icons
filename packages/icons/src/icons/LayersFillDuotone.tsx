import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayersFillDuotone = memo(
  forwardRef<SVGSVGElement, LayersFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.05 10.55c1.2.6 1.2 2.3 0 2.9l-1.6.8 1.6.8c1.2.6 1.2 2.3 0 2.9l-5.87 2.94a4.9 4.9 0 0 1-4.36 0l-5.87-2.94c-1.2-.6-1.2-2.3 0-2.9l1.6-.8-1.6-.8c-1.2-.6-1.2-2.3 0-2.9l1.6-.8 1.95.98L4.96 12l5.64 2.82c.88.44 1.92.44 2.8 0L19.04 12l-2.54-1.27 1.96-.98zm-5.87 5.84a4.9 4.9 0 0 1-4.36 0L7.5 15.23 4.96 16.5l5.64 2.82c.88.44 1.92.44 2.8 0l5.64-2.82-2.54-1.27z" clipRule="evenodd" opacity={.4} />
        <path d="M9.82 3.11a4.9 4.9 0 0 1 4.36 0l5.87 2.94c1.2.6 1.2 2.3 0 2.9l-5.87 2.94a4.9 4.9 0 0 1-4.36 0L3.95 8.95c-1.2-.6-1.2-2.3 0-2.9z" />
    </IconBase>
  ))
);

LayersFillDuotone.displayName = 'LayersFillDuotone';

// Triple export pattern (lucide-react style)
export { LayersFillDuotone, LayersFillDuotone as LayersFillDuotoneIcon, LayersFillDuotone as SiLayersFillDuotone };
export default LayersFillDuotone;
export type { LayersFillDuotoneProps };
