import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapRegularDuotone = memo(
  forwardRef<SVGSVGElement, MapRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m15.75 17.7-.75.43-.75-.44V8.93l.37.22q.38.2.76 0l.37-.22zM9.75 6.3v8.77l-.37-.22c-.2-.12-.45-.13-.67-.04l-.09.04-.37.22V6.3L9 5.87z" opacity={0.4} />
        <path fillRule="evenodd" d="M20.62 4.35c.23-.13.52-.13.75 0 .24.13.38.38.38.65v10.5q-.01.42-.37.65l-6 3.5q-.38.2-.76 0L9 16.37l-5.62 3.28c-.23.13-.52.13-.75 0-.24-.13-.38-.38-.38-.65V8.5q.01-.42.37-.65l6-3.5q.38-.2.76 0L15 7.63zM3.75 8.93v8.76l4.87-2.84.1-.04c.2-.1.45-.08.66.04L15 18.13l5.25-3.06V6.3l-4.87 2.85q-.38.2-.76 0L9 5.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapRegularDuotone.displayName = 'MapRegularDuotone';

// Triple export pattern
export { MapRegularDuotone, MapRegularDuotone as MapRegularDuotoneIcon, MapRegularDuotone as SiMapRegularDuotone };
export default MapRegularDuotone;
export type { MapRegularDuotoneProps };
