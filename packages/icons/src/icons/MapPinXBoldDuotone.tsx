import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinXBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinXBoldDuotone = memo(
  forwardRef<SVGSVGElement, MapPinXBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2a8 8 0 0 1 8 8q0 1.16-.28 2.24a1 1 0 0 1-1.94-.48q.21-.87.22-1.76a6 6 0 0 0-12 0c0 2.63 1.55 5.15 3.25 7.1A23 23 0 0 0 12 19.72l.35-.29a1 1 0 1 1 1.3 1.53l-.98.78-.06.05h-.02v.01a1 1 0 0 1-1.17 0L12 21l-.58.81h-.01l-.02-.02-.3-.23q-.32-.23-.83-.68c-.69-.58-1.6-1.43-2.51-2.47C5.95 16.35 4 13.37 4 10a8 8 0 0 1 8-8" opacity={0.4} />
        <path fillRule="evenodd" d="M12 6.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={0.4} />
        <path d="M20.3 13.8a1 1 0 1 1 1.4 1.4L19.92 17l1.8 1.8a1 1 0 0 1-1.42 1.4l-1.79-1.79-1.8 1.8a1 1 0 0 1-1.4-1.42L17.08 17l-1.8-1.8a1 1 0 1 1 1.42-1.4l1.79 1.79z" />
    </IconBase>
  ))
);

MapPinXBoldDuotone.displayName = 'MapPinXBoldDuotone';

// Triple export pattern (lucide-react style)
export { MapPinXBoldDuotone, MapPinXBoldDuotone as MapPinXBoldDuotoneIcon, MapPinXBoldDuotone as SiMapPinXBoldDuotone };
export default MapPinXBoldDuotone;
export type { MapPinXBoldDuotoneProps };
