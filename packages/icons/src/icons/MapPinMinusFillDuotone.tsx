import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinMinusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinMinusFillDuotone = memo(
  forwardRef<SVGSVGElement, MapPinMinusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c4.35 0 7.88 3.52 7.88 7.87 0 3.32-1.93 6.28-3.72 8.33-.91 1.04-1.82 1.88-2.5 2.46q-.51.45-.82.67l-.24.18-.06.05-.02.02h-.01q-.1.07-.21.11-.12.04-.22.05h-.14l-.1-.01h-.01q-.06 0-.1-.03h-.02l-.1-.04-.03-.02-.08-.05-.01-.01-.03-.02-.06-.05-.24-.18q-.3-.23-.82-.67c-.68-.58-1.59-1.42-2.5-2.46-1.8-2.05-3.71-5-3.71-8.33 0-4.35 3.52-7.87 7.87-7.87m-2.5 7c-.48 0-.87.39-.87.87s.39.88.87.88h5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" opacity={.4} />
        <path d="M14.5 9.13c.48 0 .88.39.88.87s-.4.88-.88.88h-5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

MapPinMinusFillDuotone.displayName = 'MapPinMinusFillDuotone';

// Triple export pattern
export { MapPinMinusFillDuotone, MapPinMinusFillDuotone as MapPinMinusFillDuotoneIcon, MapPinMinusFillDuotone as SiMapPinMinusFillDuotone };
export default MapPinMinusFillDuotone;
export type { MapPinMinusFillDuotoneProps };
