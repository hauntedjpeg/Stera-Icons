import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinBoldDuotone = memo(
  forwardRef<SVGSVGElement, MapPinBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c4.42 0 8 3.58 8 8 0 3.37-1.95 6.35-3.75 8.4-.91 1.05-1.82 1.9-2.5 2.48q-.53.45-.84.68l-.24.19q-.21.17-.5.23h-.03q-.08.03-.14.02l-.14-.01h-.03q-.23-.05-.4-.17h-.01l-.01-.01-.02-.02-.06-.04-.24-.19q-.32-.23-.83-.68c-.69-.58-1.6-1.43-2.51-2.47C5.95 16.35 4 13.37 4 10c0-4.42 3.58-8 8-8m0 2c-3.31 0-6 2.69-6 6 0 2.63 1.55 5.15 3.25 7.1.84.95 1.68 1.73 2.3 2.27l.45.36.44-.36c.63-.54 1.47-1.32 2.3-2.28C16.45 15.15 18 12.63 18 10c0-3.31-2.69-6-6-6" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 6.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5m0 2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinBoldDuotone.displayName = 'MapPinBoldDuotone';

// Triple export pattern
export { MapPinBoldDuotone, MapPinBoldDuotone as MapPinBoldDuotoneIcon, MapPinBoldDuotone as SiMapPinBoldDuotone };
export default MapPinBoldDuotone;
export type { MapPinBoldDuotoneProps };
