import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinAreaCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinAreaCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, MapPinAreaCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.98 14.6c.47-.28 1.09-.13 1.37.34.3.47.14 1.09-.33 1.37-.84.51-1.02.95-1.02 1.19 0 .15.07.38.35.67q.42.45 1.4.89c1.29.56 3.15.94 5.25.94s3.96-.38 5.26-.94q.96-.44 1.4-.9c.27-.28.34-.5.34-.66 0-.24-.18-.68-1.02-1.19-.47-.28-.62-.9-.33-1.37s.9-.62 1.37-.34c1.05.64 1.98 1.61 1.98 2.9 0 .81-.38 1.51-.91 2.06-.52.54-1.23.98-2.03 1.33C16.46 21.6 14.3 22 12 22s-4.46-.4-6.06-1.1q-1.22-.54-2.03-1.34C3.38 19 3 18.3 3 17.5c0-1.29.93-2.26 1.98-2.9" opacity={.4} />
        <path fillRule="evenodd" d="M12 5.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2c3.59 0 6.5 2.91 6.5 6.5 0 1.1-.43 2.28-.97 3.34-.55 1.08-1.28 2.14-1.98 3.08-.71.93-1.42 1.75-1.95 2.34l-.64.69-.18.19-.05.05-.02.02-.07.06-.1.07-.1.05q-.1.05-.2.08h-.02l-.06.02h-.14l-.02.01h-.12l-.05-.02h-.04l-.05-.02q-.1-.02-.2-.07l-.04-.02q-.12-.07-.2-.16l-.03-.02-.05-.05-.18-.2-.64-.68c-.53-.59-1.24-1.4-1.95-2.34-.7-.94-1.43-2-1.98-3.08-.54-1.06-.97-2.23-.97-3.34C5.5 4.91 8.41 2 12 2m0 2C9.51 4 7.5 6.01 7.5 8.5q0 .98.75 2.43c.48.93 1.13 1.9 1.8 2.78.66.88 1.33 1.65 1.83 2.2l.12.13.12-.12c.5-.56 1.17-1.33 1.83-2.21s1.32-1.85 1.8-2.78q.74-1.45.75-2.43C16.5 6.01 14.49 4 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinAreaCircleBoldDuotone.displayName = 'MapPinAreaCircleBoldDuotone';

// Triple export pattern
export { MapPinAreaCircleBoldDuotone, MapPinAreaCircleBoldDuotone as MapPinAreaCircleBoldDuotoneIcon, MapPinAreaCircleBoldDuotone as SiMapPinAreaCircleBoldDuotone };
export default MapPinAreaCircleBoldDuotone;
export type { MapPinAreaCircleBoldDuotoneProps };
