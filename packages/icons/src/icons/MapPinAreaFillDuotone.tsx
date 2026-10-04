import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinAreaFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinAreaFillDuotone = memo(
  forwardRef<SVGSVGElement, MapPinAreaFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.5 15a1 1 0 1 1 0 2h-.65q-.17 0-.24.16l-1 2.5c-.06.16.06.34.24.34h14.3c.18 0 .3-.18.24-.34l-1-2.5a.3.3 0 0 0-.24-.16h-.65a1 1 0 1 1 0-2h.65c.92 0 1.75.56 2.1 1.41l1 2.5c.58 1.48-.5 3.09-2.1 3.09H4.85c-1.6 0-2.68-1.6-2.1-3.09l1-2.5A2.25 2.25 0 0 1 5.86 15z" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.13a6.4 6.4 0 0 1 6.38 6.37 7.5 7.5 0 0 1-.96 3.28 21 21 0 0 1-1.97 3.06 36 36 0 0 1-2.76 3.21l-.05.05h-.01l-.01.02a1 1 0 0 1-.26.18h-.02a1 1 0 0 1-.68 0h-.02a1 1 0 0 1-.26-.18v-.01l-.02-.01-.05-.05-.82-.88c-.53-.58-1.23-1.4-1.94-2.33-.7-.93-1.42-1.99-1.97-3.06a7.5 7.5 0 0 1-.95-3.28A6.37 6.37 0 0 1 12 2.13M12 6a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinAreaFillDuotone.displayName = 'MapPinAreaFillDuotone';

// Triple export pattern (lucide-react style)
export { MapPinAreaFillDuotone, MapPinAreaFillDuotone as MapPinAreaFillDuotoneIcon, MapPinAreaFillDuotone as SiMapPinAreaFillDuotone };
export default MapPinAreaFillDuotone;
export type { MapPinAreaFillDuotoneProps };
