import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinPlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinPlusFillDuotone = memo(
  forwardRef<SVGSVGElement, MapPinPlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13A7.9 7.9 0 0 1 19.88 10c0 3.32-1.93 6.28-3.72 8.33a25 25 0 0 1-3.56 3.31l-.06.05-.02.02h-.01l-.21.11-.22.05h-.14l-.1-.01h-.01l-.21-.07h-.01l-.03-.02-.08-.05-.01-.01-.03-.02-.06-.05a15 15 0 0 1-1.06-.85 25 25 0 0 1-2.5-2.46c-1.8-2.05-3.71-5-3.71-8.33A7.9 7.9 0 0 1 12 2.13m0 4.5c-.48 0-.87.39-.87.87v1.63H9.5a.87.87 0 1 0 0 1.74h1.63v1.63a.88.88 0 0 0 1.74 0v-1.62h1.63a.88.88 0 0 0 0-1.76h-1.62V7.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.63c.48 0 .88.39.88.87v1.63h1.62a.88.88 0 0 1 0 1.74h-1.62v1.63a.88.88 0 0 1-1.76 0v-1.62H9.5a.88.88 0 0 1 0-1.76h1.63V7.5c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

MapPinPlusFillDuotone.displayName = 'MapPinPlusFillDuotone';

// Triple export pattern (lucide-react style)
export { MapPinPlusFillDuotone, MapPinPlusFillDuotone as MapPinPlusFillDuotoneIcon, MapPinPlusFillDuotone as SiMapPinPlusFillDuotone };
export default MapPinPlusFillDuotone;
export type { MapPinPlusFillDuotoneProps };
