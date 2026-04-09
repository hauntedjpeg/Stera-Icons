import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapFillDuotone = memo(
  forwardRef<SVGSVGElement, MapFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="map-fill-duotone" {...props}>
      <path d="m8.13 15-4.26 2.48V9l4.26-2.48zM20.13 15l-4.25 2.48V9l4.24-2.48z" opacity={0.4} />
        <path fillRule="evenodd" d="M9.04 4.13h.09q.1.02.2.06l.05.02.06.03L15 7.5l5.56-3.25a.87.87 0 0 1 1.32.76v10.5c0 .31-.17.6-.44.76l-6 3.5-.06.03-.05.02-.2.05h-.02l-.07.01h-.17l-.2-.06-.05-.02-.06-.03L9 16.5l-5.56 3.25A.87.87 0 0 1 2.13 19V8.5c0-.31.16-.6.43-.76l6-3.5a1 1 0 0 1 .3-.1h.02l.08-.01h.08M3.88 9v8.48L8.13 15V6.52zm12 0v8.48L20.12 15V6.52z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapFillDuotone.displayName = 'MapFillDuotone';

// Triple export pattern (lucide-react style)
export { MapFillDuotone, MapFillDuotone as MapFillDuotoneIcon, MapFillDuotone as SiMapFillDuotone };
export default MapFillDuotone;
export type { MapFillDuotoneProps };
