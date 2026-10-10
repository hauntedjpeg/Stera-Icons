import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinFillDuotone = memo(
  forwardRef<SVGSVGElement, MapPinFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c4.35 0 7.88 3.52 7.88 7.87 0 3.32-1.93 6.28-3.72 8.33-.91 1.04-1.82 1.88-2.5 2.46q-.51.45-.82.67l-.24.18-.06.05-.02.02h-.01q-.1.07-.21.11-.12.04-.22.05h-.14l-.1-.01h-.01q-.06 0-.1-.03h-.02l-.1-.04-.03-.02-.08-.05-.01-.01-.03-.02-.06-.05-.24-.18q-.3-.23-.82-.67c-.68-.58-1.59-1.42-2.5-2.46-1.8-2.05-3.71-5-3.71-8.33 0-4.35 3.52-7.87 7.87-7.87m0 5.12c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75S13.52 7.25 12 7.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 7.25c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75S9.25 11.52 9.25 10 10.48 7.25 12 7.25" />
    </IconBase>
  ))
);

MapPinFillDuotone.displayName = 'MapPinFillDuotone';

// Triple export pattern
export { MapPinFillDuotone, MapPinFillDuotone as MapPinFillDuotoneIcon, MapPinFillDuotone as SiMapPinFillDuotone };
export default MapPinFillDuotone;
export type { MapPinFillDuotoneProps };
