import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinAreaCircleFillProps = Omit<IconBaseProps, 'children'>;

const MapPinAreaCircleFill = memo(
  forwardRef<SVGSVGElement, MapPinAreaCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.04 14.71c.42-.25.96-.12 1.2.3.26.4.13.94-.28 1.2-.85.51-1.08.99-1.08 1.29 0 .2.08.45.38.75q.45.49 1.43.92c1.32.58 3.2.95 5.31.95 2.12 0 4-.37 5.3-.95q.99-.44 1.44-.92c.3-.3.38-.56.39-.75 0-.3-.24-.78-1.09-1.3-.4-.25-.54-.78-.29-1.2.25-.4.8-.54 1.2-.29 1.04.63 1.93 1.57 1.93 2.79 0 .77-.37 1.44-.88 1.97-.5.53-1.2.96-2 1.3-1.57.7-3.7 1.1-6 1.1s-4.43-.4-6-1.1c-.8-.34-1.5-.77-2-1.3-.51-.53-.87-1.2-.87-1.97 0-1.22.88-2.16 1.91-2.79" />
        <path fillRule="evenodd" d="M12 2.13c3.52 0 6.38 2.85 6.38 6.37 0 1.08-.42 2.23-.96 3.28-.55 1.07-1.27 2.13-1.97 3.06s-1.41 1.75-1.94 2.33l-.64.7-.18.18-.05.05h-.01l-.01.02q-.11.11-.26.18h-.02q-.07.04-.15.05h-.02q-.17.05-.34 0h-.03q-.06 0-.14-.04l-.02-.01q-.14-.07-.26-.18v-.01l-.02-.01-.05-.05-.18-.19-.64-.69c-.53-.58-1.23-1.4-1.94-2.33-.7-.93-1.42-1.99-1.97-3.06-.54-1.05-.95-2.2-.95-3.28 0-3.52 2.85-6.37 6.37-6.37M12 6c-1.38 0-2.5 1.12-2.5 2.5S10.62 11 12 11s2.5-1.12 2.5-2.5S13.38 6 12 6" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinAreaCircleFill.displayName = 'MapPinAreaCircleFill';

// Triple export pattern
export { MapPinAreaCircleFill, MapPinAreaCircleFill as MapPinAreaCircleFillIcon, MapPinAreaCircleFill as SiMapPinAreaCircleFill };
export default MapPinAreaCircleFill;
export type { MapPinAreaCircleFillProps };
