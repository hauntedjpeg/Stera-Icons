import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinAreaRegularProps = Omit<IconBaseProps, 'children'>;

const MapPinAreaRegular = memo(
  forwardRef<SVGSVGElement, MapPinAreaRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.5 15.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.65c-.2 0-.4.12-.47.31l-1 2.5c-.13.33.11.69.47.69h14.3c.36 0 .6-.36.47-.69l-1-2.5q-.14-.3-.47-.31h-.65c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.65c.82 0 1.56.5 1.86 1.26l1 2.5c.53 1.31-.44 2.74-1.86 2.74H4.85c-1.42 0-2.39-1.43-1.86-2.74l1-2.5c.3-.76 1.04-1.26 1.86-1.26z" />
        <path fillRule="evenodd" d="M12 5.75c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75-2.75-1.23-2.75-2.75S10.48 5.75 12 5.75m0 1.5c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2.25c3.45 0 6.25 2.8 6.25 6.25 0 1.05-.4 2.18-.94 3.22-.54 1.07-1.26 2.12-1.96 3.05s-1.4 1.74-1.93 2.32l-.64.69-.18.18-.05.05-.01.02q-.07.06-.15.1-.04.05-.1.06h-.02l-.11.04-.12.02h-.13l-.03-.01-.06-.01-.08-.03-.06-.03-.07-.03-.05-.04-.03-.02-.06-.05-.02-.02-.05-.05-.18-.18-.64-.7c-.52-.57-1.22-1.39-1.93-2.31-.7-.93-1.42-1.98-1.96-3.05-.53-1.04-.94-2.17-.94-3.22 0-3.45 2.8-6.25 6.25-6.25m0 1.5c-2.62 0-4.75 2.13-4.75 4.75q.02 1.07.78 2.54c.49.96 1.14 1.93 1.82 2.82.67.88 1.34 1.66 1.85 2.22l.3.33q.15-.14.3-.33c.5-.56 1.18-1.34 1.85-2.22s1.33-1.86 1.82-2.82q.77-1.47.78-2.54c0-2.62-2.13-4.75-4.75-4.75" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinAreaRegular.displayName = 'MapPinAreaRegular';

// Triple export pattern
export { MapPinAreaRegular, MapPinAreaRegular as MapPinAreaRegularIcon, MapPinAreaRegular as SiMapPinAreaRegular };
export default MapPinAreaRegular;
export type { MapPinAreaRegularProps };
