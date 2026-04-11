import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinMinusFillProps = Omit<IconBaseProps, 'children'>;

const MapPinMinusFill = memo(
  forwardRef<SVGSVGElement, MapPinMinusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13A7.9 7.9 0 0 1 19.88 10c0 3.32-1.93 6.28-3.72 8.33a25 25 0 0 1-3.56 3.31l-.06.05-.02.02h-.01l-.21.11-.22.05h-.14l-.1-.01h-.01l-.21-.07h-.01l-.03-.02-.08-.05-.01-.01-.03-.02-.06-.05a15 15 0 0 1-1.06-.85 25 25 0 0 1-2.5-2.46c-1.8-2.05-3.71-5-3.71-8.33A7.9 7.9 0 0 1 12 2.13m-2.5 7a.87.87 0 1 0 0 1.74h5a.88.88 0 0 0 0-1.74z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinMinusFill.displayName = 'MapPinMinusFill';

// Triple export pattern (lucide-react style)
export { MapPinMinusFill, MapPinMinusFill as MapPinMinusFillIcon, MapPinMinusFill as SiMapPinMinusFill };
export default MapPinMinusFill;
export type { MapPinMinusFillProps };
