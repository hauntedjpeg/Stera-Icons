import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapRegularProps = Omit<IconBaseProps, 'children'>;

const MapRegular = memo(
  forwardRef<SVGSVGElement, MapRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.03 4.25q.18 0 .34.1L15 7.63l5.62-3.28c.23-.13.52-.13.75 0 .24.13.38.38.38.65v10.5q-.01.42-.37.65l-6 3.5q-.17.1-.35.1h-.06q-.18 0-.34-.1h-.01L9 16.36l-5.62 3.28c-.23.13-.52.13-.75 0-.24-.13-.38-.38-.38-.65V8.5q.01-.42.37-.65 3-1.77 6-3.5.17-.1.35-.1h.06M3.75 8.93v8.76l4.5-2.62V6.3zm6 6.14 4.5 2.62V8.93L9.75 6.3zm6-6.14v8.76l4.5-2.62V6.3z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapRegular.displayName = 'MapRegular';

// Triple export pattern
export { MapRegular, MapRegular as MapRegularIcon, MapRegular as SiMapRegular };
export default MapRegular;
export type { MapRegularProps };
