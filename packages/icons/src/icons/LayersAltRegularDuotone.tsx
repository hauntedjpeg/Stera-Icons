import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayersAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, LayersAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.67 16.33c.37-.19.82-.04 1 .34.19.37.04.82-.34 1l-6.2 3.1c-1.34.67-2.92.67-4.25 0l-6.21-3.1c-.38-.18-.53-.63-.34-1 .18-.38.63-.53 1-.34l6.22 3.1c.91.46 1.99.46 2.9 0z" opacity={0.4} />
        <path d="M19.67 11.83c.37-.19.82-.04 1 .33.19.38.04.83-.34 1.01l-6.2 3.1c-1.34.67-2.92.67-4.25 0l-6.21-3.1c-.38-.18-.53-.63-.34-1 .18-.38.63-.53 1-.34l6.22 3.1c.91.46 1.99.46 2.9 0z" opacity={0.4} />
        <path fillRule="evenodd" d="M9.88 3.22c1.33-.67 2.9-.67 4.24 0L20 6.16c1.11.55 1.1 2.13 0 2.68l-5.87 2.94c-1.33.66-2.9.66-4.24 0L4 8.84C2.9 8.3 2.9 6.71 4 6.16zm3.57 1.35c-.91-.46-1.99-.46-2.9 0L4.68 7.5l5.87 2.93c.91.46 1.99.46 2.9 0l5.87-2.93z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersAltRegularDuotone.displayName = 'LayersAltRegularDuotone';

// Triple export pattern
export { LayersAltRegularDuotone, LayersAltRegularDuotone as LayersAltRegularDuotoneIcon, LayersAltRegularDuotone as SiLayersAltRegularDuotone };
export default LayersAltRegularDuotone;
export type { LayersAltRegularDuotoneProps };
