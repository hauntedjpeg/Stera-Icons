import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersAltBoldProps = Omit<IconBaseProps, 'children'>;

const LayersAltBold = memo(
  forwardRef<SVGSVGElement, LayersAltBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.55 16.1c.5-.24 1.1-.04 1.35.45.24.5.04 1.1-.45 1.34L14.24 21c-1.41.7-3.07.7-4.48 0l-6.2-3.1c-.5-.25-.7-.85-.45-1.35s.84-.7 1.34-.44l6.2 3.1c.85.42 1.85.42 2.7 0z" />
        <path d="M19.55 11.6c.5-.24 1.1-.04 1.35.45.24.5.04 1.1-.45 1.34l-6.21 3.11c-1.41.7-3.07.7-4.48 0l-6.2-3.1c-.5-.25-.7-.85-.45-1.35s.84-.7 1.34-.44l6.2 3.1c.85.42 1.85.42 2.7 0z" />
        <path fillRule="evenodd" d="M9.76 3c1.41-.7 3.07-.7 4.48 0l5.87 2.94c1.29.64 1.29 2.48 0 3.13L14.24 12c-1.41.7-3.07.7-4.48 0L3.9 9.07c-1.3-.65-1.3-2.49 0-3.13zm3.58 1.79c-.84-.42-1.84-.42-2.68 0L5.24 7.5l5.42 2.71c.84.42 1.84.42 2.68 0l5.42-2.71z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersAltBold.displayName = 'LayersAltBold';

// Triple export pattern
export { LayersAltBold, LayersAltBold as LayersAltBoldIcon, LayersAltBold as SiLayersAltBold };
export default LayersAltBold;
export type { LayersAltBoldProps };
