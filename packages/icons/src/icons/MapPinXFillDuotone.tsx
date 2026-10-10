import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinXFillDuotone = memo(
  forwardRef<SVGSVGElement, MapPinXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c4.35 0 7.88 3.52 7.88 7.87 0 1.01-.19 2-.49 2.92l-.89.9-.9-.91c-.89-.88-2.31-.88-3.2 0-.87.88-.87 2.3 0 3.18l.92.91-.91.9c-.7.71-.84 1.76-.42 2.6l-.33.29q-.51.45-.82.67l-.24.18-.06.05-.02.02h-.01q-.1.07-.21.11-.12.04-.22.05h-.14l-.1-.01h-.01q-.06 0-.1-.03h-.02l-.1-.04-.03-.02-.08-.05-.01-.01-.03-.02-.06-.05-.24-.18q-.3-.23-.82-.67c-.68-.58-1.59-1.42-2.5-2.46-1.8-2.05-3.71-5-3.71-8.33 0-4.35 3.52-7.87 7.87-7.87m0 5.12c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75S13.52 7.25 12 7.25" clipRule="evenodd" opacity={.4} />
        <path d="M20.3 13.8c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L19.92 17l1.8 1.8c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-1.79-1.79-1.8 1.8c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42L17.08 17l-1.8-1.8c-.39-.38-.39-1.02 0-1.4.4-.4 1.03-.4 1.42 0l1.79 1.79z" />
    </IconBase>
  ))
);

MapPinXFillDuotone.displayName = 'MapPinXFillDuotone';

// Triple export pattern
export { MapPinXFillDuotone, MapPinXFillDuotone as MapPinXFillDuotoneIcon, MapPinXFillDuotone as SiMapPinXFillDuotone };
export default MapPinXFillDuotone;
export type { MapPinXFillDuotoneProps };
