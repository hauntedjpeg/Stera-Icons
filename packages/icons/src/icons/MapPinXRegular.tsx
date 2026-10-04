import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinXRegularProps = Omit<IconBaseProps, 'children'>;

const MapPinXRegular = memo(
  forwardRef<SVGSVGElement, MapPinXRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.25A7.75 7.75 0 0 1 19.75 10q0 1.13-.27 2.18a.75.75 0 1 1-1.46-.36q.23-.9.23-1.82a6.25 6.25 0 1 0-12.5 0c0 2.72 1.6 5.3 3.31 7.26a23 23 0 0 0 2.94 2.8l.51-.43a.75.75 0 0 1 .98 1.15l-.97.77-.08.06a.75.75 0 0 1-.88 0l-.02-.02-.3-.22-.82-.68a25 25 0 0 1-2.48-2.45C6.14 16.2 4.25 13.28 4.25 10A7.75 7.75 0 0 1 12 2.25" />
        <path d="M20.47 13.97a.75.75 0 1 1 1.06 1.06L19.56 17l1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 1 1-1.06-1.06L17.44 17l-1.97-1.97a.75.75 0 1 1 1.06-1.06l1.97 1.97z" />
        <path fillRule="evenodd" d="M12 6.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinXRegular.displayName = 'MapPinXRegular';

// Triple export pattern (lucide-react style)
export { MapPinXRegular, MapPinXRegular as MapPinXRegularIcon, MapPinXRegular as SiMapPinXRegular };
export default MapPinXRegular;
export type { MapPinXRegularProps };
