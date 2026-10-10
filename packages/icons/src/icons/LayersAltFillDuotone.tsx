import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayersAltFillDuotone = memo(
  forwardRef<SVGSVGElement, LayersAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.6 16.22c.44-.22.97-.04 1.18.39.22.43.04.96-.39 1.17l-6.21 3.1c-1.37.7-2.99.7-4.36 0l-6.21-3.1c-.43-.21-.6-.74-.4-1.17.22-.43.75-.6 1.18-.4l6.21 3.11c.88.44 1.92.44 2.8 0z" opacity={0.4} />
        <path d="M19.6 11.72c.44-.22.97-.04 1.18.39.22.43.04.96-.39 1.17l-6.21 3.1c-1.37.7-2.99.7-4.36 0l-6.21-3.1c-.43-.21-.6-.74-.4-1.17.22-.43.75-.6 1.18-.4l6.21 3.11c.88.44 1.92.44 2.8 0z" opacity={0.4} />
        <path d="M9.82 3.11c1.37-.68 2.99-.68 4.36 0l5.87 2.94c1.2.6 1.2 2.3 0 2.9l-5.87 2.94c-1.37.68-2.99.68-4.36 0L3.95 8.95c-1.2-.6-1.2-2.3 0-2.9z" />
    </IconBase>
  ))
);

LayersAltFillDuotone.displayName = 'LayersAltFillDuotone';

// Triple export pattern
export { LayersAltFillDuotone, LayersAltFillDuotone as LayersAltFillDuotoneIcon, LayersAltFillDuotone as SiLayersAltFillDuotone };
export default LayersAltFillDuotone;
export type { LayersAltFillDuotoneProps };
