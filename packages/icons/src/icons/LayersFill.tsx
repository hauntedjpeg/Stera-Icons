import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersFillProps = Omit<IconBaseProps, 'children'>;

const LayersFill = memo(
  forwardRef<SVGSVGElement, LayersFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.82 3.11a4.9 4.9 0 0 1 4.36 0l5.87 2.94c1.2.6 1.2 2.3 0 2.9l-1.6.8 1.6.8c1.2.6 1.2 2.3 0 2.9l-1.6.8 1.6.8c1.2.6 1.2 2.3 0 2.9l-5.87 2.94a4.9 4.9 0 0 1-4.36 0l-5.87-2.94c-1.2-.6-1.2-2.3 0-2.9l1.6-.8-1.6-.8c-1.2-.6-1.2-2.3 0-2.9l1.6-.8-1.6-.8c-1.2-.6-1.2-2.3 0-2.9zm4.36 13.28a4.9 4.9 0 0 1-4.36 0L7.5 15.23 4.96 16.5l5.64 2.82c.88.44 1.92.44 2.8 0l5.64-2.82-2.54-1.27zm0-4.5a4.9 4.9 0 0 1-4.36 0L7.5 10.73 4.96 12l5.64 2.82c.88.44 1.92.44 2.8 0L19.04 12l-2.54-1.27z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersFill.displayName = 'LayersFill';

// Triple export pattern (lucide-react style)
export { LayersFill, LayersFill as LayersFillIcon, LayersFill as SiLayersFill };
export default LayersFill;
export type { LayersFillProps };
