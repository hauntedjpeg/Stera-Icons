import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinnedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinnedFillDuotone = memo(
  forwardRef<SVGSVGElement, MapPinnedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.56 3.24a.87.87 0 0 1 1.32.76v4.27a.88.88 0 0 1-1.75 0V5.52l-4.69 2.74a.9.9 0 0 1-.88 0L9.87 5.52V14l.66.38a.88.88 0 0 1-.88 1.51L9 15.51l-5.56 3.25A.87.87 0 0 1 2.13 18V7.5c0-.31.16-.6.43-.76l6-3.5a1 1 0 0 1 .3-.1h.02l.08-.01h.17q.1.02.2.06l.05.02.06.03L15 6.5zM3.88 8v8.48L8.13 14V5.52z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M17 9.25a4.8 4.8 0 0 1 4.75 4.84c0 .86-.31 1.7-.72 2.44s-.95 1.44-1.47 2.03a19 19 0 0 1-2.08 2.01v.01h-.01l-.03.03-.12.06-.04.02-.22.06h-.11l-.23-.05-.04-.02-.04-.02-.03-.02-.05-.04-.03-.01-.01-.02-.18-.14a17 17 0 0 1-3.37-3.9 5 5 0 0 1-.72-2.44A4.8 4.8 0 0 1 17 9.25m0 3.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinnedFillDuotone.displayName = 'MapPinnedFillDuotone';

// Triple export pattern (lucide-react style)
export { MapPinnedFillDuotone, MapPinnedFillDuotone as MapPinnedFillDuotoneIcon, MapPinnedFillDuotone as SiMapPinnedFillDuotone };
export default MapPinnedFillDuotone;
export type { MapPinnedFillDuotoneProps };
