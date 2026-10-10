import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinAreaBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinAreaBoldDuotone = memo(
  forwardRef<SVGSVGElement, MapPinAreaBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.5 15c.55 0 1 .45 1 1s-.45 1-1 1h-.65q-.17 0-.24.16l-1 2.5c-.06.16.06.34.24.34h14.3c.18 0 .3-.18.24-.34l-1-2.5q-.07-.16-.24-.16h-.65c-.55 0-1-.45-1-1s.45-1 1-1h.65c.92 0 1.75.56 2.1 1.41l1 2.5c.58 1.48-.5 3.09-2.1 3.09H4.85c-1.6 0-2.68-1.6-2.1-3.09l1-2.5C4.1 15.56 4.94 15 5.86 15z" opacity={.4} />
        <path fillRule="evenodd" d="M12 5.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2c3.59 0 6.5 2.91 6.5 6.5 0 1.1-.43 2.28-.97 3.34-.55 1.08-1.28 2.14-1.98 3.08-.71.93-1.42 1.75-1.95 2.34l-.64.69-.18.19-.05.05-.02.02-.07.06-.1.07-.1.05q-.1.05-.2.08h-.02l-.06.02h-.14l-.02.01h-.12l-.05-.02h-.04l-.05-.02q-.1-.02-.2-.07l-.04-.02q-.12-.07-.2-.16l-.03-.02-.05-.05-.18-.2-.64-.68c-.53-.59-1.24-1.4-1.95-2.34-.7-.94-1.43-2-1.98-3.08-.54-1.06-.97-2.23-.97-3.34C5.5 4.91 8.41 2 12 2m0 2C9.51 4 7.5 6.01 7.5 8.5q0 .98.75 2.43c.48.93 1.13 1.9 1.8 2.78.66.88 1.33 1.65 1.83 2.2l.12.13.12-.12c.5-.56 1.17-1.33 1.83-2.21s1.32-1.85 1.8-2.78q.74-1.45.75-2.43C16.5 6.01 14.49 4 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinAreaBoldDuotone.displayName = 'MapPinAreaBoldDuotone';

// Triple export pattern
export { MapPinAreaBoldDuotone, MapPinAreaBoldDuotone as MapPinAreaBoldDuotoneIcon, MapPinAreaBoldDuotone as SiMapPinAreaBoldDuotone };
export default MapPinAreaBoldDuotone;
export type { MapPinAreaBoldDuotoneProps };
