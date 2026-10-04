import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinAreaRegularProps = Omit<IconBaseProps, 'children'>;

const MapPinAreaRegular = memo(
  forwardRef<SVGSVGElement, MapPinAreaRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.5 15.25a.75.75 0 0 1 0 1.5h-.65a.5.5 0 0 0-.47.31l-1 2.5a.5.5 0 0 0 .47.69h14.3a.5.5 0 0 0 .47-.69l-1-2.5a.5.5 0 0 0-.47-.31h-.65a.75.75 0 0 1 0-1.5h.65a2 2 0 0 1 1.86 1.26l1 2.5a2 2 0 0 1-1.86 2.74H4.85a2 2 0 0 1-1.86-2.74l1-2.5a2 2 0 0 1 1.86-1.26z" />
        <path fillRule="evenodd" d="M12 5.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2.25c3.45 0 6.25 2.8 6.25 6.25 0 1.05-.4 2.18-.94 3.22a21 21 0 0 1-1.96 3.05 36 36 0 0 1-2.75 3.2l-.05.04-.01.02a1 1 0 0 1-.25.16h-.02a1 1 0 0 1-.24.06h-.12l-.03-.01-.06-.01a1 1 0 0 1-.26-.13l-.03-.02-.06-.05-.02-.02-.05-.05-.82-.87c-.52-.58-1.22-1.4-1.93-2.32a21 21 0 0 1-1.96-3.05 7.4 7.4 0 0 1-.94-3.22c0-3.45 2.8-6.25 6.25-6.25m0 1.5A4.75 4.75 0 0 0 7.25 8.5q.02 1.07.78 2.54c.49.96 1.14 1.93 1.82 2.82.67.88 1.34 1.66 1.85 2.22l.3.33q.15-.14.3-.33c.5-.56 1.18-1.34 1.85-2.22s1.33-1.86 1.82-2.82q.77-1.47.78-2.54A4.75 4.75 0 0 0 12 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinAreaRegular.displayName = 'MapPinAreaRegular';

// Triple export pattern (lucide-react style)
export { MapPinAreaRegular, MapPinAreaRegular as MapPinAreaRegularIcon, MapPinAreaRegular as SiMapPinAreaRegular };
export default MapPinAreaRegular;
export type { MapPinAreaRegularProps };
