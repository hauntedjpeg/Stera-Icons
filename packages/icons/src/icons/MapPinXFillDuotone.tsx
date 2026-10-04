import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinXFillDuotone = memo(
  forwardRef<SVGSVGElement, MapPinXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13A7.9 7.9 0 0 1 19.88 10c0 1.01-.19 2-.49 2.92l-.89.9-.9-.91a2.25 2.25 0 1 0-3.2 3.18l.92.91-.91.9c-.7.71-.84 1.76-.42 2.6l-.33.29a22 22 0 0 1-1.06.85l-.06.05-.02.02h-.01l-.21.11-.22.05h-.14l-.1-.01h-.01l-.21-.07h-.01l-.03-.02-.08-.05-.01-.01-.03-.02-.06-.05a15 15 0 0 1-1.06-.85 25 25 0 0 1-2.5-2.46c-1.8-2.05-3.71-5-3.71-8.33A7.9 7.9 0 0 1 12 2.13m0 5.12a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" clipRule="evenodd" opacity={.4} />
        <path d="M20.3 13.8a1 1 0 1 1 1.4 1.4L19.92 17l1.8 1.8a1 1 0 0 1-1.42 1.4l-1.79-1.79-1.8 1.8a1 1 0 0 1-1.4-1.42L17.08 17l-1.8-1.8a1 1 0 1 1 1.42-1.4l1.79 1.79z" />
    </IconBase>
  ))
);

MapPinXFillDuotone.displayName = 'MapPinXFillDuotone';

// Triple export pattern (lucide-react style)
export { MapPinXFillDuotone, MapPinXFillDuotone as MapPinXFillDuotoneIcon, MapPinXFillDuotone as SiMapPinXFillDuotone };
export default MapPinXFillDuotone;
export type { MapPinXFillDuotoneProps };
