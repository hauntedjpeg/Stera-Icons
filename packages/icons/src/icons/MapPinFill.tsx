import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinFillProps = Omit<IconBaseProps, 'children'>;

const MapPinFill = memo(
  forwardRef<SVGSVGElement, MapPinFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13A7.9 7.9 0 0 1 19.88 10c0 3.32-1.93 6.28-3.72 8.33a25 25 0 0 1-3.56 3.31l-.06.05-.02.02h-.01l-.21.11-.22.05h-.14l-.1-.01h-.01l-.21-.07h-.01l-.03-.02-.08-.05-.01-.01-.03-.02-.06-.05a15 15 0 0 1-1.06-.85 25 25 0 0 1-2.5-2.46c-1.8-2.05-3.71-5-3.71-8.33A7.9 7.9 0 0 1 12 2.13m0 5.12a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinFill.displayName = 'MapPinFill';

// Triple export pattern (lucide-react style)
export { MapPinFill, MapPinFill as MapPinFillIcon, MapPinFill as SiMapPinFill };
export default MapPinFill;
export type { MapPinFillProps };
