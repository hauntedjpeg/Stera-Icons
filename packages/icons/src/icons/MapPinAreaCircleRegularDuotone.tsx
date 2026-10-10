import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinAreaCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinAreaCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, MapPinAreaCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.86 15.07c.21-.35.68-.47 1.03-.25 1.02.62 1.86 1.52 1.86 2.68 0 .73-.34 1.37-.84 1.88q-.77.77-1.95 1.28c-1.57.69-3.67 1.09-5.96 1.09s-4.4-.4-5.96-1.09c-.78-.34-1.46-.77-1.95-1.28-.5-.51-.84-1.15-.84-1.88 0-1.16.84-2.06 1.86-2.68.35-.22.82-.1 1.03.25s.1.81-.25 1.03c-.86.52-1.14 1.03-1.14 1.4 0 .23.1.52.42.84q.46.5 1.47.95c1.34.58 3.23.96 5.36.96s4.02-.38 5.36-.96q1-.45 1.47-.95c.31-.32.42-.6.42-.84 0-.37-.28-.88-1.14-1.4-.35-.22-.47-.68-.25-1.03" opacity={.4} />
        <path fillRule="evenodd" d="M12 5.75c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75-2.75-1.23-2.75-2.75S10.48 5.75 12 5.75m0 1.5c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2.25c3.45 0 6.25 2.8 6.25 6.25 0 1.05-.4 2.18-.94 3.22-.54 1.07-1.26 2.12-1.96 3.05s-1.4 1.74-1.93 2.32l-.64.69-.18.18-.05.05-.01.02-.16.11-.09.05-.03.01-.1.03-.12.02h-.13l-.03-.01-.06-.02-.08-.02-.06-.02-.07-.04-.05-.04-.03-.02-.06-.05-.02-.02-.05-.05-.18-.18-.64-.7c-.52-.57-1.22-1.39-1.93-2.31-.7-.93-1.42-1.98-1.96-3.05-.53-1.04-.94-2.17-.94-3.22 0-3.45 2.8-6.25 6.25-6.25m0 1.5c-2.62 0-4.75 2.13-4.75 4.75q.02 1.07.78 2.54c.49.96 1.14 1.93 1.82 2.82.67.88 1.34 1.66 1.85 2.22l.3.33q.15-.14.3-.33c.5-.56 1.18-1.34 1.85-2.22s1.33-1.86 1.82-2.82q.76-1.47.78-2.54c0-2.62-2.13-4.75-4.75-4.75" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinAreaCircleRegularDuotone.displayName = 'MapPinAreaCircleRegularDuotone';

// Triple export pattern
export { MapPinAreaCircleRegularDuotone, MapPinAreaCircleRegularDuotone as MapPinAreaCircleRegularDuotoneIcon, MapPinAreaCircleRegularDuotone as SiMapPinAreaCircleRegularDuotone };
export default MapPinAreaCircleRegularDuotone;
export type { MapPinAreaCircleRegularDuotoneProps };
