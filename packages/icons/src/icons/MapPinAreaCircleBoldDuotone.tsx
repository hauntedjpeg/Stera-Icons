import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinAreaCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinAreaCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, MapPinAreaCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.98 14.6a1 1 0 0 1 1.04 1.71c-.84.51-1.02.95-1.02 1.19 0 .15.07.38.35.67q.42.45 1.4.89c1.29.56 3.15.94 5.25.94s3.96-.38 5.26-.94q.96-.44 1.4-.9c.27-.28.34-.5.34-.66 0-.24-.18-.68-1.02-1.19a1 1 0 0 1 1.04-1.7c1.05.63 1.98 1.6 1.98 2.89 0 .81-.38 1.51-.91 2.06-.52.54-1.23.98-2.03 1.33C16.46 21.6 14.3 22 12 22s-4.46-.4-6.06-1.1q-1.22-.54-2.03-1.34A3 3 0 0 1 3 17.5c0-1.29.93-2.26 1.98-2.9" opacity={.4} />
        <path fillRule="evenodd" d="M12 5.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2a6.5 6.5 0 0 1 6.5 6.5c0 1.1-.43 2.28-.97 3.34a21 21 0 0 1-1.98 3.08 36 36 0 0 1-2.82 3.27l-.02.02a1 1 0 0 1-.46.26h-.03l-.06.02h-.14l-.02.01h-.07l-.1-.02h-.04l-.05-.02a1 1 0 0 1-.45-.25l-.02-.02-.87-.93c-.53-.59-1.24-1.4-1.95-2.34-.7-.94-1.43-2-1.98-3.08A8 8 0 0 1 5.5 8.5 6.5 6.5 0 0 1 12 2m0 2a4.5 4.5 0 0 0-4.5 4.5q0 .98.75 2.43c.48.93 1.13 1.9 1.8 2.78.66.88 1.33 1.65 1.83 2.2l.12.13.12-.12c.5-.56 1.17-1.33 1.83-2.21s1.32-1.85 1.8-2.78q.74-1.45.75-2.43A4.5 4.5 0 0 0 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinAreaCircleBoldDuotone.displayName = 'MapPinAreaCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { MapPinAreaCircleBoldDuotone, MapPinAreaCircleBoldDuotone as MapPinAreaCircleBoldDuotoneIcon, MapPinAreaCircleBoldDuotone as SiMapPinAreaCircleBoldDuotone };
export default MapPinAreaCircleBoldDuotone;
export type { MapPinAreaCircleBoldDuotoneProps };
