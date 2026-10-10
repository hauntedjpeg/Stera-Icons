import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersAltRegularProps = Omit<IconBaseProps, 'children'>;

const LayersAltRegular = memo(
  forwardRef<SVGSVGElement, LayersAltRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.67 16.33c.37-.19.82-.04 1 .33s.04.83-.33 1.01l-6.22 3.1c-1.33.67-2.9.67-4.24 0l-6.21-3.1c-.37-.18-.53-.64-.34-1 .18-.38.63-.53 1-.34l6.22 3.1c.91.46 1.99.46 2.9 0z" />
        <path d="M19.67 11.83c.37-.19.82-.04 1 .33s.04.83-.33 1.01l-6.22 3.1c-1.33.67-2.9.67-4.24 0l-6.21-3.1c-.37-.18-.53-.63-.34-1 .18-.38.63-.53 1-.34l6.22 3.1c.91.46 1.99.46 2.9 0z" />
        <path fillRule="evenodd" d="M9.88 3.22c1.33-.67 2.9-.67 4.24 0L20 6.16c1.11.55 1.1 2.13 0 2.68l-5.87 2.94c-1.33.66-2.9.66-4.24 0L4 8.84C2.9 8.3 2.9 6.71 4 6.16zm3.57 1.35c-.91-.46-1.99-.46-2.9 0L4.68 7.5l5.87 2.93c.91.46 1.99.46 2.9 0l5.87-2.93z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersAltRegular.displayName = 'LayersAltRegular';

// Triple export pattern
export { LayersAltRegular, LayersAltRegular as LayersAltRegularIcon, LayersAltRegular as SiLayersAltRegular };
export default LayersAltRegular;
export type { LayersAltRegularProps };
