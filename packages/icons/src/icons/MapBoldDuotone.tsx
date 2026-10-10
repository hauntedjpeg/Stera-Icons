import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapBoldDuotone = memo(
  forwardRef<SVGSVGElement, MapBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m16 17.26-1 .58-1-.58V9.07l.5.3c.3.18.7.18 1 0l.5-.3zM10 6.74v8.18l-.5-.28c-.3-.19-.7-.19-1 0l-.5.28V6.74l1-.58z" opacity={0.4} />
        <path fillRule="evenodd" d="M20.5 4.14c.3-.18.69-.19 1 0 .3.17.5.5.5.86v10.5c0 .36-.19.68-.5.86l-6 3.5c-.3.19-.7.19-1 0L9 16.66l-5.5 3.2c-.3.18-.69.19-1 0-.3-.17-.5-.5-.5-.86V8.5c0-.36.19-.69.5-.86l6-3.5.12-.06c.28-.12.61-.1.88.06l5.5 3.2zM4 9.07v8.19l4.5-2.62c.3-.19.7-.19 1 0l5.5 3.2 5-2.92V6.74l-4.5 2.62c-.3.19-.7.19-1 0L9 6.16z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapBoldDuotone.displayName = 'MapBoldDuotone';

// Triple export pattern
export { MapBoldDuotone, MapBoldDuotone as MapBoldDuotoneIcon, MapBoldDuotone as SiMapBoldDuotone };
export default MapBoldDuotone;
export type { MapBoldDuotoneProps };
