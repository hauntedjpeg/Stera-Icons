import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinAreaCircleRegularProps = Omit<IconBaseProps, 'children'>;

const MapPinAreaCircleRegular = memo(
  forwardRef<SVGSVGElement, MapPinAreaCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.86 15.07a.75.75 0 0 1 1.03-.25c1.02.62 1.86 1.52 1.86 2.68 0 .73-.34 1.37-.84 1.88q-.77.77-1.95 1.28A15 15 0 0 1 12 21.75c-2.29 0-4.4-.4-5.96-1.09a6 6 0 0 1-1.95-1.28 2.7 2.7 0 0 1-.84-1.88c0-1.16.84-2.06 1.86-2.68a.75.75 0 1 1 .78 1.28c-.86.52-1.14 1.03-1.14 1.4 0 .24.1.52.42.84q.46.5 1.47.95c1.34.58 3.23.96 5.36.96s4.02-.38 5.36-.96q1-.45 1.47-.95c.31-.32.42-.6.42-.84 0-.37-.28-.88-1.14-1.4a.75.75 0 0 1-.25-1.03" />
        <path fillRule="evenodd" d="M12 5.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2.25c3.45 0 6.25 2.8 6.25 6.25 0 1.05-.4 2.18-.94 3.22a21 21 0 0 1-1.96 3.05 36 36 0 0 1-2.75 3.2l-.05.04-.01.02-.16.11-.09.05-.03.01-.23.05h-.12l-.03-.01-.06-.02a1 1 0 0 1-.26-.12l-.03-.02-.06-.05-.02-.02-.05-.05-.82-.87c-.52-.58-1.22-1.4-1.93-2.32-.7-.93-1.42-1.98-1.96-3.05a7.4 7.4 0 0 1-.94-3.22c0-3.45 2.8-6.25 6.25-6.25m0 1.5A4.75 4.75 0 0 0 7.25 8.5q.02 1.07.78 2.54c.49.96 1.14 1.93 1.82 2.82a34 34 0 0 0 1.85 2.22l.3.33q.15-.14.3-.33c.5-.56 1.18-1.34 1.85-2.22s1.33-1.86 1.82-2.82q.76-1.47.78-2.54A4.75 4.75 0 0 0 12 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinAreaCircleRegular.displayName = 'MapPinAreaCircleRegular';

// Triple export pattern
export { MapPinAreaCircleRegular, MapPinAreaCircleRegular as MapPinAreaCircleRegularIcon, MapPinAreaCircleRegular as SiMapPinAreaCircleRegular };
export default MapPinAreaCircleRegular;
export type { MapPinAreaCircleRegularProps };
