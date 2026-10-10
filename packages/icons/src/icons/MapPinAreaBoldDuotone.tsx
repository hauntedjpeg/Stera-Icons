import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinAreaBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinAreaBoldDuotone = memo(
  forwardRef<SVGSVGElement, MapPinAreaBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.5 15a1 1 0 1 1 0 2h-.65q-.17 0-.24.16l-1 2.5c-.06.16.06.34.24.34h14.3c.18 0 .3-.18.24-.34l-1-2.5a.3.3 0 0 0-.24-.16h-.65a1 1 0 1 1 0-2h.65c.92 0 1.75.56 2.1 1.41l1 2.5c.58 1.48-.5 3.09-2.1 3.09H4.85c-1.6 0-2.68-1.6-2.1-3.09l1-2.5A2.25 2.25 0 0 1 5.86 15z" opacity={.4} />
        <path fillRule="evenodd" d="M12 5.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2a6.5 6.5 0 0 1 6.5 6.5c0 1.1-.43 2.28-.97 3.34a21 21 0 0 1-1.98 3.08 36 36 0 0 1-2.82 3.27l-.02.02a1 1 0 0 1-.46.26h-.03l-.06.02h-.14l-.02.01h-.07l-.1-.02h-.04l-.05-.02a1 1 0 0 1-.45-.25l-.02-.02-.87-.93c-.53-.59-1.24-1.4-1.95-2.34-.7-.94-1.43-2-1.98-3.08A8 8 0 0 1 5.5 8.5 6.5 6.5 0 0 1 12 2m0 2a4.5 4.5 0 0 0-4.5 4.5q0 .98.75 2.43c.48.93 1.13 1.9 1.8 2.78.66.88 1.33 1.65 1.83 2.2l.12.13.12-.12c.5-.56 1.17-1.33 1.83-2.21s1.32-1.85 1.8-2.78q.74-1.45.75-2.43A4.5 4.5 0 0 0 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinAreaBoldDuotone.displayName = 'MapPinAreaBoldDuotone';

// Triple export pattern
export { MapPinAreaBoldDuotone, MapPinAreaBoldDuotone as MapPinAreaBoldDuotoneIcon, MapPinAreaBoldDuotone as SiMapPinAreaBoldDuotone };
export default MapPinAreaBoldDuotone;
export type { MapPinAreaBoldDuotoneProps };
