import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayersSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, LayersSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.4 13.13a2.12 2.12 0 0 1 0 3.74l-7.07 3.85c-1.45.8-3.2.8-4.66 0l-7.08-3.85a2.12 2.12 0 0 1 0-3.74L4.67 12l5 2.72c1.45.8 3.2.8 4.66 0l5-2.72z" opacity={.4} />
        <path d="M9.67 3.28c1.45-.8 3.2-.8 4.66 0l7.08 3.85a2.12 2.12 0 0 1 0 3.74l-7.08 3.85c-1.45.8-3.2.8-4.66 0l-7.08-3.86a2.12 2.12 0 0 1 0-3.73z" />
    </IconBase>
  ))
);

LayersSimpleFillDuotone.displayName = 'LayersSimpleFillDuotone';

// Triple export pattern (lucide-react style)
export { LayersSimpleFillDuotone, LayersSimpleFillDuotone as LayersSimpleFillDuotoneIcon, LayersSimpleFillDuotone as SiLayersSimpleFillDuotone };
export default LayersSimpleFillDuotone;
export type { LayersSimpleFillDuotoneProps };
