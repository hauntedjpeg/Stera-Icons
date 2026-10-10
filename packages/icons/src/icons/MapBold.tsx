import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapBoldProps = Omit<IconBaseProps, 'children'>;

const MapBold = memo(
  forwardRef<SVGSVGElement, MapBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.05 4h.08l.2.06q.03 0 .05.02.07.02.12.06l5.5 3.2 5.5-3.2c.3-.18.69-.19 1 0 .3.17.5.5.5.86v10.5c0 .36-.19.68-.5.86l-6 3.5q-.11.07-.24.1l-.08.02-.05.01h-.31l-.08-.02q-.13-.04-.24-.1L9 16.65l-5.5 3.2c-.3.18-.69.19-1 0-.3-.17-.5-.5-.5-.86V8.5c0-.36.19-.69.5-.86l6-3.5q.05-.04.11-.06l.06-.02q.1-.04.2-.05h.08L9 4zM4 9.07v8.19l4-2.34V6.74zm6 5.85 4 2.34V9.07l-4-2.33zm6-5.85v8.19l4-2.34V6.74z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapBold.displayName = 'MapBold';

// Triple export pattern
export { MapBold, MapBold as MapBoldIcon, MapBold as SiMapBold };
export default MapBold;
export type { MapBoldProps };
