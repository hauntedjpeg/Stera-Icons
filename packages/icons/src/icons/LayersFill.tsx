import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersFillProps = Omit<IconBaseProps, 'children'>;

const LayersFill = memo(
  forwardRef<SVGSVGElement, LayersFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.88 3.22c1.33-.66 2.9-.66 4.24 0L20 6.16c1.1.55 1.1 2.13 0 2.68l-1.81.9 1.81.92c1.1.55 1.1 2.13 0 2.68l-1.81.9 1.81.92c1.1.55 1.1 2.13 0 2.68l-5.87 2.94c-1.33.67-2.9.67-4.24 0L4 17.84c-1.1-.55-1.1-2.13 0-2.68l1.81-.91-1.81-.9c-1.1-.56-1.1-2.14 0-2.7l1.81-.9-1.81-.9c-1.1-.56-1.1-2.14 0-2.7zm4.24 13.06c-1.33.67-2.9.67-4.24 0l-2.38-1.2-2.82 1.42 5.87 2.93c.91.46 1.99.46 2.9 0l5.87-2.93-2.82-1.41zm0-4.5c-1.33.67-2.9.67-4.24 0l-2.38-1.2L4.68 12l5.87 2.94c.91.45 1.99.45 2.9 0L19.32 12l-2.82-1.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersFill.displayName = 'LayersFill';

// Triple export pattern
export { LayersFill, LayersFill as LayersFillIcon, LayersFill as SiLayersFill };
export default LayersFill;
export type { LayersFillProps };
