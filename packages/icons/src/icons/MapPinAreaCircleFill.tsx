import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinAreaCircleFillProps = Omit<IconBaseProps, 'children'>;

const MapPinAreaCircleFill = memo(
  forwardRef<SVGSVGElement, MapPinAreaCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.04 14.71a.87.87 0 0 1 .92 1.5c-.85.51-1.08.99-1.08 1.29 0 .2.08.45.38.75q.45.49 1.43.92c1.32.58 3.2.95 5.31.95 2.12 0 4-.37 5.3-.95q.99-.44 1.44-.92c.3-.3.38-.56.39-.75 0-.3-.24-.78-1.09-1.3a.88.88 0 0 1 .92-1.49c1.03.63 1.91 1.57 1.91 2.79 0 .77-.36 1.44-.87 1.97-.5.53-1.2.96-2 1.3-1.57.7-3.7 1.1-6 1.1s-4.43-.4-6-1.1a6 6 0 0 1-2-1.3 2.8 2.8 0 0 1-.87-1.97c0-1.22.88-2.16 1.91-2.79" />
        <path fillRule="evenodd" d="M12 2.13a6.4 6.4 0 0 1 6.38 6.37 7.5 7.5 0 0 1-.96 3.28 21 21 0 0 1-1.97 3.06 36 36 0 0 1-2.76 3.21l-.05.05h-.01l-.01.02a1 1 0 0 1-.26.18h-.02a1 1 0 0 1-.68 0h-.02a1 1 0 0 1-.26-.18v-.01l-.02-.01-.05-.05-.82-.88c-.53-.58-1.23-1.4-1.94-2.33-.7-.93-1.42-1.99-1.97-3.06a7.5 7.5 0 0 1-.95-3.28A6.37 6.37 0 0 1 12 2.13M12 6a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinAreaCircleFill.displayName = 'MapPinAreaCircleFill';

// Triple export pattern
export { MapPinAreaCircleFill, MapPinAreaCircleFill as MapPinAreaCircleFillIcon, MapPinAreaCircleFill as SiMapPinAreaCircleFill };
export default MapPinAreaCircleFill;
export type { MapPinAreaCircleFillProps };
