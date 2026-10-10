import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinAreaFillProps = Omit<IconBaseProps, 'children'>;

const MapPinAreaFill = memo(
  forwardRef<SVGSVGElement, MapPinAreaFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.5 15c.55 0 1 .45 1 1s-.45 1-1 1h-.65q-.17 0-.24.16l-1 2.5c-.06.16.06.34.24.34h14.3c.18 0 .3-.18.24-.34l-1-2.5q-.07-.16-.24-.16h-.65c-.55 0-1-.45-1-1s.45-1 1-1h.65c.92 0 1.75.56 2.1 1.41l1 2.5c.58 1.48-.5 3.09-2.1 3.09H4.85c-1.6 0-2.68-1.6-2.1-3.09l1-2.5C4.1 15.56 4.94 15 5.86 15z" />
        <path fillRule="evenodd" d="M12 2.13c3.52 0 6.38 2.85 6.38 6.37 0 1.08-.42 2.23-.96 3.28-.55 1.07-1.27 2.13-1.97 3.06s-1.41 1.75-1.94 2.33l-.64.7-.18.18-.05.05h-.01l-.01.02-.07.06q-.09.07-.19.12h-.03q-.06.04-.14.05h-.02q-.17.05-.34 0h-.03q-.06 0-.14-.04l-.02-.01q-.1-.05-.2-.12l-.06-.06v-.01l-.02-.01-.05-.05-.18-.19-.64-.69c-.53-.58-1.23-1.4-1.94-2.33-.7-.93-1.42-1.99-1.97-3.06-.54-1.05-.96-2.2-.96-3.28 0-3.52 2.86-6.37 6.38-6.37M12 6c-1.38 0-2.5 1.12-2.5 2.5S10.62 11 12 11s2.5-1.12 2.5-2.5S13.38 6 12 6" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinAreaFill.displayName = 'MapPinAreaFill';

// Triple export pattern
export { MapPinAreaFill, MapPinAreaFill as MapPinAreaFillIcon, MapPinAreaFill as SiMapPinAreaFill };
export default MapPinAreaFill;
export type { MapPinAreaFillProps };
