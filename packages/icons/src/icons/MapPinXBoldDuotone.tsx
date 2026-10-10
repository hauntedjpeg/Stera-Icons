import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinXBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinXBoldDuotone = memo(
  forwardRef<SVGSVGElement, MapPinXBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2c4.42 0 8 3.58 8 8q0 1.16-.28 2.24c-.13.54-.67.86-1.2.73-.55-.13-.87-.67-.74-1.2q.21-.88.22-1.77c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.63 1.55 5.15 3.25 7.1.84.95 1.68 1.73 2.3 2.27l.45.36.35-.29c.42-.35 1.06-.3 1.41.12.36.42.3 1.05-.11 1.4l-.77.63-.21.16-.06.05h-.02v.01c-.36.25-.82.25-1.17 0L12 21l-.58.81h-.01l-.02-.02-.06-.04-.24-.19q-.32-.23-.83-.68c-.69-.58-1.6-1.43-2.51-2.47C5.95 16.35 4 13.37 4 10c0-4.42 3.58-8 8-8" opacity={0.4} />
        <path fillRule="evenodd" d="M12 6.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5m0 2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" opacity={0.4} />
        <path d="M20.3 13.8c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L19.92 17l1.8 1.8c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-1.79-1.79-1.8 1.8c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42L17.08 17l-1.8-1.8c-.39-.38-.39-1.02 0-1.4.4-.4 1.03-.4 1.42 0l1.79 1.79z" />
    </IconBase>
  ))
);

MapPinXBoldDuotone.displayName = 'MapPinXBoldDuotone';

// Triple export pattern
export { MapPinXBoldDuotone, MapPinXBoldDuotone as MapPinXBoldDuotoneIcon, MapPinXBoldDuotone as SiMapPinXBoldDuotone };
export default MapPinXBoldDuotone;
export type { MapPinXBoldDuotoneProps };
